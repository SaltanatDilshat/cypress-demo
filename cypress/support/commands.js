// ----- Custom Commands -----//

Cypress.Commands.add('lit', locator => {
   cy.get(locator).invoke('css', 'border', '2px solid purple')
})
