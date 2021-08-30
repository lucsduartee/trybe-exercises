// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(nome) {
  let tamanho = 0;
  let maiorNome;
  for (let index in nome) {
    if (nome[index].length > tamanho) {
      tamanho = nome[index].length;
      maiorNome = nome[index];
    };
  };
  return maiorNome;
};

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));