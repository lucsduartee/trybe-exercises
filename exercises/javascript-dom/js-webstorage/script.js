let btnCorFundo = document.getElementById('btn-cor-fundo');
let btnCorTexto = document.getElementById('btn-cor-texto');
let btnFontSize = document.getElementById('btn-font-size');
let btnLineHeight = document.getElementById('btn-line-height');
let btnFontFamily = document.getElementById('btn-font-family');

btnCorFundo.addEventListener('click', corDeFundo);
btnCorTexto.addEventListener('click', corDoTexto);
btnFontSize.addEventListener('click', fontSize);

function corDeFundo() {
  let color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  document.body.style.backgroundColor = color;
  localStorage.setItem('bgcolor', document.body.style.backgroundColor);
}

function corDoTexto() {
  let color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  document.body.style.color = color;
  localStorage.setItem('txtcolor', document.body.style.color);
}

var count = 0;
function fontSize() {
  let fontSize = ['16px', '20px', '30px', '40px', '15px'];
  let titleText = document.querySelectorAll('.title');
  let pText = document.querySelectorAll('.texts');
  localStorage.setItem('fSizes', fontSize[count])
  for(let element of titleText) {
    element.style.fontSize = fontSize[count]
  };
  for(let element of pText) {
    element.style.fontSize = fontSize[count]
  };
  (count >= fontSize.length - 1) ? count = 0 : count+=1;
} 

function carregaFontSizes () {
  let fontSize = localStorage.getItem('fSizes');
  let titleText = document.querySelectorAll('.title');
  let pText = document.querySelectorAll('.texts');
  for(let element of titleText) {
    element.style.fontSize = fontSize;
  }
  for(let element of pText) {
    element.style.fontSize = fontSize;
  }
}

window.onload = function () {
  document.body.style.backgroundColor = localStorage.getItem('bgcolor');
  document.body.style.color = localStorage.getItem('txtcolor');
  carregaFontSizes();

}