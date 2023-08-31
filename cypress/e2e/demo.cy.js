/// <reference types='cypress'/>

import { pg } from '../pages/page.js'

describe('Henry-Med sample test suite', () => {
   it('Verify user can see home page', () => {
      pg.home.open()
   })
})
