import React from "react";
import './Navbar.css'
import logo from '../../assets/smclogo.png'
// import { FaUser } from "react-icons/fa";
const Navbar = () => {
    return(
        <nav className='flex-div nav-css'>
        <div className='nav-left flex-div'>
            <img className ='logo' src={logo} alt="" />
        </div>

        {<div className="nav-middle flex-div">
           <h3 className="menu-item">General Insurance </h3>
           <h3 className="menu-item">Life Insurance</h3>
           <h3 className="menu-item">Insurance Article</h3>
           
           </div>}


        { <div className="nav-right flex-div">
           <h3 className="menu-item">About Us </h3>
           <h3 className="menu-item">Contact us </h3>
           <h3 className="menu-item">Become a Sales Partner </h3>
           <h3 className="menu-item">Claim </h3>
           <h3 className="menu-item">SMC Assure </h3>
           {/* <h3 className="menu-item last-menu"> <FaUser /> mn3</h3> */}
      <button className="create-button">Login</button>

        </div> }


    </nav>
    )
}
export default Navbar