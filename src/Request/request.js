import './request.css';
// import React from 'react';


  

const data = [
  { First_Name: "Joyce",     Location: "Loitoktok",  Blood_group: "O+",    Number_of_pints:1,        Contact:"079782810",      Action:"pending"},
  { First_Name: "Lucy",      Location: "Nanyuki",    Blood_group: "AB",    Number_of_pints:2,        Contact:"0756828619",     Action:"pending"},
  { First_Name: "Speria",    Location: "Mathare",   Blood_group: "A+",    Number_of_pints:3,        Contact:"0723828623",     Action:"pending"},
  { First_Name: "Charity",   Location: "Ngong",    Blood_group: "B",     Number_of_pints:2,        Contact:"0712345678",     Action:"pending"},
  { First_Name: "Gumato",    Location: "Marsabit", Blood_group: "A-",    Number_of_pints:4,        Contact:"0787263547",     Action:"pending"},
  { First_Name: "Linda",     Location: "Karen",  Blood_group: "O-",    Number_of_pints:5,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Marie",     Location: "Kibera", Blood_group: "B-",    Number_of_pints:3,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Effence",   Location: "Illasit",Blood_group: "AB-",   Number_of_pints:2,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Akuot",     Location: "Kakuma", Blood_group: "O-",    Number_of_pints:5,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Grace",     Location: "Mlimani",Blood_group: "A-",    Number_of_pints:1,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Queenter",  Location: "Siaya",  Blood_group: "AB",    Number_of_pints:2,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Cudra",     Location: "Utawala",Blood_group: "O+",    Number_of_pints:5,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Nancy",     Location: "Bondo",  Blood_group: "O-",    Number_of_pints:3,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Pascaline", Location: "Embakasi",Blood_group: "B-",   Number_of_pints:5,        Contact:"0781635241",     Action:"pending"},
  { First_Name: "Shamim",    Location: "Webuye",  Blood_group: "A-",   Number_of_pints:4,        Contact:"0781635241",     Action:"pending"},


]
  
function App() {
  return (
    
<div className="App">

  <div className='head'>
  <h1>Bloodrequest</h1>
  </div>
   
      
      <table id="Bloodrequest">
      
         <tr>
        <th>First Name</th>
          <th>Location</th>
          <th>Blood group</th>
          <th>Number of pints</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.First_Name}</td>
              <td>{val.Location}</td>
              <td>{val.Blood_group}</td>
              <td>{val.Number_of_pints}</td>
              <td>{val.Contact}</td>
              <td>{val.Action}</td>
            </tr>
          )
        })}
       </table>
      
    </div>
    
  );
}
  
export default App;
