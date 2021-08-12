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
    ? resolve(sumArr)
    : reject();
});

const func = () => {
  promise
    .then(sumArr => [2, 3, 5, 10].map(item => sumArr/item))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};
func();