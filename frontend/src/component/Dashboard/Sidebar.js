import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Sidebar =  () => {
 

    return(
        <>
        {/* sidebar start */}
            <div className="sidebar" >
                <div className="logo-details">
                    <span className="logo_name">CodingLab</span>
                </div>
                <ul className="nav-links">
                    <li>
                    {/* <a href="#" className="active"> */}
                        <i className='bx bx-grid-alt' ></i>
                        <Link to={`/dashboard`}>
                            <span className="links_name">Employee Form</span>
                        </Link>
                    {/* </a> */}
                    </li>
                    <li>
                        {/* <a href="#" className=""> */}
                        <i className='bx bx-grid-alt' ></i>
                        <Link to="/employees">
                            <span className="links_name">Table View</span>
                        </Link>
                        
                        {/* </a> */}
                    </li>
                </ul>   
            </div>
        {/* sidebar ends */}
         
        </>
    )
}

export default Sidebar