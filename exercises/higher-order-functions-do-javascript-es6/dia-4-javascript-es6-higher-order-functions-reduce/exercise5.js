//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const action = (acc, n4m3) => {
  let arrOfLetter = [...n4m3.toUpperCase().matchAll('A')];
  return acc += arrOfLetter.length;
}

function containsA() {
  return names.reduce(action, 0);
}

assert.deepStrictEqual(containsA(), 20);

