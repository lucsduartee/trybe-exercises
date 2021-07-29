// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (num, action) => {
  let numRandom = Math.ceil(Math.random() * 5);
  return action(num, numRandom);
  
}

const verifyNum = (num1, num2) => {
  num1 === num2 
    ? console.log('Parabéns você ganhou')
    : console.log('Tente novamente');
}

sorteio(3, verifyNum);

