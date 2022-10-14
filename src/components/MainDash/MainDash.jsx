import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
// import RightSide from "../RigtSide/RightSide";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
      {/* <RightSide/> */}
    </div>
  );
};

export default MainDash;
