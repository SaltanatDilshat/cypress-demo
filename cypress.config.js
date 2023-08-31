import { defineConfig } from 'cypress'

export default defineConfig({
   viewportWidth: 1200,
   viewportHeight: 900,
   defaultCommandTimeout: 15000,
   video: true,
   screenshotOnRunFailure: true,
   watchForFileChanges: false,
   reporter: 'mochawesome',
   reporterOptions: {
      reportFilename: 'henry-meds-[name]-[status]-[datetime]',
   },
   e2e: {
      baseUrl: 'https://onboard.henrymeds.com/',
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
   },
})
