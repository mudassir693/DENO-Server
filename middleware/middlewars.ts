import jwt from '../config/JWT.ts'

export const verifyUser = async (req:any,res:any,next:any)=>{
    try {
        const payload = await jwt.verify(req.parsedBody.token, "secret", "HS512")
        console.log(payload) 
        next()
    } catch (error) {
        console.log('middle error: ',error);
        return res.setStatus(500).json({data:error})
    }
}