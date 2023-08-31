/// <reference types='cypress'/>

import { url } from 'inspector'
import { pg } from '../pages/page.js'

describe('Henry-Med sample test suite', () => {
   beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      pg.home.open()
   })

   it('Verify that user can set the appointment', () => {
      // pg.util.interceptApi({
      //    method: 'GET',
      //    url: 'https://onboard.henrymeds.com/api/appointment?state=virginia**',
      //    alias: 'appointments',
      // })
      // cy.intercept(
      //    'GET',
      //    'https://onboard.henrymeds.com/api/appointment**',
      // ).as('fakeAppTime')
      pg.home.selectState('California')
      pg.home.selectTimeSlot('2023-09-08T12:45:00Z')
      pg.appt.fillContactDetails('contactdetails.json')
      pg.appt.continue()
      pg.appt.fillShippingDetains('shippingdetails.json')
      pg.appt.continue()
   })
})
