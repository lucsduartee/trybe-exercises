const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/

const addTurno = (obj, key, value) => obj[key] = value;
addTurno(lesson2, 'turno', 'manhã')
console.log(lesson2);

/*2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.*/

const listKeys = obj => console.log(Object.keys(obj))

/*3-Crie uma função para mostrar o tamanho de um objeto.*/

const lenghtObj = obj => console.log(Object.keys(obj).length)

/*4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/

const listValues = obj => console.log(Object.values(obj));
listValues(lesson3);

/*5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .*/

/*6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.*/

/*7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. */

/*8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.*/