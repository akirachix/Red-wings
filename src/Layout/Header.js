import React from "react";
//  import '../Styles.css'
import '../global.css';
import {Link} from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';

// import { FaUserCircle, FaRegSun, FaRegBell } from "react-icons/fa";

export const Header = ({ children }) => {
    return (

        <div className="icons">
            <Link to='./profile'><AccountCircleIcon/></Link>
            <SettingsIcon/>
            <NotificationsIcon/>

            {/* <FaUserCircle />
            <FaRegSun />
            <FaRegBell /> */}
            {children}

        </div>


    );
};

export default Header;