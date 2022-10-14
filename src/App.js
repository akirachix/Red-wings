import  { Route, Routes} from "react-router-dom";
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import Profile from './Profile/profile';
import RightSide from './components/RigtSide/RightSide';



function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        {/* <Profile/> */}

        <Routes>
          {/* <Route path="/profile" element={<Profile />}/> */}
          <Route path="/" element={  <MainDash />}/>
         
      
          </Routes> 
      </div>
    </div>
  );
}

export default App;
