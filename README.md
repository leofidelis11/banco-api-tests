# banco-api-tests

Este projeto tem como objetivo automatizar os testes da API REST do repositório [banco-api](https://github.com/juliodelimas/banco-api), contribuindo com a qualidade e o correto funcionamento de suas funcionalidades por meio de testes automatizados escritos em JavaScript.

## :rocket: Objetivo

Validar os endpoints da API REST desenvolvida no projeto [banco-api](https://github.com/juliodelimas/banco-api), utilizando testes automatizados que cobrem os principais fluxos da aplicação.

## :wrench: Stack utilizada

- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

## :file_folder: Estrutura de diretórios

```
banco-api-tests/
├── test/                # Contém os arquivos de teste da API
│   └── login.test.js   # Exemplo de teste da rota /contas
│   └── transferencias.test.js
├── mochawesome-report/  # Gerado após a execução dos testes com relatório em HTML
├── .env                 # Arquivo com variáveis de ambiente (não incluso no repositório)
├── .gitignore
├── package.json         # Configurações do projeto e dependências
└── README.md
```

## :key: Variáveis de ambiente

Você precisa criar um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

> Substitua `http://localhost:3000` pela URL onde a API [banco-api](https://github.com/juliodelimas/banco-api) está rodando.

## :hammer: Executando os testes

Instale as dependências do projeto:

```bash
npm install
```

Execute os testes com o seguinte comando:

```bash
npm test
```

> Os testes serão executados utilizando o Mocha, e o relatório será gerado automaticamente via Mochawesome.

## :bar_chart: Acessando o relatório

Após a execução dos testes, será gerado um relatório em HTML no diretório `mochawesome-report`.

Para visualizar o relatório:

1. Acesse o diretório `mochawesome-report/`.
2. Abra o arquivo `mochawesome.html` no seu navegador.

## :link: Documentação das dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

---
