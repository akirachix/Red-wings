import React from "react";
import Cards from "./Cards/Cards";
import Table from "../Table/Table";
import "./profile/Maindash.css";
import RightSide from "./RightSide/RightSide";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h2>Dashboard</h2>

      <Cards />   

      <h2>Recent Blood Donors</h2>
      <Table />

      <h2>Track donors location</h2>

  <RightSide/>
  
    </div>
  );
};

export default MainDash;
