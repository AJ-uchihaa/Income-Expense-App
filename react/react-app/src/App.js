
import { SignUpForm } from "./pages/auth/SignUp.js"
import { SignIn } from "./pages/auth/Login.js";
import { Routes,Route } from "react-router-dom"


function App() {

return(
<>
  <Routes>
    <Route path="/"  element={<SignIn />} /> 
<Route path="/SignUp" element={<SignUpForm />} />
  </Routes>
</>
)
}

export default App;
