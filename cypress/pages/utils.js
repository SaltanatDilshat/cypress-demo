/// <reference types='cypress'/>

class Util {
   interceptApi(info) {
      cy.intercept(info.method, info.url).as(info.alias)
   }
}
export const util = new Util()
