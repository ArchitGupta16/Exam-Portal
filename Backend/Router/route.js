import {Router} from 'express'
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';



/** Questions Routes API*/

// (/questions) is an endpoint
router.route('/questions')
            .get(controller.getQuestions)       /** GET Request */
            .post(controller.insertQuestions)   /** POST Request */
            .delete(controller.dropQuestions)   /** DELETE Request */

/** Result Routes API */

router.route('/result')
            .get(controller.getResult)
            .post(controller.storeResult)
            .delete(controller.dropResult)

export default router;