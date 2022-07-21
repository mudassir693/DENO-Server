import { Router } from "https://deno.land/x/opine@2.2.0/mod.ts";
import db from '../config/DB_Config.ts'

const user = db.collection('users')

interface UserSchema {
    Name: string;
    Email: string;
    ContactInfo: string;
    Married: boolean;
    Age: number;
}

const router = new Router();

router.get('/authTest',async(req,res)=>{
    try {
        return res.setStatus(200).json({data:'This is from route folder.'})
    } catch (error) {
        console.log(error)
        return res.setStatus(500).json({data:'There is some thing wrong in router connection.'})
    }
})

router.post('/register',async(req:any,res:any)=>{
    try {
        const {Name,Email,ContactInfo,Married,Age} = req.body
        console.log(req)
        let User:UserSchema = {
            Name,
            Email,
            ContactInfo,
            Married,
            Age
        }

        const resp = await user.insertOne(User)
        return res.setStatus(201).json({data:resp,error:false})

    } catch (error) {
        console.log('error: ',error)
        return res.setStatus(500).json({data:'There is some thing wrong in Adding User.'})
    }
})

export default router