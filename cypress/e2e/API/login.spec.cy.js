describe('API Login Test', () => {
    let authToken;
  
    it('Deve realizar login com sucesso e obter token de autorização', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login', 
        body: {
          email: 'fulano@qa.com',
          password: 'teste',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Verifique se o status code é 200
        expect(response.status).to.eq(200);
        cy.wait(1000);
  
        // Verifique se o corpo da resposta contém o token de autorização
        expect(response.body.authorization).to.exist;
  
        // Armazene o token para os próximos testes
        authToken = response.body.authorization;
      });
    });
  
    it('Deve retornar 401 após o token expirar', () => {
  
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login', // Substitua pela URL do endpoint protegido
        body: {
            email: 'fulano@qa.com',
            password: 'teste1',
          },
        headers: {
          Authorization: authToken, // Utiliza o token obtido anteriormente
        },
        failOnStatusCode: false, // Para evitar que o Cypress falhe automaticamente ao receber 401
      }).then((response) => {
        // Verifique se o status code é 401 (Unauthorized) após o tempo de expiração
        expect(response.status).to.eq(401);
        expect(response.body.message).to.eq('Email e/ou senha inválidos'); // Mensagem que a API retornará em caso de erro de autenticação
        cy.wait(1000);
      });
    });
  
    it('Deve retornar 405 ao fazer GET na rota de login', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/login', 
        failOnStatusCode: false, // Para evitar que o Cypress falhe automaticamente ao receber 405
      }).then((response) => {
        // Verifique se o status code é 405 (Method Not Allowed)
        expect(response.status).to.eq(405);
        expect(response.body.message).to.eq('Não é possível realizar GET em /login. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las.');
        cy.wait(1000);
      });
    });
  });
  