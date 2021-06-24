// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custo = 1000;
let valorVenda = 1250;
let custoTotal = custo + custo*0.2;
let lucro = valorVenda - custoTotal;

console.log(`O lucro será de ${lucro} reais.`)