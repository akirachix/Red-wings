import React from "react";
 import '../Styles.css'

import { FaUserCircle, FaRegSun, FaRegBell } from "react-icons/fa";

export const Header = ({ children }) => {
    
    return (
        <div className="icons">
            <FaUserCircle />
            <FaRegSun />
            <FaRegBell />
            {children}
            

        </div>

    );


};
export default Header;