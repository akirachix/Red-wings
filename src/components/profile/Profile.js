// import React from 'react'
import './Profile.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setPhonenumber] = useState("");
  const [Address, setAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
<div className='main-container'>
    <form onSubmit={handleSubmit}>
        <div className=''>
         <input
         placeholder='Enter your Name'
         className='container'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
      <div className=''>
         <input
         placeholder='Enter email'
         className='container'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className=''>
         <input
         placeholder='Enter your phone number'
         className='container'
          type="text"
          value={PhoneNumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </div>
<div className=''>
         <input
         placeholder='Enter Address'
         className='container'
          type="text"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
        </div>
        <button type="button" onSubmit={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}
export default Profile;