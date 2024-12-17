describe('API Carrinhos Test', () => {
    it('Deve listar carrinhos de um usuário com sucesso', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/carrinhos', // URL da API
        qs: {
          idUsuario: '0uxuPY0cbmQhpEz1', // ID do usuário (ajuste conforme necessário)
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Exibe o corpo da resposta para análise
        cy.log('Resposta:', JSON.stringify(response.body, null, 2));
  
        // Verifique se o status code é 200
        expect(response.status).to.eq(200);
  
        // Verifique se a resposta contém a quantidade esperada de carrinhos
        expect(response.body.quantidade).to.exist;
        expect(response.body.carrinhos).to.be.an('array');
        expect(response.body.carrinhos.length).to.be.greaterThan(0); // Verifica se há pelo menos um carrinho
  
        // Verifique o primeiro carrinho retornado
        const carrinho = response.body.carrinhos[0];
        cy.log('Carrinho:', JSON.stringify(carrinho, null, 2));
        cy.wait(1000);

        /*  *** Informações variando de acordo com o SWAGGER, abaixo realiza verificações e validações do produto que pode ser visualizado
                pelo log acima ***
            
        // Verifique os valores do carrinho
        expect(carrinho.precoTotal).to.eq(6180); 
        expect(carrinho.quantidadeTotal).to.eq(2); 
        expect(carrinho.idUsuario).to.eq('0uxuPY0cbmQhpEz1'); 
        expect(carrinho.produtos).to.be.an('array'); 
        expect(carrinho.produtos.length).to.be.greaterThan(0); 

        // Verifique os produtos dentro do carrinho
        const produto1 = carrinho.produtos[0][0];
        expect(produto1.idProduto).to.eq('BeeJh5lz3k6kSIzA');
        expect(produto1.quantidade).to.eq(1); 
        expect(produto1.precoUnitario).to.eq(470); 

        const produto2 = carrinho.produtos[0][1];
        expect(produto2.idProduto).to.eq('K6leHdftCeOJj8BJ'); 
        expect(produto2.quantidade).to.eq(2); 
        expect(produto2.precoUnitario).to.eq(5240); 
        */
});
        
    });
  
    it('Deve retornar lista vazia com filtros incorretos', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/carrinhos', // URL da API
        qs: {
          idUsuario: 'usuarioInexistente', // ID de usuário que não existe
        },
        headers: {
          'Content-Type': 'application/json',
        },
        failOnStatusCode: false, // Não falhar automaticamente em caso de erro
      }).then((response) => {
        // Exibe o corpo da resposta para análise
        cy.log('Resposta com filtros incorretos:', JSON.stringify(response.body, null, 2));
  
        // Verifique se o status code é 200
        expect(response.status).to.eq(200);
  
        // Verifique se a lista de carrinhos está vazia
        expect(response.body.quantidade).to.eq(0); // Espera-se que a quantidade seja 0 para filtros incorretos
        expect(response.body.carrinhos).to.be.an('array').that.is.empty; // Verifica se o array de carrinhos está vazio
      });
    });
  });
  