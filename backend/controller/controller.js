import user from "../model/model.js";
import jwt from "jsonwebtoken";


const arr = []

export const sighUpp = (req,res) =>{
try{
const {name,email,password} = req.body;
const check = arr.find(user => user.email === email)
if(check){
return res.json({message: "email already exits"})
}

arr.push({name,email,password})
console.log(arr)
return res.json({message: "success fully signUp"})
}catch(err){
return res.json({message: err.message})

}}



export const logine = async (req,res) =>{
try{
const {email,password} = req.body; 

const chk = arr.find(finde => finde.email === email)

if(!chk){
return res.json({ message: "invalid email"})
}

const token = jwt.sign({email:chk.email},
process.env.JWT_SECRET,{expiresIn: "1h"})
return res.json({ tok: token})

}catch(err){
return res.json({ message: "somthing wrong"})
}
}



export const securePage = async (req,res) =>{
try{
return res.json({msg: "succesfully sign In"})
}catch(err){
return res.json({msg: "somthing wrong"})
}
}
