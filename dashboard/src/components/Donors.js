import "./Donors.css";
// import { useState } from "react";
import Papa from "papaparse";
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function App() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);
// creating a search bar

  const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    fetch('http://127.0.0.1:8000/apis/Donor/').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].employee_name)
      }
      setMyOptions(myOptions)
    })
  }

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  return (

    <div className="tables" >
      <div className="fileupload">  
         
      <table>
        
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* creating a search bar */}
      <div className="searchbox">
      <div style={{ marginLeft: '40%', marginTop: '60px'}}>
      <h2>BloodDonors</h2>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Donor's Blood Type"
          />
        )}
      />
    </div>
    </div>
   
      
      </div>
      <div className="input"  >
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      </div>
    </div>
  );
}

export default App;