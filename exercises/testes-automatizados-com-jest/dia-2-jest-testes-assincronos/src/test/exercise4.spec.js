const getRepos = require('../js/exercise4');

describe('Teste exercício 4', () => {
  it('repositório contém os items', async () => {
    const items = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator']
    const response = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(response).toEqual(expect.arrayContaining(items));
  })
})