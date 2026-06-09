import {useContext } from "react";
import {toggleContext} from "../store/themeContext.js";


function Header({sendData}){
const {val} = useContext(toggleContext)
return(
<div style={{ background : val ? "white" : "black"}}>
<h1 style={{color: "yellow"}}>Income Expence App</h1>
sendData("aj")
</div>
)
}
export default Header
