// Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const toArray = (acc, arr) => {
  acc.push(...arr);
  return acc;
}

function flatten() {
  return arrays.reduce(toArray, [])
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);