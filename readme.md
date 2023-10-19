# Projeto Vectra Node 🚀

Bem-vindo ao projeto Vectra Node! Este é um projeto de exemplo que demonstra o uso da biblioteca `vectra` para armazenamento e consulta de informações. 
Vectra é um banco de dados local de vetores para Node.js, semelhante ao `Pinecone` ou `Qdrant`, mas usa arquivos locais para armazenamento. Ele organiza os dados em índices baseados em pastas com vetores e metadados. As consultas suportam operadores semelhantes ao MongoDB, e os resultados são ordenados por similaridade. Vectra é eficiente em termos de memória, mas não é adequado para memória de longo prazo em chatbots. É ótimo para pequenos conjuntos de dados estáticos ou documentos únicos para perguntas. Vectra suporta diferentes ligações de linguagem, como Python (vectra-py), permitindo a criação e leitura de índices entre diferentes linguagens.🤓

## O que é o Vectra Node? 🤷‍♂️

O Vectra Node é um projeto de busca semântica que aprimora pesquisas online, retornando documentos e itens do banco de dados relacionados à consulta do usuário. Ele compreende o contexto e a intenção, oferecendo resultados mais relevantes.

## Como Funciona? 🧐

O projeto é dividido em duas partes principais:

1. **Armazenamento**: Você pode adicionar informações sobre equipamentos, como nome, categoria e preço, ao armazenamento local. É como criar um catálogo de coisas que você possui. ( Em formato de texto simples )

2. **Consulta**: Você pode pesquisar informações sobre esses equipamentos. Por exemplo, se você quiser encontrar todas as máquinas de lavar que possui, o Vectra Node pode ajudar.

## Dependências do Projeto 📦

Este projeto depende de algumas bibliotecas para funcionar corretamente.

- **vectra (v0.4.4)**: Essa biblioteca é responsável por gerenciar o armazenamento e a consulta de informações sobre os equipamentos.

## Como Iniciar 🚀

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu computador.
2. Clone este repositório para o seu computador.
3. Abra o terminal na pasta do projeto.
4. Execute o comando `npm install` para instalar as dependências necessárias.
5. Agora, você pode iniciar o projeto com o comando `npm start`.

Este código cria uma instância do Vectra Manager, adiciona informações ao armazenamento e, em seguida, consulta as informações.