const getUserName = require("../js/exercise2");

describe("Teste exercício 2", () => {
  it("teste usuário encontrado", () =>
    getUserName(1).then((r) => expect(r).toBe('Mark')));

  it("test usuário não encontrado", () =>
    getUserName(4).catch((e) => expect(e.message).toMatch('User with 4 not found.')));
});
