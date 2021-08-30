// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 10;
let str = "*";

if (n > 1) {
  for (let i = 1; i <= n; i+=1) {
    console.log(str.repeat(i));
  }
}