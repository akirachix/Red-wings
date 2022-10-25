import React from "react";
import Cards from "../Cards/Cards";
import RightSide from "../RightSide/RightSide";
import Table from "../Table/Table";
import Header from "../Layout/Header/Header";
import "./MainDash.css";

const MainDash = ({children}) => {
  <h3>Dashboard</h3>

  return (
    <div className="MainDash">
     
      <div className="h-icons">
     
      <Header/>
      </div>
    <h1>Dashboard</h1>
      <Cards />
      <Table />
      <RightSide/>
      {/* <Footer/> */}



      
    </div>

  );
};

export default MainDash;
