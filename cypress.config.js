const { defineConfig } = require('cypress')
 
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 3000,
    pageLoadTimeout: 30000,
    video: true,
    screenshotOnRunFailure: true,
 
    setupNodeEvents(on, config) {
      return config
    },
  },
})