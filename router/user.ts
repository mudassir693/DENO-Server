import {Router} from 'https://deno.land/x/opine@2.2.0/mod.ts'
import {AllUsers, findById} from '../controllers/userController.ts'
const router = Router()

router
    .get('/',AllUsers)
    .get('/getById/:id',findById)
export default router