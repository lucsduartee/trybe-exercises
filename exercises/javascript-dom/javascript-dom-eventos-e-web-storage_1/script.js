/*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
        Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

        Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

        Crie uma função que mude a cor do quadrado vermelho para branco.

        Crie uma função que corrija o texto da tag <h1>.

        Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

        Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changeText() {
  var texto = document.getElementsByTagName("p")[0];
  texto.innerText = "Me vejo estabilizado financeiramente e muito feliz, morando sozinho com dois gatos um chamado Euclides e outro Minkowski.";   
};

function changeColor() {
  var bg = document.getElementsByClassName("main-content");
  bg[0].style.backgroundColor = "rgb(76,164,109)";
};

function changeColor2() {
  var bg = document.getElementsByClassName("center-content");
  bg[0].style.backgroundColor = "#FFF";
};

function rewritingText() {
  var txt = document.getElementsByClassName("title");
  txt[0].innerText = "Exercício 5.1 - JavaScript"; 
};

function toUpper() {
  var toChange = document.querySelectorAll("p");
  for (let i = 0; i < toChange.length; i += 1) {
    toChange[i].innerText = toChange[i].innerText.toUpperCase();
  };
};

function showContent() {
  let toShow = document.querySelectorAll("p");
  for (let i = 0; i < toShow.length; i += 1) {
    console.log(toShow[i].innerText)
  }
}

changeText();
changeColor();
changeColor2();
rewritingText();
toUpper();
showContent();