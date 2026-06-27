import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import axios from "axios";
/*import {useNavigate} from "react-router-dom"*/
import {Link} from "react-router-dom"
import {useState} from "react";
import { IoWalletOutline } from "react-icons/io5";


export function SignIn(){
/*const navigate = useNavigate()*/

const [res,setRes]= useState("")
const [token,setToken] = useState("")
const [signInRes,setSignInRes] = useState("")

const schema = z.object({
email : z.string().min(1,"please Enter Your Email"),
password : z.string().min(10,"please Enter Your Password")
})


const { register,handleSubmit,formState : {errors},}
= useForm({resolver: zodResolver(schema),})


const formData = async(data) =>{
const sendData = await axios.post("http://localhost:5000/login",data)
setRes(sendData.data.message)
const jwtToken = sendData.data.tok
setToken(jwtToken)
console.log(token)

localStorage.setItem("tokenn",jwtToken)

const sendToken = await axios.get
("http://localhost:5000/authMiddleware",{
headers: {
        Authorization:`Bearer ${jwtToken}`
}
})
setSignInRes(sendToken.data.msg)

}

return(
<div class="container-fluid p-3 d-grid" id="container">
    <IoWalletOutline size={60} color="#e97c00" id="fa" />
<h class="text-center fw-bold">INCOME EXPENCE TRACKER</h>
<p2 class="text-center fw-bold">Welcome Back!</p2>
<p3 class="text-center">Login to Continue</p3>
 <form onSubmit={handleSubmit(formData)}>
<label>Email</label>
<input name="email" type="email" id="email" placeholder="Enter Your Email" {...register("email")} />
{errors.email && <p>{errors.email.message}</p>}
<label>Password</label>
<input name="password" type="password" id="password" placeholder="Enter Yout Password" {...register("password")} />
{errors.password && <p>{errors.password.message}</p>}
<p4 class="linke">Forgot password?</p4>
     <button type="submit" class="btn" id="login">Login</button>
</form>
      <p>{res}</p>
      <p>{signInRes}</p>
<div id="mini-con">
   <div id="f-b"></div>
      <p6>OR</p6>
   <div id="s-b"></div>
</div>
      <button class="btn border border-none" id="google-btn">Continue With Google</button>
     <p5>Don't have an account?
     <Link to="SignUp">Sign Up</Link></p5>
</div>
)}

