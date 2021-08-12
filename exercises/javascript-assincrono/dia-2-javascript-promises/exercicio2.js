const createArray = () => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.floor(Math.random() * 50));
  }
  return arr.map(num => Math.pow(num, 2));
}

const promise = new Promise((resolve, reject) => {
  const sumArr = createArray().reduce((acc, num) => {
    return acc + num;
  });
  sumArr < 8000 
    ? resolve('Promisse resolvida')
    : reject('Promisse rejeitada');
});

const func = () => {
  promise
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
}
func();