const pElement = document.getElementById('contador');
const botao = document.getElementById('btn')
let counter = 0;
botao.addEventListener('click', () => {
  counter += 1;
  pElement.innerHTML = counter;
})