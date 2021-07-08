let btnCorFundo = document.getElementById('btn-cor-fundo');
let btnCorTexto = document.getElementById('btn-cor-texto');
let btnFontSize = document.getElementById('btn-font-size');
let btnLineHeight = document.getElementById('btn-line-height');
let btnFontFamily = document.getElementById('btn-font-family');

btnCorFundo.addEventListener('click', corDeFundo);
btnCorTexto.addEventListener('click', corDoTexto);
btnFontSize.addEventListener('click', fontSize);
btnLineHeight.addEventListener('click', lineHeight);
btnFontFamily.addEventListener('click', fontFamily);

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

var count1 = 0;
function lineHeight() {
  let lineHeight = ['35px', '45px', '55px', '65px', '75px'];
  let pElements = document.getElementsByTagName('p');
  localStorage.setItem('lHeight', lineHeight[count1])
  for(let element of pElements) {
    element.style.lineHeight = lineHeight[count1];
  }
  (count1 >= lineHeight.length -1) ? count1 = 0: count1+=1;
}

var count2 = 0;
function fontFamily() {
  let fontsFamily = [
    "'Roboto', sans-serif",
    "'Dancing Script', cursive",
    "'Yomogi', cursive",
    "'Zen Loop', cursive",
    "'Zen Tokyo Zoo', cursive"
  ];
  document.body.style.fontFamily = fontsFamily[count2];
  localStorage.setItem('fFamily', document.body.style.fontFamily);
  (count2 >= fontsFamily.length -1) ? count2 = 0 : count2 += 1;
}

function carregaEstadoInicial () {
  let fontSize = localStorage.getItem('fSizes');
  let lineHeight = localStorage.getItem('lHeight');
  let titleText = document.querySelectorAll('.title');
  let pText = document.querySelectorAll('.texts');
  for(let element of titleText) {
    element.style.fontSize = fontSize;
  }
  for(let element of pText) {
    element.style.fontSize = fontSize;
    element.style.lineHeight = lineHeight;
  }
}

window.onload = function () {
  document.body.style.backgroundColor = localStorage.getItem('bgcolor');
  document.body.style.color = localStorage.getItem('txtcolor');
  document.body.style.fontFamily = localStorage.getItem('fFamily');
  carregaEstadoInicial();

}