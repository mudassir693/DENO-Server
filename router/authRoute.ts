import { Router } from "https://deno.land/x/opine@2.2.0/mod.ts";
// import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
import {userLogin,userRegister} from '../controllers/userAuthController.ts'


const router = new Router();

router.get('/authTest',async(req,res)=>{
    try {
        return res.setStatus(200).json({data:'This is from route folder.'})
    } catch (error) {
        console.log(error)
        return res.setStatus(500).json({data:'There is some thing wrong in router connection.'})
    }
})

router.post('/register',userRegister)

router.post('/login',userLogin)

export default router