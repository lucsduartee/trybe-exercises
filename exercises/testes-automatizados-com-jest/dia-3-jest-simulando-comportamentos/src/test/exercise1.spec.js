const exercise1 = require('../js/exercise1');

describe('Testando função que gera numeros aleatórios de 1 à 100', () => {
  it('Se função foi chamada', () => {
    exercise1.generateNumber = jest.fn();
    exercise1.generateNumber();
    expect(exercise1.generateNumber).toHaveBeenCalled();
  });

  it('Com um valor padrão', () => {
    exercise1.generateNumber = jest.fn().mockReturnValue(10);
    expect(exercise1.generateNumber()).toBe(10);
  });

  // it('')
});