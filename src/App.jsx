import {

BrowserRouter,

Routes,

Route

}

from "react-router-dom";



import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Investment from "./pages/Investment";





function App(){


return(


<BrowserRouter>


<Routes>



{/* Login Page */}

<Route

path="/"

element={<Login/>}

/>



{/* Register Page */}

<Route

path="/register"

element={<Register/>}

/>



{/* Dashboard */}

<Route

path="/dashboard"

element={<Dashboard/>}

/>



{/* Investment */}

<Route

path="/investment"

element={<Investment/>}

/>



</Routes>


</BrowserRouter>


);


}



export default App;