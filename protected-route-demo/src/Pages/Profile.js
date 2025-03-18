//here we create dynamic load page using REACT.lazy()
import React from "react";
const Profiles=()=>
{
    return(
        <div>
            <h2>Profile Page is loading </h2>
            <p>This page is loaded lazily using React.lazy().</p>
        </div>
    )

}
export default Profiles;