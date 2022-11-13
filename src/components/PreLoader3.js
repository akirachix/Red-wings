import React, { useEffect, useState } from "react";
import "./PreLoader3.css";
// import {Donor} from "./components/Pages/Donor.js";

function PreLoader3() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://serene-journey-13143.herokuapp.com/apis/Donor/")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
        <>
          {/* <h1>Am comming</h1> */}
          {/* <Donor/> */}
          
        </>
      )}
    </>
  );
}

export default PreLoader3;
