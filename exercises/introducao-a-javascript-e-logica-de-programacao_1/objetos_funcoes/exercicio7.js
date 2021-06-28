// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(arr) {
  let maior = 0;
  let valor = 0; 
  for (let key in arr) {
    if (arr[key] > valor) {
      maior = key;
      valor = arr[key];
    };
  };
  return maior;
};

console.log(maiorValor([1, 3, 7, 5]));