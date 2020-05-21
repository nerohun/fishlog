import React from "react";
import {Link} from "react-router-dom";
import Links from "./Links";

const Navbar =()=>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo"><img src={"fishlogLogoWhite.png"} alt="FishLog" width={55}/> </Link>
                <Links/>

            </div>
        </nav>
    )
};

export default Navbar;