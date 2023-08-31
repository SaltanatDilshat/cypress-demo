// Import commands.js using ES2015 syntax:
import './commands'

// Any error that originates from the application will
// be ignored
Cypress.on('uncaught:exception', (err, runnable) => {
   return false
})
