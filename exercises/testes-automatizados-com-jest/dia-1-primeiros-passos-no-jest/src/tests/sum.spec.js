const sum = require('../js/sum');

describe('sum', () => {
  test('soma 4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('soma 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('lança erro se uma string for passada como parametro', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });

  test('mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});