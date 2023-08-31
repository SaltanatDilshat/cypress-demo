import { home } from '../pages/home.js'
import { appt } from '../pages/appt.js'

/**
 * This page offers static variable that returns the referecne to the
 * page objects.
 */
export class pg {
   /**
    * returns the home page object reference
    */
   static home = home

   /**
    * Returns appoint page object reference
    */
   static appt = appt
}
