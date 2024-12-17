describe('API Produtos Test', () => {
    it('Deve listar produtos com sucesso', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos', // URL da API
        qs: {
          nome: 'Logitech', // Pode filtrar pelo nome do produto
          preco: 470, // Pode filtrar pelo preço
          quantidade: 381, // Pode filtrar pela quantidade
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Exibe o corpo da resposta para análise
        cy.log('Resposta:', JSON.stringify(response.body, null, 2));
  
        // Verifique se o status code é 200
        expect(response.status).to.eq(200);
  
        // Verifique se o corpo da resposta contém a lista de produtos
        expect(response.body.quantidade).to.exist;
        expect(response.body.produtos).to.be.an('array');
        expect(response.body.produtos.length).to.be.greaterThan(0); // Verifica que há pelo menos um produto
  
        // Log para retorno do campo Produto exibindo o primeiro produto
        const produto = response.body.produtos[0];
        cy.log('Produto:', JSON.stringify(produto, null, 2));
  
        
        expect(produto.nome).to.eq('Logitech teste 01 ggg w Osinski, Ritchie and Durgan'); // Nome do primeiro produto esperado. O nome pode mudar conforme atualização do Swagger
        expect(produto.preco).to.eq(470); // Preço do primeiro produto esperado
        expect(produto.descricao).to.eq('Mouse'); // Descrição do primeiro produto esperado
        expect(produto.quantidade).to.eq(381); // Quantidade do primeiro produto esperado
        expect(produto._id).to.eq('2oKefF8kXF4dcsPG') // Id do primeiro produto esperado
      });
    });
  
    it('Deve retornar lista vazia com filtros incorretos', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos', // URL da API
        qs: {
          nome: 'ProdutoInexistente', // Nome que não existe
          preco: 9999, // Preço que provavelmente não existe
        },
        headers: {
          'Content-Type': 'application/json',
        },
        failOnStatusCode: false, // Não falhar automaticamente em caso de erro
      }).then((response) => {
        // Exibe o body da resposta para análise
        cy.log('Resposta com filtros incorretos:', JSON.stringify(response.body, null, 2));
  
        // Verifica se o status code é 200
        expect(response.status).to.eq(200);
  
        // Verifica se a lista de produtos está vazia
        expect(response.body.quantidade).to.eq(0); // Espera-se que a quantidade seja 0 para filtros incorretos
        expect(response.body.produtos).to.be.an('array').that.is.empty; // Verifica se o array de produtos está vazio
      });
    });
  });
  