import {Router} from 'https://deno.land/x/opine@2.2.0/mod.ts'
import {AllUsers, findById, findByIdAndUpdate, findbyIdAndDelete} from '../controllers/userController.ts'
const router = Router()

router
    .get('/',AllUsers)
    .get('/getById/:id',findById)
    .put('/update/:id',findByIdAndUpdate)
    .delete('/delete/:id', findbyIdAndDelete)
export default router