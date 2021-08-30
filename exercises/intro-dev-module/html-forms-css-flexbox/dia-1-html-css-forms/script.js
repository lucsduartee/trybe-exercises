// const header = document.createElement('header');
// const script = document.getElementsByTagName('script')[0];
// document.body.insertBefore(header, script);

// const title = document.createElement('h1');
// title.innerHTML = 'Meu primeiro Forms com HTML';
// header.appendChild(title);

// const mainContent = document.createElement('main');
// document.body.insertBefore(mainContent, script);

// const form = document.createElement('form');
// const fieldset = document.createElement('fieldset');
// const legend = document.createElement('legend');
// legend.innerHTML = 'Dados Pessoais';
// mainContent.appendChild(form);
// form.appendChild(fieldset);
// form.action = '';
// form.method = 'GET';
// fieldset.appendChild(legend);

// const inputName = document.createElement('input');
// inputName.type = 'text';
// inputName.id = 'nome';
// inputName.maxLength = '40';
// inputName.required = true;
// const labelNome = document.createElement('label');
// labelNome.htmlFor = 'nome';
// labelNome.innerHTML = 'Nome';
// fieldset.appendChild(labelNome);
// fieldset.appendChild(inputName);

// const inputEmail = document.createElement('input');
// inputEmail.type = 'email';
// inputEmail.id = 'email';
// inputEmail.maxLength = '50';
// inputEmail.required = true;
// const labelEmail = document.createElement('label');
// labelEmail.htmlFor = 'email';
// labelEmail.innerHTML = 'Email';
// fieldset.appendChild(labelEmail);
// fieldset.appendChild(inputEmail);

// const inputTelefone = document.createElement('input');
// inputTelefone.type = 'tel';
// inputTelefone.id = 'telefone';
// inputTelefone.maxLength = '11';
// inputTelefone.required = true;
// const labelTelefone = document.createElement('label');
// labelTelefone.htmlFor = 'telefone';
// labelTelefone.innerHTML = 'Telefone';
// fieldset.appendChild(labelTelefone);
// fieldset.appendChild(inputTelefone);

// const inputEndereco = document.createElement('input');
// inputEndereco.type = 'text';
// inputEndereco.id = 'endereco';
// inputEndereco.maxLength = '200';
// inputEndereco.required = true;
// const labelEndereco = document.createElement('label');
// labelEndereco.htmlFor = 'endereco';
// labelEndereco.innerHTML = 'Endereco';
// fieldset.appendChild(labelEndereco);
// fieldset.appendChild(inputEndereco);

// const inputCidade = document.createElement('input');
// inputCidade.type = 'text';
// inputCidade.id = 'cidade';
// inputCidade.maxLength = '28';
// inputCidade.required = true;
// const labelCidade = document.createElement('label');
// labelCidade.htmlFor = 'cidade';
// labelCidade.innerHTML = 'Cidade';
// fieldset.appendChild(labelCidade);
// fieldset.appendChild(inputCidade);

const selectEstado = document.getElementById('estado');
const objEstados = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}
for (let sigla in objEstados) {
  const option = document.createElement('option');
  option.value = sigla;
  option.innerHTML = objEstados[sigla];
  selectEstado.appendChild(option);
}
// const labelEstado = document.createElement('label');
// labelEstado.htmlFor = 'estado';
// labelEstado.innerHTML = 'Estado';
// fieldset.appendChild(labelEstado);
// fieldset.appendChild(selectEstado);

// const inputTipoCasa = document.createElement('input');
// inputTipoCasa.value = 'casa';
// inputTipoCasa.name = 'tipo-moradia';
// inputTipoCasa.id = 'casa';
// inputTipoCasa.innerHTML = 'Casa';
// inputTipoCasa.type = 'radio';
// const inputTipoApartamento = document.createElement('input');
// inputTipoApartamento.value = 'apartamento';
// inputTipoApartamento.name = 'tipo-moradia';
// inputTipoApartamento.id = 'apartamento';
// inputTipoApartamento.innerText = 'Apartamento';
// inputTipoApartamento.type = 'radio';
// const labelCasa = document.createElement('label');
// labelCasa.innerHTML = 'Tipo Moradia';
// fieldset.appendChild(labelCasa);
// fieldset.appendChild(inputTipoCasa);
// fieldset.appendChild(inputTipoApartamento);

const buttonSubmit = document.getElementById('submit');
buttonSubmit.addEventListener('click', function(e) {
  e.preventDefault();
})