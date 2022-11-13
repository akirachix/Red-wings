import React from "react";
import Cards from "./Cards/Cards";
import RightSide from "../RightSide/RightSide";
import Table from "../Table/Table";
// import Header from "../Layout/Header";
import "./profile/Maindash.css"

const MainDash = () => {
  // <h3>Dashboard</h3>

  return (
    <div className="MainDash">
     
      <div className="h-icons">
     
      {/* <Header/> */}
      </div>
    <h2>Dashboard</h2>
      <Cards />
      <h2>Recent Blood Donors</h2>
      <Table />
      <RightSide/>
      


    </div>

  );
};

export default MainDash;
