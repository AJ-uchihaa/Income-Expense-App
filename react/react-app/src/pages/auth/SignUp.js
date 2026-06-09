import {z} from "zod";
import {useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
/*import {useState} from "react"*/
import {Link} from "react-router-dom"


export const SignUpForm = () =>{

const SignUpSchema = z.object({
name : z.string().min(1,"invalid name"),
number: z.string().min(10,"Please Enter Your Num"),
email: z.string().min(1,"Invalid Password"),
password: z.string().min(10,"Password must have 10 Charecters")
})

const {
register,handleSubmit,reset,formState: {errors}} =
useForm({resolver: zodResolver(SignUpSchema),})

/*const [res,setRes] = useState("")*/

const formSubmit = async (datas) =>{
try{
const dataa = await axios.post
("http://localhost:5000/signUp",datas)
reset()
alert(dataa.data.message)
} catch (err){
console.log(err)
}
}

return(
<div className="container-fluid p-5">
   <h className="text-center font-bold">Create Account</h>
  <p>Sign Up to strat tracking your finance</p>
   <form className="p-3 m-1 w-55 h-80" 
onSubmit={handleSubmit(formSubmit)}>

<input type="text" name="name" {...register("name")} placeholder="Fullname" />
{errors.name && <p>{errors.name.message}</p>}

<input type="number" name="number" {...register("number")} placeholder="Phone Number" />
{errors.number && <p>{errors.number.message}</p>}

<input type="email" name="email" {...register("email")} placeholder="Email" />
{errors.email && <p>{errors.email.message}</p>}

<input type="password" name="password" {...register("password")} placeholder="Password" />
{errors.password && <p>{errors.password.message}</p>}

<button className="btn btn-none bg-success" type="submit" style={{color: "red"}}>SignUp</button>
   </form>
<span style={{width: "40%",color:"black"}}></span><p>oR</p><span className="w-50 bg-secondary h-2"></span>
<button>Sign Up With Google</button>
<p>Already have an account?</p><Link to="/" >Login</Link>
</div>
)
}

