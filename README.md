# Projeto de Testes Automatizados com Cypress

Este repositório contém testes E2E automatizados para o frontend e a API da aplicação [Serverest](https://serverest.dev/). Foram criados 3 cenários de teste para o frontend e 3 cenários para a API usando o framework **Cypress** com a linguagem **JavaScript**.

**Devido a volatilidade do site, alguns cenários apresentam erro pois pessoas simultaneamente utilizando o site para realizar testes, sendo assim pode ser que o usuário seja deletado e ocorra erros durante execução via Pipeline**

## Tecnologias Utilizadas

- **Cypress**: Framework de testes automatizados.
- **JavaScript**: Linguagem de programação para os testes.
- **GitHub Actions**: Para CI/CD dos testes automatizados.

## Estrutura dos Testes

### Frontend

Os testes para o frontend utilizam a aplicação disponível em [https://front.serverest.dev/](https://front.serverest.dev/). Os cenários implementados são:

1. **Login**: Verifica o fluxo de login com credenciais válidas e inválidas.
2. **Produtos**: Verifica a exibição de produtos e detalhes individuais.
3. **Cadastrar Produto**: Cadastra o produto a partir de informações e detalhes individuais.

### API

Os testes da API utilizam os endpoints disponíveis em [Swagger API](https://serverest.dev/). Os cenários implementados são:

1. **Login**: Testa a conexão sendo válida ou inválida e verificando rota de Login.
2. **Produtos**: Verifica os valores do primeiro produto retornado, podendo variar conforme a atualização da API.
3. **Carrinho**: Valida o(s) produtos contidos no carrinho, podendo variar conforme atualização do API.

## Pré-requisitos

- **Node.js** (versão 22 ou superior)
- **Cypress** (versão utilizada 13.16.1)
- **npm** (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/pedro-h-felix/automatizado-Ambev.git
   cd automatizado-Ambev
