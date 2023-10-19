import { LocalIndex } from 'vectra';
import { OpenAIApi, Configuration } from 'openai';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config()

export class VectraManager {
  private index: LocalIndex;
  private api: OpenAIApi;
  private rateLimitDelayMs: number = 30000;

  constructor() {
    this.index = new LocalIndex(path.join(__dirname,'vector-store', 'index'));
    this.api = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
  }

  async init() {
    if (!(await this.index.isIndexCreated())) {
      await this.index.createIndex();
    }
  }

  async getVectorFromLocalStorage(inputText: string) {
    const existingItems = await this.index.listItemsByMetadata({ text: inputText });
    if (existingItems.length > 0) {
      return existingItems[0].vector;
    }
    return null;
  }

  async makeOpenAIRequestWithRateLimit(inputText: string) {
    let retryCount = 0;

    while (true) {
      try {
        const response = await this.api.createEmbedding({
          model: 'text-embedding-ada-002',
          input: inputText,
        });
        return response.data.data[0].embedding;
      } catch (error) {
        if (error.response && error.response.status === 429) {
        
          console.log('Rate limit atingido. Tentando novamente após um atraso.');
          await new Promise((resolve) => setTimeout(resolve, this.rateLimitDelayMs));
          this.rateLimitDelayMs *= 2;
          retryCount++;
        } else {
        
          throw error;
        }

        if (retryCount >= 10) {
          throw new Error('Número máximo de tentativas excedido. Verifique sua lógica de rate limit.');
        }
      }
    }
  }

  async addItem(text: string) {
    await this.init();
    const existingVector = await this.getVectorFromLocalStorage(text);

    if (!existingVector) {
      const vector = await this.makeOpenAIRequestWithRateLimit(text);
      if (vector !== null) {
        await this.index.insertItem({
          vector,
          metadata: { text },
        });
      }
    }
  }

  async query(input: string) {
    const existingVector = await this.getVectorFromLocalStorage(input);

    if (existingVector !== null) {
      const results = await this.index.queryItems(existingVector, 3);
      return results;
    } else {
      return [];
    }
  }
}
