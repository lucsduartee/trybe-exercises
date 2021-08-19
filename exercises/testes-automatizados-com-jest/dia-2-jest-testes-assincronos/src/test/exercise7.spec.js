const findAnimalsByAge = require('../js/exercise7');

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    it('Verificação 1', () => {
      const animal = [{ name: 'Dorminhoco', age: 1, type: 'Dog' }];
      return expect(findAnimalsByAge(1)).resolves.toEqual(animal);
    });
  });

  describe('Quanto retorna um erro', () => {
    it('Verificação de erro', () => {
      /* é um erro, precisa ter assertions() */
      expect.assertions(1);
      return expect(findAnimalsByAge(10))
        .rejects.toEqual(new Error('Nenhum animal com essa idade'));
    })
  })
});