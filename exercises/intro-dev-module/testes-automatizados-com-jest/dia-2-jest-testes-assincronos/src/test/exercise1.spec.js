const uppercase = require('../js/exercise1');

describe('Teste exercício 1', () => {
  it('test de callback', (done) => {
    uppercase('cachorro', (result) => {
      try {
        expect(result).toBe('CACHORRO');
        done();
      } catch(erro) {
        done(error);
      }
    });
  });
});