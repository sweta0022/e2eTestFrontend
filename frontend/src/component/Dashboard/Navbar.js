import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar =  () => {
 
    const [email, setEmail] = useState("");
    useEffect(() => {
        setEmail(localStorage.getItem("email"));
    },localStorage.getItem("email"));

    return(
        <>
            <nav>
                <div className="sidebar-button">
                    <i className='bx bx-menu sidebarBtn'></i>
                    <span className="dashboard">Dashboard</span>
                </div>
                <div className="profile-details">
                    <span className="admin_name">{email}</span>
                    <i className='bx bx-chevron-down' ></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar