// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(arr) {
  let maior = 0;
  for (let key in arr) {
    if (arr[maior] < arr[key]) {
      maior = key;
    };
  };
  return maior;
};

console.log(maiorValor([1, 3, 7, 5]));