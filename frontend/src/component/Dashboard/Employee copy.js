import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar.js";
import emp from "./Employee.css";


const Employee =  () => {
 

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
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
         </table>
        </div>
              </div>
        </section>
        {/* section ends */}
         
        </>
    )
}

export default Employee;