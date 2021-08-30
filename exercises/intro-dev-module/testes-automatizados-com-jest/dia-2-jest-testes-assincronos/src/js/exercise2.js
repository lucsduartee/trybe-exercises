const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

module.exports =  getUserName;

// describe("Teste exercício 2", () => {
//   it("teste usuário encontrado", () =>
//     getUserName(1).then((r) => expect(r).toBe('Mark'))
//   );

//   it("test usuário não encontrado", () =>
//     getUserName(4).catch((e) => expect(e).toMatch('User with 4 not found.'))
//   );
// });

