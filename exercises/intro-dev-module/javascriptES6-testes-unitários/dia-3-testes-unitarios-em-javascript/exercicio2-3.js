//Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
const reducer = (acc, cur) => acc + cur;
const sumAllNumbers = arr => arr.reduce(reducer);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);