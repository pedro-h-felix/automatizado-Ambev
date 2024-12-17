const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    supportFile: false,
    setupNodeEvents(on, config) {
    }
  }
})

module.exports = {
    e2e: {
      video: false, 
      screenshotOnRunFailure: true,  
      reporter: 'spec',  
      env: {
        CYPRESS_LOGGING: true  
      },
    },
  };
  
module.exports = {
    e2e: {
      video: false,
      screenshotOnRunFailure: true,
      reporter: 'spec',
      env: {
        CYPRESS_LOGGING: true,
        CYPRESS_NETWORK_LOGGING: true,  // Habilita logs de rede
      },
    },
  };
  