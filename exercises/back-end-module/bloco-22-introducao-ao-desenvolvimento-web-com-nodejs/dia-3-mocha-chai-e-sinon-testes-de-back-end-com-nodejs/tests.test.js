const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const { numNaturalFn } = require('./numbers');
const writeFileFn = require('./writeFileFn');

describe('Executa a função numNaturalFn', () => {
  describe('quando o número for maior que 0', () => {
    it('é positivo', () => {
      const answer = numNaturalFn(10);

      expect(answer).to.be.equals('positivo');
    });
  });
  describe('quando o número for menor que 0', () => {
    it('é negativo', () => {
      const answer = numNaturalFn(-10);

      expect(answer).to.be.equals('negativo');
    });
  });
  describe('quando o número for igual a 0', () => {
    it('é neutro', () => {
      const answer = numNaturalFn(0);

      expect(answer).to.be.equals('neutro');
    });
  });
  describe('quando o parãmetro passado não é um número', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const answer = numNaturalFn('meudeus');

        expect(answer).to.be.a('string');
      });

      it('é igual a "o parâmetro deve ser um número"', () => {
        const answer = numNaturalFn('meudeus');

        expect(answer).to.be.equals('o parâmetro deve ser um número');
      });
    });
  });
});

describe('Executa a função writeFileFn', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  
  describe('a resposta', () => {
    it('é uma string', () => {
      const ans = writeFileFn('arq.txt', 'content');

      expect(ans).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const ans = writeFileFn('arq.txt', 'content');

      expect(ans).to.be.equals('ok');
    })
  });
});
