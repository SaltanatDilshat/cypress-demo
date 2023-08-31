/// <reference types='cypress'/>

import { pg } from '../pages/page.js'

describe('Henry-Med sample test suite', () => {
   beforeEach(() => {
      pg.home.open()
   })

   /**
    * This test case includes the API call manipulation to make sure that user can select
    * the time slot that has been selected from previous test case
    */
   it('Verify that user can reserve an appointment with specific time slot', () => {
      // Intercept Request
      cy.intercept('POST', 'https://onboard.henrymeds.com/api/appointment/', {
         fixture: 'postVA',
      }).as('fakePost')

      cy.intercept('GET', 'https://onboard.henrymeds.com/api/appointment?state**', {
         fixture: 'vaAppts',
      }).as('fakeAppt')

      pg.home.selectState('Virginia')
      // Select specific time slot, note that this timeslot
      // must match from the timeslot on the fixture files postVA.json and vaAppts.json
      pg.home.selectTimeSlot('2023-09-08T13:45:00Z')

      // Wait until the appointment api calls resolves
      cy.wait('@fakePost').then(xhr => {
         console.log(xhr)
      })

      cy.wait('@fakeAppt').then(xhr => {
         console.log(xhr)
      })

      // Fill out the appointments
      pg.appt.continue()
      pg.appt.fillContactDetails('user.json')
      pg.appt.fillShippingDetains('user.json')
   })

   /**
    * This test case is pure UI test where it only selects the first avaiable time slot,
    * note that without API intercept and response mocking, the previously selected timeslot
    * is not avaible on the next test run.
    */
   it('Verify that user can reserve an appointment for first avaiable time slot', () => {
      pg.home.selectState('Virginia')
      pg.home.selectFirstTimeSlot()
      pg.appt.fillContactDetails('user.json')
      pg.appt.fillShippingDetains('user.json')
   })
})
