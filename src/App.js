
import  { Route, Routes} from "react-router-dom";
import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from './components/Sidebar';
import Profile from './Profile/profile';
import Request from './Request/request';
import LoginForm from "./components/LoginForm/LoginForm";
// import Donors from './Donors/Donors';


function App() {
  return (
    <div className="App">
       <div className="AppGlass">
        <Sidebar/> 
        {/* <MainDash/>   */}
        {/* <RightSide/> */}
        <Routes>
        <Route path="/request" element={<Request/>}/>
        <Route path="/loginform" element={<LoginForm/>}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/" element={  <MainDash />}/>
          </Routes>
       </div>  
      </div>
  );
}
export default App;






