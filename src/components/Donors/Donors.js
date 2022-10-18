
import "./Donors.css";
import { useState } from "react";
export const Donors = ({ files, setFiles, removeFile }) => {
  const [searchInput, setSearchInput] = useState("");
  const donors = [
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
    { profile: "", name: "Europe", gender: "", blood_group: "", age: 33, location: "Karen", date_last_donated: "13/10/2020", contacts: "0797916750" },
  ];
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    donors.filter((donor) => {
      return donor.name.match(searchInput);
    });
  }
  const data = [
    { profile: "", Name: "Joyce", Gender: "Female", Location: "Loitoktok", Blood_group: "O+", Age: 31,last_time_donated:"12/10/2022", Contact: "079782810" },
    { profile: "", Name: "Lucy", Gender: "Female", Location: "Nanyuki", Blood_group: "AB", Age: 32,last_time_donated:"12/10/2022", Contact: "0756828619" },
    { profile: "", Name: "Speria", Gender: "Female", Location: "Mathare", Blood_group: "A+", Age: 33,last_time_donated:"12/10/2022", Contact: "0723828623" },
    { profile: "", Name: "Charity", Gender: "Female", Location: "Ngong", Blood_group: "B", Age: 32,last_time_donated:"12/10/2022", Contact: "0712345678"  },
    { profile: "", Name: "Gumato", Gender: "Female", Location: "Marsabit", Blood_group: "A-", Age:34,last_time_donated:"12/10/2022", Contact: "0787263547"  },
    { profile: "", Name: "Linda", Gender: "Female", Location: "Karen", Blood_group: "O-", Age: 35,last_time_donated:"12/10/2022", Contact: "0781635241"  },
    { profile: "", Name: "Marie", Gender: "Female", Location: "Kibera", Blood_group: "B-", Age:33,last_time_donated:"12/10/2022", Contact: "0781635241" },
    { profile: "", Name: "Effence", Gender: "Female", Location: "Illasit", Blood_group: "AB-",Age: 32,last_time_donated:"12/10/2022", Contact: "0781635241" },
    { profile: "", Name: "Akuot", Gender: "Female", Location: "Kakuma", Blood_group: "O-", Age:35,last_time_donated:"12/10/2022",last_time_donated:"12/10/2022", Contact: "0781635241", },
    { profile: "", Name: "Grace", Gender: "Female", Location: "Mlimani", Blood_group: "A-",Age: 31,last_time_donated:"12/10/2022", Contact: "0781635241", },
    { profile: "", Name: "Queenter", Gender: "Female", Location: "Siaya", Blood_group: "AB", Age: 32, last_time_donated:"12/10/2022",Contact: "0781635241" },
    { profile: "", Name: "Cudra", Gender: "Female", Location: "Utawala", Blood_group: "O+",Age: 35,last_time_donated:"12/10/2022", Contact: "0781635241"},
    { profile: "", Name: "Nancy", Gender: "Female", Location: "Bondo", Blood_group: "O-", Age: 33,last_time_donated:"12/10/2022", Contact: "0781635241" },
    { profile: "", Name: "Pascaline", Gender: "Female", Location: "Embakasi", Blood_group: "B-", Age: 35,last_time_donated:"12/10/2022", Contact: "0781635241" },
  ]
  return (
    <div className="donors">
       <div className="head">
               <img src="/imgs/noti.png"className="noti " alt=""  />
               <div className="two">
               <img src="/imgs/settings.png"className="set" alt=""/>
               </div>
               <div className="prof">
               <img src="/imgs/profile.png"className="pro" alt=" http://localhost:3006/profile"/>
               </div>
           <h2>Donors</h2>
           {/* <p>Admin Profile</p> */}
       </div>
       <img src="/images/wana.png"className="wana" alt=""/>
       <div className="about">
           Wanadamu<br/> admin@redwing
       </div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />
    
      <table id="Bloodrequest">
        <tr>
          <th>Profile</th>
          <th> Name</th>
          <th>Location</th>
          <th>Gender</th>
          <th>Blood group</th>
          <th>Age</th>
          <th>Last time donated</th>
          <th>Contact</th>
          {/* <th>Action</th> */}
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.profile}</td>
              <td>{val.Name}</td>
              <td>{val.Gender}</td>
              <td>{val.Location}</td>
              <td>{val.Blood_group}</td>
              <td>{val.Age}</td>
              <td>{val.last_time_donated}</td>
              <td>{val.Contact}</td>
              {/* <td>{val.Action}</td> */}
            </tr>
          )
        })}
      </table>
      {/* <div className="title">Upload file</div>
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} /> */}
    </div>
  );
};
export default Donors;