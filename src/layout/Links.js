import React from "react";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Links =()=>{
    return(
        <ul className="right">
            <li><NavLink to='/dashboard/osszeskapas'>Összes Kapás</NavLink></li>
            <li><NavLink to='/dashboard/sajatkapasok'>Saját kapásaim</NavLink></li>

        </ul>
    )
}

export default Links ;