// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = string => {
  let arrOfWords = string.split(' ');
  let maior = ' ';
  for(let word of arrOfWords) {
    if (word.length > maior.length) {
      maior = word;
    }
  }
  return maior;
};

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));