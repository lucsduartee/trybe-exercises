//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000.00;
let aliquotaInss;

if (salarioBruto < 1556.94) {
  aliquotaInss = salarioBruto*0.08;
} else if (salarioBruto >= 1556.94 && salarioBruto < 2594.92) {
  aliquotaInss = salarioBruto*0.09;
} else if (salarioBruto >= 2594.92 && salarioBruto < 5189.82) {
  aliquotaInss = salarioBruto*0.11;
} else {
  aliquotaInss = 570.88;
}

let salarioBase = salarioBruto - aliquotaInss;
let impostoRenda;

if (salarioBase < 1903.89) {
  impostoRenda = 0;
} else if (salarioBase >= 1903.89 && salarioBase < 2826.65) {
  impostoRenda = salarioBase*0.075 - 142.80;
} else if (salarioBase >= 2826.65 && salarioBase < 3751.05) {
  impostoRenda = salarioBase*0.15 - 354.80;
} else if (salarioBase >= 3751.05 && salarioBase < 4664.68) {
  impostoRenda = salarioBase*0.225 - 636.13;
} else {
  impostoRenda = salarioBase*0.275 - 869.36;
}

console.log("O salário líquido é:", salarioBase - impostoRenda, "reais.")
