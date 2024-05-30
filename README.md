# API Node Basic-Tasks-API

## Descrição

Este é um projeto de uma API Node desenvolvida para gerenciar tarefas.

## Tecnologias Utilizadas

- **NestJS**: Um framework para construção de aplicativos eficientes e escaláveis em Node.js.
- **bcrypt**: Uma biblioteca para hash de senhas.
- **dotenv**: Um módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **jsonwebtoken**: Uma implementação de JSON Web Tokens (JWT).
- **pg**: Um cliente PostgreSQL para Node.js.
- **TypeORM**: Uma ferramenta de ORM (Object-Relational Mapping) para TypeScript e JavaScript.
- **Swagger UI**: Interface para documentar e testar APIs.



## Como Executar

1. **Instalação do Node.js**: Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. **Clone do Repositório**: Clone este repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/isabeldiana/Basic-Tasks-API
    ```

3. **Instalação de Dependências**: Instale as dependências do projeto:

    ```bash
    cd Basic-Tasks-API
    npm install
    ```

4. **Configuração do Ambiente**: Crie um arquivo `.env` na raiz do projeto e adicione as configurações do ambiente conforme necessário.

5. **Execução do Servidor**: Execute o servidor de desenvolvimento:

    ```bash
    npm run start:dev
    ```

6. **Acesso à API**: Acesse a API em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias neste projeto. Basta abrir uma issue ou enviar um pull request.

## Configuração de Scripts

```json
{
  "name": "api-task",
  "version": "0.0.1",
  "description": "API Node para gerenciamento de tarefas",
  "author": "Seu Nome",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "typeorm": "ts-node ./node_modules/typeorm/cli",
    "migration:create": "npm run typeorm -- migration:create",
    "migration:run": "npm run typeorm -- migration:run -d ./src/db/migrations-config.ts",
    "migration:revert": "npm run typeorm migration:revert -- -db ./src/db/migrations-config.ts"
  },
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/config": "^3.2.2",
    "@nestjs/core": "^10.0.0",
    "@nestjs/jwt": "^10.2.0",
    "@nestjs/platform-express": "^10.0.0",
    "@nestjs/typeorm": "^10.0.2",
    "bcrypt": "^5.1.1",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.1",
    "dotenv": "^16.4.5",
    "pg": "^8.11.5",
    "reflect-metadata": "^0.2.0",
    "rxjs": "^7.8.1",
    "typeorm": "^0.3.20",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "@nestjs/schematics": "^10.0.0",
    "@nestjs/testing": "^10.0.0",
    "@types/bcrypt": "^5.0.2",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.2",
    "@types/node": "^20.3.1",
    "@types/supertest": "^6.0.0",
    "@types/uuid": "^9.0.8",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.42.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "jest": "^29.5.0",
    "prettier": "^3.0.0",
    "source-map-support": "^0.5.21",
    "supertest": "^6.3.3",
    "ts-jest": "^29.1.0",
    "ts-loader": "^9.4.3",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.1.3"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [****
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}
