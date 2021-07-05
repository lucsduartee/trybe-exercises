// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag div com a classe main-content como filho da tag body ;
// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

let body = document.getElementsByTagName('body')[0];
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

let divMainContent = document.createElement('div');
divMainContent.className = 'main-content';
body.appendChild(divMainContent);

let divCenterContent = document.createElement('div');
divCenterContent.className = 'center-content';
divMainContent.appendChild(divCenterContent);

let pSonOfDCC = document.createElement('p');
pSonOfDCC.innerText = 'Exercícios sobre manipulção da DOM, criação de elementos, seletores...';
divCenterContent.appendChild(pSonOfDCC);

let divLeftContent = document.createElement('div');
divLeftContent.className = 'left-content';
divMainContent.appendChild(divLeftContent);