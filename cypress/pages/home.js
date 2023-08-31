/// <reference types='cypress'/>

class Home {
   /**
    * Navigates user to the home page
    */
   open() {
      cy.visit('/')
   }
}
export const home = new Home()
