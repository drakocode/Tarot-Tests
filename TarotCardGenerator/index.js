// Array com os naipes das cartas
const naipes = ['Copas', 'Ouros', 'Paus', 'Espadas'];

// Array com os valores das cartas
const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Rainha', 'Rei'];

// Função que retorna uma carta aleatória
function gerarCartaAleatoria() {
  // Seleciona um naipe aleatório
  const naipe = naipes[Math.floor(Math.random() * naipes.length)];
  // Seleciona um valor aleatório
  const valor = valores[Math.floor(Math.random() * valores.length)];
  // Retorna a carta como uma string concatenando o valor e o naipe
  return valor + ' de ' + naipe;
}

// Exemplo de uso: gera 5 cartas aleatórias e exibe no console
for (let i = 1; i <= 5; i++) {
  console.log('Carta ' + i + ': ' + gerarCartaAleatoria());
}
