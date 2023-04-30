const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1980,
  viewportHeight: 1024,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
