// import React from "react";
import './Request.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Request = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [request, setRequest] = useState([]);
  useEffect(()=>{
    getRequest()
    console.log(request)
  },[]);
  const getRequest = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://serene-journey-13143.herokuapp.com/apis/Request/",);
      setRequest(response.data)
      console.log(response.data)
      if (response.status !== 200) {
        throw new Error(`Something went wrong!: ${response.status}`);
      }
      const data = await response.data.json();
      if (data) setRequest(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };



    return(
        <div className="donor">
        <div className="head">
            <h2>Request</h2>
            <div className="app">
       <h1>Bloodrequests</h1>
 <div className='head'>
        </div>
 <table id="Bloodrequest">
        <tr>
          <th>First Name</th>
          <th>Location</th>
          <th>Blood group</th>
          <th>Number of pints</th>
          <th>Phone Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Action</th>
        </tr>
         {request.map(item => {
          return (
            <tr>
              <td>{item.first_name}</td>
              <td>{item.location}</td>
              <td>{item.blood_type}</td>
              <td>{item.number_of_prints}</td>
              <td>{item.phone_number}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.action}</td>
            </tr>
          )
        })}
      </table>
    </div>

    </div>


    </div>
    );
}
export default Request;