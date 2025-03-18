import React from "react";
import { useAuth } from "../context/AuthContext";
 const Login=()=>
 {
    const {Login}=useAuth(); 
    return(
        <div>
            <h2>
                Login Page
            </h2>
            <button onClick={Login}>Login</button>
        </div>
    );
 };
 export default Login;