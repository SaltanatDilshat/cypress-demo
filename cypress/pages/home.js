/// <reference types='cypress'/>

class Home {
   /**
    * Navigates user to the home page
    */
   open() {
      cy.visit('/')
      cy.get('div#state-step h2').as('header')
      cy.get('@header').should('be.visible').and('have.text', 'Schedule your Appointment!')
      cy.lit('@header')
      // cy.wait(10000)  
   }

   /**
    * Given the state string, selects the state from the appointment section. Note that
    * following is avaiable state selction text:
    *  - California
    *  - Colorado
    *  - Florida
    *  - Georgia
    *  - Illinois
    *  - Maryland
    *  - New Hampshire
    *  - Texas
    *  - Utah
    *  - Virginia
    *  - Washington
    *  - Other
    * @param {string} state
    */
   selectState(state) {
      cy.contains('div#state-step a', state).click()
   }

   /**
    * Given the appointment start time of ISO 8601 date format, selects the
    * appointment time and clicks on it. Example of time format is:
    *
    * - Monday 11th September (EDT) 08:30 am is  '2023-09-11T12:30:00Z'
    *
    * @param {string} slot ISO 8601 format start time
    *
    */
   selectTimeSlot(slot) {
      cy.get('div#appointment-slots a').filter(`[onclick*="bookAppointment('${slot}"]`).click()
   }

   /**
    * Selects the first avaiable time slot
    */
   selectFirstTimeSlot() {
      cy.get('div#appointment-slots a').eq(0).click()
      cy.get('button#next-button').click()
   }
}
export const home = new Home()
