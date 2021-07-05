// Acesse o elemento elementoOndeVoceEsta .
var elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementoOndeVoceEsta.parentNode.style.backgroundColor = "#CCC";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
elementoOndeVoceEsta.firstElementChild.innerText = "Texto dentro do primeiroFilhoDoFilho";

// Acesse o primeiroFilho a partir de pai.
var pai = document.getElementById('pai');
console.log(pai.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
var terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

// Agora acesse o terceiroFilho a partir de pai.
console.log(pai.lastElementChild.previousElementSibling);

// Crie um irmão para elementoOndeVoceEsta.
var paiDeEOVE = elementoOndeVoceEsta.parentElement;
var broDeEOVE = document.createElement('div');
paiDeEOVE.appendChild(broDeEOVE);
