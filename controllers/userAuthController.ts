import db from '../config/DB_Config.ts'

import bcrypt from '../config/b-crypt.ts'
import jwt from '../config/JWT.ts'

const user = db.collection('users')

interface UserSchema {
    Name: string;
    Email: string;
    Password:string
    ContactInfo: string;
    Married: boolean;
    Age: number;
}

export const userRegister = async(req:any,res:any)=>{
    try {
        const {Name, Email, Password, ContactInfo, Married, Age} = req.parsedBody

        const isEmailAlreadyRegistered = await user.findOne({Email})
        if(isEmailAlreadyRegistered){
            return res.setStatus(400).json({data:"This Email already there.",error:true})
        }
        const newPassword = await bcrypt.hash(Password)
        console.log(req.parsedBody)
        let User:UserSchema = {
            Name,
            Password: newPassword,
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
}

export const userLogin = async(req:any,res:any)=>{
    try {
        const {Email,Password} = req.parsedBody

        const isUserThere = await user.findOne({Email})
         if(!isUserThere){
            return res.setStatus(400).json({data:"This Email is Not Registered."})
         }
         const passwordMatch = await bcrypt.compare(Password,isUserThere.Password)
         if(!passwordMatch){
            return res.setStatus(400).json({data:"Wrong Password."})
         }
         const token = await jwt.create({ alg: "HS512", typ: "JWT" },{ Email:isUserThere.Email ,_id: isUserThere._id },"secret")
         const {Password:string ,...others} = isUserThere
         return res.setStatus(200).json({data:{others,token}})
    } catch (error) {
        console.log('loginError: ',error);
        return res.setStatus(400).json({data:error})
    }
}



