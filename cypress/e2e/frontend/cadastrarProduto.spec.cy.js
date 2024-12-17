describe('Cadastro de usuário - Frontend', () =>{
    it('Fazer login e acessar a lista de produtos', () => {
        // Visitar o site
        cy.visit('https://front.serverest.dev/');
    
        // Preencher o login
        cy.get('input[name="email"]').type('pedro@testeambev.com');
        cy.wait(500);
        cy.get('input[name="password"]').type('123456789');
        cy.wait(500);
        cy.get('button[type="submit"]').click();
        cy.wait(1000);
        cy.get('[data-testid="cadastrar-produtos"]').click();

        // Cadastrar um produto
        cy.get('[data-testid="nome"]').type('Cerveja');
        cy.get('[data-testid="preco"]').type('3,50');
        cy.get('[data-testid="descricao"]').type('É clara, brilhante, transparente e internacionalmente conhecida como uma cerveja de excelente qualidade. É mais leve, com paladar clássico da baixa fermentação e tem sabor encorpado, aroma neutro, amargor menos acentuado e médio teor alcoólico. ')
        cy.get('[data-testid="quantity"]').type('9999');
        cy.get('[data-testid="cadastarProdutos"]').click();

    });
  
  
  });