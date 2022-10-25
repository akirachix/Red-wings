// import React from "react";

import "./Donors.css";
import * as XLSX from 'xlsx'


import React, { useEffect, useState } from 'react';
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
        const [excelFile, setExcelFile] = useState(null);
        const [excelFileError, setExcelFileError] = useState(null);
        const [excelData, setExcelData] = useState(null);
        const fileType = ['application/vnd.ms-excel'];
        const handleFile = (e) => {
          let selectedFile = e.target.files[0];
          if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
              let reader = new FileReader();
              reader.readAsArrayBuffer(selectedFile);
              reader.onload = (e) => {
                setExcelFileError(null);
                setExcelFile(e.target.result);
              }
            }
            else {
              setExcelFileError('Please select only excel file types');
              setExcelFile(null);
            }
          }
          else {
            console.log('please select your file');
          }
        }
        const handleSubmit = (e) => {
          e.preventDefault();
          if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
          }
          else {
            setExcelData(null);
          }
        }
        const [searchInput, setSearchInput] = useState("");
        const handleChange = (e) => {
          e.preventDefault();
          setSearchInput(e.target.value);
        };




    return (
        <div className="donor">
            <div className="head">
            <div className="donors">
     {/* <h2>Donors</h2> */}
   
      {/* <h1>Donors</h1> */}
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
      <div className="container">
        <div className='form'>
          <form className='form-group' autoComplete="off"
            onSubmit={handleSubmit}>
            <br></br>
             <hr></hr>
            {/* <label><h5>Upload CSV file</h5></label> */}
            <br></br>
            <input type='file' className='form-control'
              onChange={handleFile} required></input>
            {excelFileError && <div className='text-danger'
              style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
            <button type='submit' className='btn btn-success'
              style={{ marginTop: 5 + 'px' }}>Submit</button>
          </form>
        </div>
        <h5>View Excel file</h5>
        </div>
      </div>


             


            </div>


        </div>
    );
}
export default Donors;
