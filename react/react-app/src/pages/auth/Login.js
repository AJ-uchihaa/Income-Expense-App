import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import axios from "axios";
/*import {useNavigate} from "react-router-dom"*/
import {Link} from "react-router-dom"
import {useState} from "react";



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
<div className="container-fluid">
<h>INCOME EXPENCE TRACKER</h>
<p>Welcome Back</p>
<p>Login to Continue</p>
 <form className="m-5 p-1 border-1px-solid-black" onSubmit={handleSubmit(formData)}>
<label>Email: </label>
<input name="email" type="email" placeholder="Enter Your Email" {...register("email")} />
{errors.email && <p>{errors.email.message}</p>}
<label>Password: </label>
<input name="password" type="password" placeholder="Enter Yout Password" {...register("password")} />
{errors.password && <p>{errors.password.message}</p>}
         <button type="submit">Submit</button>
</form>
      <p>{res}</p>
      <p>{signInRes}</p>
      <button>Continue With Google</button>
     <p>Don't have an account?</p>
     <Link to="SignUp">Sign Up</Link>
</div>
)}

