import './global.css';
import  { Route, Routes} from "react-router-dom";
import Donors from './Pages/Donors';
import Request from './Pages/Request';
import Layout from "./Layout/Layout"
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Maindash from './components/MainDash';
import { Table } from '@mui/material';
import RightSide from './RightSide/RightSide';
import Profile from './components/profile/Profile';
import SpecificRequest from './Pages/SpecificRequest';
import PreLoader3 from './components/PreLoader3';

function App() {
  return (
    <div className="App">
     <div className="AppGlass">
    
       <Layout/>
       <PreLoader3/>
    
        <Routes>
          <Route path="/request" element={<Request/>}/>
          <Route path="/request/:id" element={<SpecificRequest/>}/>
          <Route path="/donors" element={<Donors/>}/>
          <Route path="/" element={<Maindash/>}/> 
           </Routes>
      </div>
    </div>
  );
}
export default App;



