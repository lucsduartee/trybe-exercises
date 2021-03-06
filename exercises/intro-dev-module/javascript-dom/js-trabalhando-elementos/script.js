// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag div com a classe main-content como filho da tag body ;
// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

let body = document.getElementsByTagName('body')[0]; //document.body

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

let divRightContent = document.createElement('div');
divRightContent.className = 'right-content';
divMainContent.appendChild(divRightContent);

let imgSonOfDLC = document.createElement('img');
imgSonOfDLC.setAttribute("src", "https://picsum.photos/200");
imgSonOfDLC.className = 'small-image';
divLeftContent.appendChild(imgSonOfDLC);

let listSonOfDRC = document.createElement('ul');
for (let i = 0; i < 10; i += 1) {
  let itemListSonOfDRC = document.createElement('li');
  itemListSonOfDRC.innerText = `${i + 1}`;
  listSonOfDRC.appendChild(itemListSonOfDRC);
}
divRightContent.appendChild(listSonOfDRC);

for (let i = 0; i < 3; i += 1) {
  let h3SonOfDMC = document.createElement('h3');
  h3SonOfDMC.innerText = `${i+1}° h3 criado`;
  divMainContent.appendChild(h3SonOfDMC);
}

// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

h1.className = 'title';

let allH3 = document.getElementsByTagName('h3');
for (let i = 0; i < allH3.length; i += 1) {
  allH3[i].className = 'description';
}

divMainContent.removeChild(divLeftContent);

divRightContent.style.marginRight = 'auto';

divCenterContent.style.backgroundColor = '#008000';

for (let i = 0; i < 2; i += 1) {
  listSonOfDRC.removeChild(listSonOfDRC.lastElementChild);
}