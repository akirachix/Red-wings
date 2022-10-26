import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import '../Styles.css';
// import "./MainDash";


const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Sidebar />
            <Footer />
            {/* <MainDash/> */}
            

            {children}

        </div>

    );


};
export default Layout;