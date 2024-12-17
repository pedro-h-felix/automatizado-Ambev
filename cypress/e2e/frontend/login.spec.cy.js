describe('Cadastro de usuário - informações erradas - Frontend', () => {
    it('Deve retornar mensagem de erro - 401', () => {
      // Visitar o Site
      cy.visit('https://front.serverest.dev/');
      
      // Preencher o Login errado
      cy.get('input[name="email"]').type('pedro@teste.com');
      cy.get('input[name="password"]').type('senha123');
      cy.get('button[type="submit"]').click();
      
      // Retorno e confirmação do alerta de ERROR
      cy.get('.alert > :nth-child(2)')
      
    });
  });
  
describe('Cadastro de usuário - Frontend', () =>{
  it('Deve retornar sucesso - 200', () => {
    // Visitar o Site
    cy.visit('https://front.serverest.dev/');

    // Preencher o Login com sucesso
    cy.get('input[name="email"]').type('pedro@testeambev.com');
    cy.wait(500);
    cy.get('input[name="password"]').type('123456789');
    cy.wait(500);
    cy.get('button[type="submit"]').click();

    //verificação de sucesso
    cy.contains('Bem Vindo').should('be.visible');
  });


});