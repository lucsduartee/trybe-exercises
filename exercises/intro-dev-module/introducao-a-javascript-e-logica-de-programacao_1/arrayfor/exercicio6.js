// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdImpares = 0;


for (let number of numbers) {
  if (number % 2 != 0) {
    qtdImpares+=1
  };
};

if (qtdImpares != 0) {
  console.log(`Existem ${qtdImpares} valores impares no array`);
} else {
  console.log(`Nenhum valor ímpar encontrado`);
};