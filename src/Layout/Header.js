
import React from "react";

import { FaUserCircle,  FaRegBell } from "react-icons/fa";
export const Header = ({ children }) => {

   return (
       <div className="icons">
           <FaUserCircle />
           
           <FaRegBell />
           {children}
       </div>
   );
};
export default Header;



// import React,{useRef, useState} from "react";
// import './Header.css'
// //  import '../Styles.css'
//  import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//  import NotificationsIcon from '@material-ui/icons/Notifications';
// import { ClickAwayListener } from "@material-ui/core";
// export const Header = ({ children }) => {
//   const dropdownRef = useRef(null);
//   const[isActive,setIsActive] = useState(false);
//   const[open,setIsOpen] = useState(false);
//   const onClick = () => {
//     setIsActive(!isActive);
//   }
//   const handleModel = () => {
//     setIsOpen(!open);
//   }
//   const handleOnClickAway = () =>{
//     setIsActive(!isActive);
//   }
//   return (
//     <ClickAwayListener onClickAway={handleOnClickAway}>
//         <div className="header">
//           <div className="menu__header">
//           <AccountCircleIcon className="menu__trigger" onClick={onClick}/>
//           <NotificationsIcon onClick={handleModel}/>
//           </div>
//            <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
//              <div className="box">
//             <ul>
//               <li><a href="/profile">Edit profile</a> </li>
//               <li><a href="/logout">Logout</a> </li>
//             </ul>
//             </div>
//            </nav>
//            {open ? (<div className="mode">view</div>):''}
//             {children}
//         </div>
//         </ClickAwayListener>
//     );
// };
// export default Header;