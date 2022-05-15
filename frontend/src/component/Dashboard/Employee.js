import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar.js";
import emp from "./Employee.css";
import axios from "axios";
import { Country, State, City } from "country-state-city"; 


const Employee =  () => {
const [userDetail , setUserDetail] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var config = { 
                headers: { "Content-Type": "application/json",
                "x-access-token":localStorage.getItem("token")?localStorage.getItem("token"):null,}
             };
    
            const response  = await axios.get(
              `http://localhost:3002/api/v1/userFormData`,
              config,                  
            );
    
            if(response.data.status === 200)
            {
                setUserDetail(response.data.employees);
            }
            else
            {
                alert(response.data.message);
            }
          }

       fetchData();

    },[])
 

    return(
        <>
           {/* sidebar start */}
        <Sidebar/>
         {/* sidebar ends */}
         {/* section start  */}
        <section className="home-section">
            <Navbar/>

              <div className="home-content">    
              <div className="table-view">
         <table>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Gender</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
        </tr>
        {userDetail.map((val, key) => {
        return (
            <tr key={key}>
            <td>{val.user_data.full_name}</td>
            <td>{val.email}</td>
            <td>{val.user_data.mobile}</td>
            <td>{val.user_data.gender}</td>
            <td>{Country.getCountryByCode(val.user_data.country).name}</td>
            <td>{State.getStateByCode(val.user_data.state).name}</td>
            <td> {val.user_data.city}</td>
            </tr>
        )
        })}

         </table>
        </div>
              </div>
        </section>
        {/* section ends */}
         
        </>
    )
}

export default Employee;