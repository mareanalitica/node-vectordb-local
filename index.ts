import { VectraManager } from './src/vectraManager';

(async () => {
  const vectraManager = new VectraManager();

  // Adicione postagens de blog
  await vectraManager.addItem('Dicas para produtividade no trabalho');
  await vectraManager.addItem('Novidades em tecnologia');
  await vectraManager.addItem('Maçã');
  await vectraManager.addItem('Abelha');
  await vectraManager.addItem('Paulo é doutor em ciencia da computação');

  // Consulta por postagens de blog
  const resultsProdutividade = await vectraManager.query('Dicas para produtividade no trabalho');
  if (resultsProdutividade.length > 0) {
    for (const result of resultsProdutividade) {
      const post = result.item;
      console.log(`Postagem: ${post.metadata.text} | ${post.norm}`);
    }
  } else {
    console.log('Nenhuma postagem encontrada para "Dicas para produtividade no trabalho".');
  }

  // Consulta por postagens de blog
  const resultsTecnologia = await vectraManager.query('Novidades em tecnologia');
  if (resultsTecnologia.length > 0) {
    for (const result of resultsTecnologia) {
      const post = result.item;
      console.log(`Postagem: ${post.metadata.text} | ${post.norm}`);
    }
  } else {
    console.log('Nenhuma postagem encontrada para "Novidades em tecnologia".');
  }
  
  const paulo = await vectraManager.query('Paulo');
  if (paulo.length > 0) {
    for (const result of paulo) {
      const post = result.item;
      console.log(`Postagem: ${post.metadata.text} | ${post.norm}`);
    }
  } else {
    console.log('Nenhuma postagem encontrada para "Paulo".');
  }
})();
