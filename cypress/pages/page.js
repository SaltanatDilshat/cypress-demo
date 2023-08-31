import { home } from '../pages/home.js'
import { util } from '../pages/utils.js'
import { appt } from '../pages/appt.js'

export class pg {
   /**
    * returns the home page object reference
    */
   static home = home

   /**
    * Returns the util page object reference
    */
   static util = util

   /**
    * Returns appoint page object reference
    */
   static appt = appt
}
