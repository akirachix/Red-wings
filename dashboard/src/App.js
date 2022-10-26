import './App.css';
import  { Route, Routes} from "react-router-dom";
import Donors from './components/Donors';
import Request from './components/Request';
import Layout from "./Layout/Layout"
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import MainDash from './components/MainDash';

function App() {
  return (
    <div className="App">
     <div className="AppGlass">
       <Header/>
       <Footer/>
       <Sidebar/>
        <Routes>
          <Route path="/request" element={<Request/>}/>
          <Route path="/donors" element={<Donors/>}/>
          {/* <Route path="/" element={<Maindash/>}/> */}
          </Routes> 
          

      </div>
    </div>
  );
}

export default App;
