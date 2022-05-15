import React, {  useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import validator from 'validator'
import { useHistory } from "react-router-dom";



const Login =  () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // If user is logged in automatically redirected to dashboard page
    useEffect(()=> {
      const token = localStorage.getItem("token") ? true : false;
      if(token===true)
      history.push('/dashboard');
    },[]);

    //Login function
    const handleLogin = async (e) => {
        e.preventDefault();

        if( email === "" )
        {
          alert('Please enter username');
          return false;
        }
        else
        {
          if (!validator.isEmail(email))
          {
            alert('Enter valid Email!');
            return false;
          }
          else
          {
            if( password === "" )
            {
              alert('Please enter password');
              return false;
            }
            else
            {
              var config = { headers: { "Content-Type": "application/json"} };

              const response  = await axios.post(
                `http://localhost:3002/api/v1/signin`,
                { 
                  email:  email, 
                  password: password 
                },  
                config,                  
              );
            
              if(response.data.status === 200 )
              {
                 alert(response.data.message);
                 localStorage.setItem("token", response.data.token);                
                 localStorage.setItem("email", response.data.result.email);                
                  
                  
                
                 if(response.data.formDataExists)
                 {
                   history.push('/employees'); 
                 }
                 else
                 {
                  history.push('/dashboard');
                 }
                 
              }
              else
              { 
                  alert(response.data.message);
              }

            }
          }

          
        }
        return false;
    } 

    return(
        <>  
          <div className="login">              
                <i className="fa fa-user icon"></i>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}  placeholder="Username" />
                  <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"/>
                  <button onClick={handleLogin} className="btn btn-primary btn-block btn-large">LOGIN</button>   
          </div>      
         
        </>
    )
}

export default Login