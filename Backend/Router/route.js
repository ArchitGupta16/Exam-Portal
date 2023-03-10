import {Router} from 'express'
const router = Router()

/** Questions Routes */

router.get('/questions', (req,res) => {
    res.json("Questions api get request")
}

)

export default router;