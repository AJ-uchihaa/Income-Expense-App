import {createContext,useState} from "react";

export const toggleContext = createContext();
function ThemeContext({children}){
const [val, setVal] = useState(true)

function f(){
setVal(val ? false : true)
}
return(
<toggleContext.Provider value={{f,val}}>
<div style={{background : val ? "white":"black"}}>
<input type="button" onClick={f} />
<p>{val}</p>
{children}
</div>
</toggleContext.Provider>
)
}

export default ThemeContext;
