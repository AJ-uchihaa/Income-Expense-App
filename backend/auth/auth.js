import jwt from "jsonwebtoken"


export const middleware = async (req,res,next) =>{
try{
const getToken = await req.headers.authorization

if(!getToken){
return res.json({msg : "invalid token"})
}
const splitToken = getToken.split(" ")[1]
const verifyToken = jwt.verify(splitToken,process.env.JWT_SECRET)
req.user = verifyToken;

next();

}catch(err){
console.log(err)
res.json({msg : "Your SignIn Failed"})
}
}
