// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(palavra) {
  for (let letra in palavra) {
    if (palavra[letra] != palavra[(palavra.length - 1) - letra]) {
      return false;
    } 
  }
  return true;
}

console.log(verificaPalindrome('arara'))