import React from "react";

import {NavLink} from "react-router-dom";

const Links =()=>{
    return(
        <ul className="right">
            <li><NavLink to='/dashboard/osszeskapas'>Összes Kifogott Hal</NavLink></li>
            <li><NavLink to='/dashboard/sajatkapasok'>Saját Kifogott Halaim</NavLink></li>

        </ul>
    )
};

export default Links ;