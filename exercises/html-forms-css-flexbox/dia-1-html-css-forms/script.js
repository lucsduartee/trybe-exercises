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
legend.innerHTML = 'Dados Pessoais';
mainContent.appendChild(form);
form.appendChild(fieldset);
form.action = '';
form.method = 'GET';
fieldset.appendChild(legend);

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.id = 'nome';
inputName.maxLength = '40';
inputName.required = true;
const labelNome = document.createElement('label');
labelNome.htmlFor = 'nome';
labelNome.innerHTML = 'Nome';
fieldset.appendChild(labelNome);
fieldset.appendChild(inputName);

const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.maxLength = '50';
inputEmail.required = true;
const labelEmail = document.createElement('label');
labelEmail.htmlFor = 'email';
labelEmail.innerHTML = 'Email';
fieldset.appendChild(labelEmail);
fieldset.appendChild(inputEmail);

const inputTelefone = document.createElement('input');
inputTelefone.type = 'tel';
inputTelefone.id = 'telefone';
inputTelefone.maxLength = '11';
inputTelefone.required = true;
const labelTelefone = document.createElement('label');
labelTelefone.htmlFor = 'telefone';
labelTelefone.innerHTML = 'Telefone';
fieldset.appendChild(labelTelefone);
fieldset.appendChild(inputTelefone);



