const header = document.createElement('header');
const script = document.getElementsByTagName('script')[0];
document.body.insertBefore(header, script);

const title = document.createElement('h1');
title.innerHTML = 'Meu primeiro Forms com HTML';
header.appendChild(title);

const mainContent = document.createElement('main');
document.body.insertBefore(mainContent, script);

const form = document.createElement('form');
const fieldset = document.createElement('fieldset');
const legend = document.createElement('legend');
legend.innerHTML = 'Dados para cadastro'
mainContent.appendChild(form);
form.appendChild(fieldset);
form.action = '';
form.method = 'GET';
fieldset.appendChild(legend);

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.id = 'nome';
inputName.maxLength = '40';
const labelNome = document.createElement('label');
labelNome.htmlFor = 'nome';
labelNome.innerHTML = 'Nome';
fieldset.appendChild(labelNome);
fieldset.appendChild(inputName);



