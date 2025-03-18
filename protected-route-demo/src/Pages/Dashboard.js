import React from "react";
import { useAuth } from "../context/AuthContext";
 const Dashboard=()=>
 {
    const {Logout}=useAuth(); 
    return(
        <div>
            <h2>
                Dashboard Page
            </h2>
            <p>
                Welcome to dashboard of your application...
            </p>
            <button onClick={Logout}>Logout</button>
        </div>
    );
 };
 export default Dashboard;