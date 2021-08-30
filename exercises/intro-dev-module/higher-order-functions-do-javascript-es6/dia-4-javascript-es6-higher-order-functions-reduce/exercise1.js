// Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Callback function que recebe como parâmetro um acumulador, 
// que nesse caso é um array, e um array que será lido pelo
// reduce. Nessa função por meio do método push(), o acc
// recebe o arr desestruturado, o que é possível graças ao
// Spread Operator. No final a função retorna o acc.
const toArray = (acc, arr) => {
  acc.push(...arr);
  return acc;
}

function flatten() {
  return arrays.reduce(toArray, [])
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);