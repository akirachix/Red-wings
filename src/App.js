import  { Route, Routes} from "react-router-dom";
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Layout/Sidebar';
import Request from './Request/request';
import Donors from './Donors/Donors';
import Footer from "./components/Footer/Footer";





function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
       
    
        <Routes>
          <Route path="/" element={  <MainDash />}/>
          <Route path="/request" element={<Request/>}/>
          <Route path="/donors" element={<Donors/>}/>
          {/* <Route path="/loginform" element={<LoginForm />}/> */}
          </Routes> 
          <Footer/>
          

      </div>
    </div>
  );
}

export default App;


