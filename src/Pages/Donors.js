import "./Donors.css";
import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import  { useEffect, useState } from 'react';
import axios from 'axios';
export const Donors = ({ files, setFiles, removeFile }) => {
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState();
        const [donors, setDonors] = useState([]);
        useEffect(()=>{
          postDonors()
        },[]);
        const postDonors = async () => {
          setIsLoading(true);
          try {
            const response = await axios.get("https://serene-journey-13143.herokuapp.com/apis/Donor/");
            setDonors(response.data)
            console.log(response.data)
            if (response.status !== 200) {
              throw new Error(`Something went wrong!: ${response.status}`);
            }
            const data = await response.data.json();
            if (data) setDonors(data);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
        const [myOptions, setMyOptions] = useState([])
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
    fetch('https://serene-journey-13143.herokuapp.com/apis/Donor/').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].employee_name)
      }
      setMyOptions(myOptions)
    })
  }
    return (
      <div className="searchbar">
      <div id="searchbar" style={{ marginLeft: '7%', marginTop: '50px' }}>
      <h2>BloodDonors</h2>
      <Autocomplete
        style={{ width: 450 , height: 71}}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
      </div>
        <div className="donor">
            <div className="head">
            <div className="donors">
      <table id="Donors">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Age</th>
          <th>Blood type</th>
          <th>Last time donated</th>
        </tr>
        {donors.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>{val.address}</td>
              <td>{val.email}</td>
              <td>{val.phone_number}</td>
              <td>{val.age}</td>
              <td>{val.blood_type}</td>
              <td>{val.last_time_donated}</td>
            </tr>
          )
        })}
      </table>
      </div>
      </div>
            </div>
            </div>
    );
}
export default Donors;