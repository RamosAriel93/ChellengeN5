const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
       // Imprime el log en la consola estándar
      on('task', {
        log(message) {
          console.log('[Cypress-Log]', message);;
          return null;
        },
      })
      return config;
    },
  },
});
