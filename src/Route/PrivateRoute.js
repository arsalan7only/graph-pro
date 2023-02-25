import { Route,Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Postlogin/Home";
import Login from "../Pages/Prelogin/Login";




const PrivateRoute=() =>{
    return (
        
     <div>
       < Routes>
       <Route path="/"element={<Home/>}/>

       
       </Routes>
     </div>
    )
}
export default PrivateRoute;