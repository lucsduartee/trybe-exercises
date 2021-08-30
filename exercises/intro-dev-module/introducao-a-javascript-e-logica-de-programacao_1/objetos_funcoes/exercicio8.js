// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(arr) {
  let menor = 0;
  for (let key in arr) {
    if (arr[menor] > arr[key] ) {
      menor = key;
    }; 
  };
  return menor;
};

console.log(menorValor([3, 1, 7, 5]));