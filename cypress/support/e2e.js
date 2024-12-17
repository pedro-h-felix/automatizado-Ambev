// Configuração global: Impedir que erros não capturados falhem os testes
Cypress.on('uncaught:exception', (err, runnable) => {
    // Impedir que erros não capturados falhem os testes
    return false;
  });
  
  