const getUserName = require('../js/exercise3');

describe('Teste exercicio 3', () => {
  it('teste para usuário encontrado', async () => {
    const response = await getUserName(1);
    expect(response).toBe('Mark');
  });

  it('teste para usuário não encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(4);
    } catch (error) {
      expect(error).toEqual(new Error('User with 4 not found.'));
    }
  });
});