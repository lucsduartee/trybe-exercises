// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 1;
let b = 3; 
let c = 2;

if (a > b && a > c) {
  console.log(`a é maior que b e c`);
} else if (b > a && b > c) {
  console.log(`b é maior que a e c`);
} else if (c > a && c > b) {
  console.log(`c é maior que a e b`);
}