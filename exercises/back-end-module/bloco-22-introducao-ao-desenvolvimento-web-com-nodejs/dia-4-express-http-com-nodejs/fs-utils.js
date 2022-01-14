const fs = require('fs/promises');

const getSimp = () => fs.readFile('./simpsons.json', 'utf-8')
  .then(fileContent => JSON.parse(fileContent));

const setSimp = (newSimp) => fs.writeFile('./simpsons.json', JSON.stringify(newSimp));

module.exports = {
  getSimp,
  setSimp
};
