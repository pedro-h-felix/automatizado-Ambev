const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    supportFile: false,
    setupNodeEvents(on, config) {
      // Implementar event listeners se necessário
    }
  }
})
