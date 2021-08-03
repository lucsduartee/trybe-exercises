// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const assert = require('assert');

const greet = (name, gr33t = 'Hi') => `${gr33t} ${name}`; 

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');