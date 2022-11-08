// import './globa.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  

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
      const response = await axios.get("https://serene-journey-13143.herokuapp.com/apis/Donor/");
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
return (
  
    <div className="app">
 <div className='head'>
 <h1>Recent Donors</h1>
 

  </div>

<div className='tab'>
 <table id="Bloodrequest">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone_number</th>
          <th>Blood_type</th>
          <th>Age</th>
          <th>Last_time_donated</th>
         
 
        </tr>
         {request.map(item => {
          return (
            <tr>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone_number}</td>
              <td>{item.blood_type}</td>
              <td>{item.age}</td>
              <td>{item.last_time_donated}</td>

            </tr>
          )
        })}
      </table>
      </div>
    </div>
  );
}
export default App;















