
describe('Cadastro de usuário - Frontend', () =>{
    it('Fazer login e acessar a lista de produtos', () => {
        // Visitar o site
        cy.visit('https://front.serverest.dev/');
    
        // Preencher o Login
        cy.get('input[name="email"]').type('pedro@testeambev.com');
        cy.wait(500);
        cy.get('input[name="password"]').type('123456789');
        cy.wait(500);
        cy.get('button[type="submit"]').click();
        cy.wait(1000);

        // Acessar lista de produtos
        cy.get('[data-testid="listar-produtos"]').click();

    });
  
  
  });