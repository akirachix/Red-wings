import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

import '../global.css'
import RightSide from "../components/RightSide/RightSide";



const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Sidebar />
            <Footer />
            {children}
        </div>
    );
};
export default Layout;