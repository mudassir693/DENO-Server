import db from '../config/DB_Config.ts'
import {ObjectId} from "https://deno.land/x/mongo@v0.30.1/mod.ts"

const user = db.collection('users')

export const AllUsers = async (req:any,res:any)=>{
    try {
        const users = await user.find().toArray()

        return res.setStatus(200).json({data:users})
    } catch (error) {
        console.log('get users error: ',error);
        return res.setStatus(500).json({data:error})
    }
}

export const findById = async (req:any,res:any)=>{
    try {
        const resp = await user.findOne({_id: new ObjectId(req.params.id)})
        return res.setStatus(200).json({data: resp})
    } catch (error) {
        console.log('get user by Id: ', error);
        return res.setStatus(500).json({data:error})
    }
}