//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


//Essa função action recebe como parâmetro um acumlador e um nome, que é uma 
//string contido no array names. Usando os métodos de string, toUpperCase()
//para colocar o n4m3 em caixa alta, e depois aplico o método matchAll() pra
//encontrar todas as ocorrẽncias da letra "A" na string.
//Depos unsando o spreadOperator eu desestruturo a string em um array contendo as letras
//"A". Com isso posso saber o comprimento do array e adicionar esse valor no acc.
const action = (acc, n4m3) => {
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
  let arrOfLetter = [...n4m3.toUpperCase().matchAll('A')];
  return acc += arrOfLetter.length;
}

function containsA() {
  return names.reduce(action, 0);
}

assert.deepStrictEqual(containsA(), 20);

/* Lucas Duarte*/