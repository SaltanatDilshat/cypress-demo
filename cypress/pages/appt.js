/// <reference types='cypress'/>

class Appointment {
   /**
    * Fills out the contact details on the Contact Details section. Please utilize the following fixutre:
    * file.
    * - cypress/fixtures/user.json
    *
    * @param {object} fixture
    */
   fillContactDetails(fixture) {
      cy.fixture(fixture).then(info => {
         const contact = info['contact']
         const firstName = contact['first']
         const lastName = contact['last']
         const email = contact['email']
         const dob = contact['dob']
         const phone = contact['phone']
         const sex = contact['sex']
         const pronouns = contact['pronouns']

         cy.get("form#contact-step input[name='first_name']").type(firstName)
         cy.get("form#contact-step input[name='last_name']").type(lastName)
         cy.get("form#contact-step input[name='email']").type(email)
         cy.get("form#contact-step input[name='dob']").type(dob)
         cy.get("form#contact-step input[name='phone']").type(phone)
         cy.get("form#contact-step select[name='sex']").select(sex)
         cy.get("form#contact-step select[name='gender']").select(pronouns)
      })
      this.continue()
   }

   /**
    * Fills out the user address on the Shipping section. Please utilize the following fixtureL
    * - cypress/fixtures/user.json
    *
    * @param {object} fixture
    */
   fillShippingDetains(fixture) {
      cy.fixture(fixture).then(info => {
         const ship = info['shipping']
         const address1 = ship['line1']
         const address2 = ship['line2']
         const city = ship['city']
         const zip = ship['zip']

         cy.get('form#shipping-step input[name="line1"]').type(address1)
         cy.get('form#shipping-step input[name="line2"]').type(address2)
         cy.get('form#shipping-step input[name="city"]').type(city)
         cy.get('form#shipping-step input[name="zip"]').type(zip)
      })
      this.continue()
   }

   /**
    * Clicks the Continue button
    */
   continue() {
      cy.get('button#next-button').click()
   }
}

export const appt = new Appointment()
