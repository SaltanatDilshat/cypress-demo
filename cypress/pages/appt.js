/// <reference types='cypress'/>

class Appointment {
   fillContactDetails(fixture) {
      cy.fixture(fixture).then(info => {
         const firstName = info['first']
         const lastName = info['last']
         const email = info['email']
         const dob = info['dob']
         const phone = info['phone']
         const sex = info['sex']
         const pronouns = info['pronouns']

         cy.get("form#contact-step input[name='first_name']").type(firstName)
         cy.get("form#contact-step input[name='last_name']").type(lastName)
         cy.get("form#contact-step input[name='email']").type(email)
         cy.get("form#contact-step input[name='dob']").type(dob)
         cy.get("form#contact-step input[name='phone']").type(phone)
         cy.get("form#contact-step select[name='sex']").select(sex)
         cy.get("form#contact-step select[name='gender']").select(pronouns)
      })
   }

   fillShippingDetains(fixture) {
      cy.fixture(fixture).then(info => {
         const address1 = info['line1']
         const address2 = info['line2']
         const city = info['city']
         const zip = info['zip']

         cy.get('form#shipping-step input[name="line1"]').type(address1)
         cy.get('form#shipping-step input[name="line2"]').type(address2)
         cy.get('form#shipping-step input[name="city"]').type(city)
         cy.get('form#shipping-step input[name="zip"]').type(zip)
      })
   }

   continue() {
      cy.get('button#next-button').click()
   }
}

export const appt = new Appointment()
