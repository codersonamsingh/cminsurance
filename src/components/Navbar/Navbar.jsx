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

        {/* <div className="nav-right flex-div">
           <h3 className="menu-item">mn1  </h3>
           <h3 className="menu-item">mn2  </h3>
           <h3 className="menu-item last-menu"> <FaUser /> mn3</h3>
      <button className="create-button">Create Account</button>

        </div> */}
    </nav>
    )
}
export default Navbar