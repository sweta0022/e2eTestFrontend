import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import "./Sidebar.js";
import axios from "axios";
import validator from 'validator'
import Sidebar from "./Sidebar.js";
import Navbar from "./Navbar.js";
import { Country, State, City } from "country-state-city"; 


const Dashboard =  ({history}) => {
    
  const [authenticateEmail,setAuthenticateEmail] = useState("");
  const [formData,setFormData] = useState({
     full_name:"", 
     email:"" ,
     password:"" ,
     mobile:"" ,
     gender:"" ,
     country:"" ,
     state:"" ,
     city:"" ,
    });

    const [error,setError] = useState({
      full_name:"", 
      mobile:"" ,
      gender:"" ,
      country:"" ,
      state:"" ,
      city:"" ,
     });

    const [ language, setLanguage ] = useState({ hindi:false , english : false });

    let name,value;
    const handleChange = (e) => {
       name = e.target.name;
       value = e.target.value;
       if(name === 'mobile')
       {
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (e.target.value === '' || pattern.test(value)) {
            setFormData( { ...formData, [name]:value } )
            setError({mobile:""})              
          }
          else
          {
            setError({mobile:"Only Numeric value."});

          }
       }else{
        setFormData( { ...formData, [name]:value } )
       }
       

       
    }

    const handleSelect = (e) => {
      setLanguage({ ...language, [e.target.name]: e.target.checked });
   }

    const handleSubmit = async (e) => {
      e.preventDefault();

      const {...userDetail} = formData;
      if(userDetail.full_name === "")
      {
        setError({full_name:"This field is required."}); return false;
      }
      else
      {
        setError({full_name:""}); 
      }

      if(userDetail.mobile === "")
      {
        setError({mobile:"This field is required."}); return false;
      }
      else
      {
        setError({mobile:""}); 
      }

      if(userDetail.gender === "")
      {
        setError({gender:"This field is required."}); return false;
      }
      else
      {
        setError({gender:""}); 
      }

      // if(userDetail.language === "")
      // {
      //   setError({language:"This field is required."});
      // }

      if(userDetail.country === "")
      {
        setError({country:"This field is required."}); return false;
      }
      else
      {
        setError({country:""}); 
      }

      if(userDetail.state === "")
      {
        setError({state:"This field is required."}); return false;
      }
      else
      {
        setError({state:""}); 
      }

      if(userDetail.city === "")
      {
        setError({city:"This field is required."}); return false;
      }
      else
      {
        setError({city:""}); 
      }

      var config = { 
        headers: { 
          "Content-Type": "application/json",
          "x-access-token":localStorage.getItem("token")?localStorage.getItem("token"):null,}
         };

      const response  = await axios.post(
        `http://localhost:3002/api/v1/formdata`,
        { 
          userDetail,
          language: language 
        },  
        config,                  
      );

      if(response.data.status === 200)
      {
        alert(response.data.message);
        // history.push('/employees');
      }
      else
      {
         alert(response.data.message);
         return false;
      }
  }

  async function fetchUserDetail() {
    var config = { 
        headers: { "Content-Type": "application/json",
        "x-access-token":localStorage.getItem("token")?localStorage.getItem("token"):null,}
    };

    const response  = await axios.get(
      `http://localhost:3002/api/v1/userDetail`,
      config,                  
    );

    if(response.data.status === 200)
    {
      if(response.data.employee.length != 0)
      {
        setFormData({
          full_name:response.data.employee[0].user_data.full_name,
          email:response.data.employee[0].email,
          mobile:response.data.employee[0].user_data.mobile,
          gender:response.data.employee[0].user_data.gender,
          country:response.data.employee[0].user_data.country,
          state:response.data.employee[0].user_data.state,
          city:response.data.employee[0].user_data.city,
        });

        setLanguage({
          english:response.data.employee[0].user_data.language.english,
          hindi:response.data.employee[0].user_data.language.hindi,
        });
      }
     
    }
    else
    {
        alert(response.data.message);
    }
  }

    useEffect(() => {
      setAuthenticateEmail(localStorage.getItem("email"));
      fetchUserDetail();
    },[])

    useEffect(() => {
      setAuthenticateEmail(localStorage.getItem("email"));
    },[localStorage.getItem("email")])
   

    return( 
        <>
        <Sidebar/>
         {/* section start  */}
        <section className="home-section">
            <Navbar/>

              <div className="home-content">    
                <form method="post">     
                    <div className="user-primary">
                    <div className="user-primary-box">
                        
                            <div>                                                 
                                <div className="row">
                                    <div>
                                    <label htmlFor="full_name">Full Name (*):</label>
                                    </div>
                                    <div className="text">
                                    <input type="text" name="full_name" onChange={handleChange} value={formData.full_name} placeholder="Your name.."/>
                                    <span className="error">{error.full_name}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div>
                                    <label htmlFor="email">Email:</label>
                                    </div>
                                    <div className="text">
                                    <input type="text" name="email" disabled onChange={handleChange} value={authenticateEmail}  placeholder="Your email.."/>
                                    </div>
                                </div>

                                {/* <div className="row">
                                    <div>
                                    <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="text">
                                    <input type="text" name="password" onChange={handleChange} placeholder="Your password.."/>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div>
                                    <label htmlFor="mobile">Mobile (*)</label>
                                    </div>
                                    <div className="text">
                                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Your mobile.."/>
                                    <span className="error">{error.mobile}</span>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                    
                    </div>

                    <div className="user-detail">
                        <div className="user-detail-box">
                            
                                <div className="">                                                 
                                    <div className="row">
                                        <div>
                                        <label htmlFor="gender">Gender (*):</label>
                                        </div>
                                        <div className="radio"> 
                                          <input  type="radio" onChange={handleChange} checked={(formData.gender === "male"?true:false)} name="gender" value="male"/>  
                                          <label>Male</label>  
                                          <input  type="radio" onChange={handleChange} name="gender" checked={(formData.gender === "female"?true:false)} value="female"/>  
                                          <label>Female</label>    
                                          <span className="error">{error.gender}</span>
                                        </div> 
                                    </div>
    
                                    <div className="row">
                                        <div>
                                        <label htmlFor="language">Language:</label>
                                        </div>
                                        <div className="checkbox"> 
                                          <input  type="checkbox" onChange={handleSelect} checked={language.hindi}  name="hindi" value="hindi"/>  
                                          <label>Hindi</label>  
                                          <input type="checkbox" onChange={handleSelect} checked={language.english} name="english" value="english"/>  
                                          <label>English</label>    
                                          <span className="error">{error.language}</span>
                                        </div> 
                                    </div>
    
                                    <div className="row">
                                        <div>
                                        <label htmlFor="country">Country (*)</label>
                                        </div>
                                        <div className="selectBox">
                                          <select name="country" value={formData.country} onChange={handleChange}>
                                          <option value="">Country</option>
                                          {Country &&
                                            Country.getAllCountries().map((item) => (
                                              <option key={item.isoCode} value={item.isoCode} >
                                                {item.name}
                                              </option>
                                            ))}
                                          </select>
                                          <span className="error">{error.country}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div>
                                        <label htmlFor="state">State (*)</label>
                                        </div>
                                        <div className="selectBox">
                                          <select name="state" value={formData.state} onChange={handleChange}>
                                             <option>Please State</option>
                                             {State &&
                                              State.getStatesOfCountry(formData.country).map((item) => (
                                                <option key={item.isoCode} value={item.isoCode}>
                                                  {item.name}
                                                </option>
                                              ))}
                                          </select>
                                          <span className="error">{error.state}</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                        <label htmlFor="city">City (*)</label>
                                        </div>
                                        <div className="selectBox">
                                          <select name="city" value={formData.city} onChange={handleChange} >
                                             <option value="">Please City</option>
                                             {City &&
                                              City.getCitiesOfState(formData.country,formData.state).map((item) => (
                                                <option key={item.name} value={item.name}>
                                                  {item.name}
                                                </option>
                                              ))}
                                          </select>
                                          <span className="error">{error.city}</span>
                                        </div>
                                    </div>
                                    
                                
                            </div>
                        
                            <div className="button">
                            <button onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
              </div>
        </section>
        {/* section ends */}
        </>
    )
}

export default Dashboard