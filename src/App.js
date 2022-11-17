import './global.css';
import  { Route, Routes} from "react-router-dom";
import Donors from './Pages/Donors';
import Request from './Pages/Request';
import Layout from "./Layout/Layout"
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Maindash from './components/MainDash';
import {Table } from '@mui/material';
import RightSide from './components/RightSide/RightSide';
import Profile from './components/profile/Profile';

import UpdateDonor from './Pages/UpdateDonor';

// import {Adddonor} from './Pages/Adddonor';
// import { useForm } from 'react-hook-form';


function App() {
  return (
    <div className="App">
     <div className="AppGlass">
       <Layout/>
     

        <Routes>
          <Route path="/request" element={<Request/>}/>
          <Route path="/donors" element={<Donors/>}/>
          <Route path="/updatedonor" element={<UpdateDonor/>}/>
          {/* <Route path="/Adddonor" element={<Adddonor/>}/> */}
          <Route path="/" element={<Maindash/>}/> 

           </Routes>
         
      </div>
    </div>
  );
}
export default App;



