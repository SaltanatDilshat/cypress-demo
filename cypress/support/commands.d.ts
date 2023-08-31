declare namespace Cypress {
   interface Chainable<Subject> {
      /**
       * Given the element, alias, or locator, it will highlight the element.
       * Use this for screenshot or video recording purpuse.
       *
       * @param locator element, alias, element locator
       */
      lit(locator: string): Chainable<any>
   }
}
