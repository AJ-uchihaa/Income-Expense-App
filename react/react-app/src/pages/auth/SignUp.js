import {z} from "zod";
import {useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
/*import {useState} from "react"*/
import {Link} from "react-router-dom"
import "./SignUp.css"
import { IoWalletOutline } from "react-icons/io5";


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
<div class="container-fluid d-grid p-3" id="container">
  < IoWalletOutline size="60" id="fa" />
  <h className="text-center fw-bold">INCOME EXPENCE TRACKER</h>
  <p2>Create Accounte</p2>
  <p3>Sign Up to strat tracking your finance</p3>
      <form onSubmit={handleSubmit(formSubmit)}>
       <label>Full Name</label>
       <input type="text" name="name" id="text" {...register("name")} placeholder="Enter your Full Name" />
{errors.name && <p>{errors.name.message}</p>}
       <label>Email</label>
       <input type="email" name="number" id="email" {...register("number")} placeholder="Enter your Email" />
{errors.number && <p>{errors.number.message}</p>}
       <label>Password</label>
       <input type="password" name="password" id="password" {...register("email")} placeholder="Enter your Password" />
{errors.email && <p>{errors.email.message}</p>}
       <label>Confirm Password</label>
       <input type="password" name="passwordd" id="passwordd" {...register("password")} placeholder="Conform your Password" />
{errors.password && <p>{errors.password.message}</p>}

       <button class="btn" id="login" type="submit">Sign Up</button>
   </form>
<div>
 <div id="f-b"></div>
 <p6>OR</p6>
 <div id="s-b"></div>
 </div>
 <button class="btn border border-none" id="google-btn">Continue with Google</button>
 <p5>Already have an Account?
    <Link to="/">Login</Link></p5>
</div>
)
}

