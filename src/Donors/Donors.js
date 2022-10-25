import "./Donors.css";
import * as XLSX from 'xlsx'
import { Data } from "../Data/Data";
import { useState } from "react";
import { FaUserCircle, FaRegSun, FaRegBell } from "react-icons/fa";
import Header from "../components/Layout/Header/Header";


export const Donors = ({ files, setFiles, removeFile }) => {
  
  


  <h2>{Header}</h2>

  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  const [excelData, setExcelData] = useState(null);
  
  // const fileType = ['application/vnd.ms-excel'];
  // const handleFile = (e) => {
  //   let selectedFile = e.target.files[0];
  //   if (selectedFile) {
      
  //     if (selectedFile && fileType.includes(selectedFile.type)) {
  //       let reader = new FileReader();
  //       reader.readAsArrayBuffer(selectedFile);
  //       reader.onload = (e) => {
  //         setExcelFileError(null);
  //         setExcelFile(e.target.result);
  //       }
  //     }
  //     else {
  //       setExcelFileError('Please select only excel file types');
  //       setExcelFile(null);
  //     }
  //   }
  //   else {
  //     console.log('please select your file');
  //   }
  // }
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (excelFile !== null) {
  //     const workbook = XLSX.read(excelFile, { type: 'buffer' });
  //     const worksheetName = workbook.SheetNames[0];
  //     const worksheet = workbook.Sheets[worksheetName];
  //     const data = XLSX.utils.sheet_to_json(worksheet);
  //     setExcelData(data);
  //   }
  //   else {
  //     setExcelData(null);
  //   }
  // }
  // const [searchInput, setSearchInput] = useState("");
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };
  // if (searchInput.length > 0) {
  //   donor.filter((donor) => {
  //     return donor.name.match(searchInput);
  //   });
  // }
  // const donor = [
  //   { Name: "Joyce", Gender: "Female", Location: "Loitoktok", Blood_group: "O+", Age: 31, last_time_donated: "12/10/2022", Contact: "079782810" },
  //   { Name: "Lucy", Gender: "Female", Location: "Nanyuki", Blood_group: "AB", Age: 32, last_time_donated: "12/10/2022", Contact: "0756828619" },
  //   { Name: "Speria", Gender: "Female", Location: "Mathare", Blood_group: "A+", Age: 33, last_time_donated: "12/10/2022", Contact: "0723828623" },
  //   { Name: "Charity", Gender: "Female", Location: "Ngong", Blood_group: "B", Age: 32, last_time_donated: "12/10/2022", Contact: "0712345678" },
  //   { Name: "Gumato", Gender: "Female", Location: "Marsabit", Blood_group: "A-", Age: 34, last_time_donated: "12/10/2022", Contact: "0787263547" },
  //   { Name: "Linda", Gender: "Female", Location: "Karen", Blood_group: "O-", Age: 35, last_time_donated: "12/10/2022", Contact: "0781635241" },
  //   { Name: "Marie", Gender: "Female", Location: "Kibera", Blood_group: "B-", Age: 33, last_time_donated: "12/10/2022", Contact: "0781635241" },
  //   { Name: "Effence", Gender: "Female", Location: "Illasit", Blood_group: "AB-", Age: 32, last_time_donated: "12/10/2022", Contact: "0781635241" },
  //   { Name: "Akuot", Gender: "Female", Location: "Kakuma", Blood_group: "O-", Age: 35, last_time_donated: "12/10/2022", Contact: "0781635241", },
  //   { Name: "Grace", Gender: "Female", Location: "Mlimani", Blood_group: "A-", Age: 31, last_time_donated: "12/10/2022", Contact: "0781635241", },
  //   { Name: "Queenter", Gender: "Female", Location: "Siaya", Blood_group: "AB", Age: 32, last_time_donated: "12/10/2022", Contact: "0781635241" },
  //   { Name: "Cudra", Gender: "Female", Location: "Utawala", Blood_group: "O+", Age: 35, last_time_donated: "12/10/2022", Contact: "0781635241" },
  //   { Name: "Nancy", Gender: "Female", Location: "Bondo", Blood_group: "O-", Age: 33, last_time_donated: "12/10/2022", Contact: "0781635241" },
  //   { Name: "Pascaline", Gender: "Female", Location: "Embakasi", Blood_group: "B-", Age: 35, last_time_donated: "12/10/2022", Contact: "0781635241" },
  // ]
  return (
    
    <div className="donors">
      <div className="header-icons ">
      <Header />

      </div>

     
      {/* {<table>
        {donor.map((donor, index) => {
          <div>

            <tr>
              <td>{donor.name}</td>
              <td>{donor.gender}</td>
              <td>{donor.blood_group}</td>
              <td>{donor.age}</td>
              <td>{donor.location}</td>
              <td>{donor.date_last_donated}</td>
              <td>{donor.contacts}</td>
            </tr>
          </div>
        }
        )}
      </table>} */}
      <h1>Donors</h1>

      {/* <table id="Donors">
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Gender</th>
          <th>Blood group</th>
          <th>Age</th>
          <th>Last time donated</th>
          <th>Contact</th>
        </tr>
        {donor.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Name}</td>
              <td>{val.Gender}</td>
              <td>{val.Location}</td>
              <td>{val.Blood_group}</td>
              <td>{val.Age}</td>
              <td>{val.last_time_donated}</td>
              <td>{val.Contact}</td>

            </tr>
          )
        })}
      </table> */}
      {/* <div className="container">
        <div className='form'>
          <form className='form-group' autoComplete="off"
            onSubmit={handleSubmit}>
            <label><h5>Upload CSV file</h5></label>
            <br></br>
            <input type='file' className='form-control'
              onChange={handleFile} required></input>
            {excelFileError && <div className='text-danger'
              style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
            <button type='submit' className='btn btn-success'
              style={{ marginTop: 5 + 'px' }}>Submit</button>
          </form>
        </div>
        <br></br>
        <hr></hr>
        <h5>View Excel file</h5>
        <div className='viewer'>
          {excelData === null && <>No file selected</>}
          {excelData !== null && (
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Gender</th>
                    <th scope='col'>Location</th>
                    <th scope='col'>Blood_group</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>last_time_donated</th>
                    <th scope='col'>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <Data excelData={excelData} />
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div> */}
      {/* ); */}
    </div>
  );
};
export default Donors;