const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrAnimals = Animals.filter(animal => animal.age === age);
      if (arrAnimals.length !== 0) return resolve(arrAnimals);
      return reject(new Error('Nenhum animal com essa idade'));
    }, 100);
  })
);

module.exports = findAnimalsByAge;