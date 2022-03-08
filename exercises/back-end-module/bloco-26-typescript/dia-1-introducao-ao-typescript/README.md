## Checklist para a criação de um pacote em TS
1. `npm init -y`
2. `npm install -D @tsconfig/node14 @types/node typescript`
3. `touch tsconfig.json` >> {
  "extends": "@tsconfig/node14/tsconfig.json", // estendemos a configuração base para o Node 14
  "compilerOptions": {
    "outDir": "./dist", // pasta onde nossos arquivos compilados serão salvos
  },
}