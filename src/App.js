import  { Form, Route, Routes} from "react-router-dom";
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import Profile from './Profile/profile';
import Request from './Request/request';
// import  Form  from './Form/form';
// import RightSide from "./components/RigtSide/RightSide";



function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        {/* <MainDash/> */}
        {/* <RightSide/> */}
        

        <Routes>
        <Route path="/request" element={<Request/>}/>
        {/* <Route path="/form" element={<Form/>}/> */}

          <Route path="/profile" element={<Profile />}/>
          <Route path="/" element={  <MainDash />}/>
         
      
          </Routes> 
      </div>
    </div>
  );
}

export default App;
