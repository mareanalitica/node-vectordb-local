import { VectraManager } from './src/vectraManager';

(async () => {
  const vectraManager = new VectraManager();

  // Adicione informações sobre os equipamentos
  await vectraManager.addItem(JSON.stringify({
    name: 'Máquina de Lavar',
    category: 'Eletrodomésticos',
    price: 599.99,
  }));

  await vectraManager.addItem(JSON.stringify({
    name: 'Furadeira Elétrica',
    category: 'Ferramentas',
    price: 129.99,
  }));

  // Consulta por máquina de lavar
  const resultsLavar = await vectraManager.query('Máquina de Lavar');
  if (resultsLavar.length > 0) {
    for (const result of resultsLavar) {
      const item = result.item.metadata;
      console.log(`[${result.score}] Nome: ${item.name}, Categoria: ${item.category}, Preço: $${item.price}`);
    }
  } else {
    console.log('Nenhum resultado encontrado para "Máquina de Lavar".');
  }

  // Consulta por equipamentos de ferramentas
  const resultsFerramentas = await vectraManager.query('Ferramentas');
  if (resultsFerramentas.length > 0) {
    for (const result of resultsFerramentas) {
      const item = result.item.metadata;
      console.log(`[${result.score}] Nome: ${item.name}, Categoria: ${item.category}, Preço: $${item.price}`);
    }
  } else {
    console.log('Nenhum resultado encontrado para "Ferramentas".');
  }
})();
