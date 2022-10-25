import React, { useState } from "react";
import "./Sidebar.css";

import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,

} from "@iconscout/react-unicons";


const Sidebar = ({ children }) => {
  const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
      path: "/"
    },


    {
      icon: UilClipboardAlt,
      heading: "Donors",
      path: "/donors"
    },
    {
      icon: UilUsersAlt,
      heading: "Blood requests",
      path: "/request"
    }

  ]

  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className="logo">
          <span>
            Red<span>-Wings</span>
          </span>
        </div>


        <div className="menu">


          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <a href={item.path} style={{ textDecoration: "none" }} >

                  <span>{item.heading}</span>

                </a>



              </div>

            );
          })}

          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
