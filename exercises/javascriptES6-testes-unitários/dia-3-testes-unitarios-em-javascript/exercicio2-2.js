//Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
const wordLengths = (arr, func) => arr.map(func);
const countLetters = string => string.length; 

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words, countLetters);
assert.deepStrictEqual(output, expected);