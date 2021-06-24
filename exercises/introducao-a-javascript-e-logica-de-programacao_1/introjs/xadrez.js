// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

var pecaXadrex = "peão".toUpperCase();

switch (pecaXadrex) {
  case "PEÃO":
    console.log(`${pecaXadrex} -> Uma casa para frente. Se for o primeiro movimento da peça, duas casas pra frente. Uma casa na diagonal para matar peça inimiga`);
    break;
  
  case "TORRE":
    console.log(`${pecaXadrex} -> Horizontal e Vertical livremente.`);
    break;

  case "CAVALO":
  console.log(`${pecaXadrex} -> Movimentos em "L".`);
  break;

  case "BISPO":
    console.log(`${pecaXadrex} -> Diagonais livremente.`);
    break;

  case "Rainha":
  console.log(`${pecaXadrex} -> Horizontal, Vertical e Diagonal livremente.`)
  break;

  case "REI":
    console.log(`${pecaXadrex} -> Horizontal, Vertical e Diagonal apenas uma casa.`);
    break;

  default:
    console.log(`ERRO: peça inválida`)
}