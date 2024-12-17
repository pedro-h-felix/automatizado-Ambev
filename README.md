# Projeto de Testes Automatizados com Cypress

Este repositório contém testes E2E automatizados para o frontend e a API da aplicação [Serverest](https://serverest.dev/). Foram criados 3 cenários de teste para o frontend e 3 cenários para a API usando o framework **Cypress** com a linguagem **JavaScript**.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes automatizados.
- **JavaScript**: Linguagem de programação para os testes.
- **GitHub Actions**: Para CI/CD dos testes automatizados.

## Estrutura dos Testes

### Frontend

Os testes para o frontend utilizam a aplicação disponível em [https://front.serverest.dev/](https://front.serverest.dev/). Os cenários implementados são:

1. **Login**: Verifica o fluxo de login com credenciais válidas e inválidas.
2. **Produtos**: Verifica a exibição de produtos e detalhes individuais.
3. **Carrinho**: Valida a adição e remoção de produtos no carrinho de compras.

### API

Os testes da API utilizam os endpoints disponíveis em [Swagger API](https://serverest.dev/). Os cenários implementados são:

1. **Usuários**: Testa a criação, atualização e exclusão de usuários.
2. **Produtos**: Verifica o CRUD de produtos.
3. **Pedidos**: Valida a criação e consulta de pedidos.

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/servidor-tests-automatizados.git
   cd servidor-tests-automatizados
