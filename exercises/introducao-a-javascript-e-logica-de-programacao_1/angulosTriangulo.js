// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let theta1 = -60;
let theta2 = 40;
let theta3 = 90;

let soma = theta1 + theta2 + theta3;

if (theta1 < 0 || theta2 < 0 || theta3 < 0) {
  console.log(`ERRO: Há ângulo(s) negativo(s) no seu triângulo`);
} else if (soma == 180) {
  console.log(`true`)
} else {
  console.log(`false`);
}