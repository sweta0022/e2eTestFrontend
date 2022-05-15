import React, { useEffect, useState } from "react";
import { Redirect,Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const [authenticate, setAuthenticate] = useState(false);
    useEffect(() => {
        setAuthenticate(localStorage.getItem("token"));
    },localStorage.getItem("token"));
   
    return(
        <>
           {
                <Route 
                {...rest}
                render={(props) => {
                    if(authenticate === false)
                    {
                        return <Redirect to="/login"/>
                    }
                    return <Component {...props} />

                }} />
           }
        </>
    )
}

export default ProtectedRoute