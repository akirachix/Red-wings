import React from "react";
import Cards from "./Cards/Cards";
import RightSide from "../RightSide/RightSide";
import Table from "../Table/Table";
import PreLoader3 from './components/PreLoader3';
// import Header from "../Layout/Header";


const MainDash = () => {
  <h3>Dashboard</h3>

  return (
    <div className="MainDash">
     
      <div className="h-icons">
     
      {/* <Header/> */}
      </div>
    {/* <h1>Dashboard</h1> */}
    <PreLoader3/>
      <Cards />
      <Table />
      <RightSide/>
    </div>

  );
};

export default MainDash;
