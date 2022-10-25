import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import { Outlet } from "react-router-dom";

const  Layout= ({ children }) => {
  return (
    <div>
      <div className="whole">
      
        <div className="search">
          <div>
            <Sidebar />
          </div>
          <div className="navigation-bar">
            <Header/>
            <div className="children">
              <h1>Dashboard</h1>
            </div>
            {children}
            
          </div>
        
        </div>
      </div>
    </div>
     

  );
};
<div className="sectiFon">
  <div className="sect-main">Dashboard</div>
</div>;
export default Layout;