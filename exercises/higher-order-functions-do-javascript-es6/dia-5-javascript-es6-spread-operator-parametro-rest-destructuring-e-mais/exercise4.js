// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// Usando o .filter() pois preciso de um array como retorno.
// Passei como argumento, por meio de destructuring, a nacionalidade e 
// o local de nascimento, desta forma não preciso ficar chamando
// pessoa.nacionality e pessoa.bornIn. Quando eu desestruturo diretamente,
// consigo o acesso às chaves do objeto da iteração.

const filterPeople = (p30p13) => {
  return p30p13.filter(({nationality, bornIn}) => 
    nationality === 'Australian'
    && bornIn > 1900 && bornIn <= 2000
  );
};

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });