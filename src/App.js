import  { Route, Routes} from "react-router-dom";
import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Profile from './Profile/profile';


function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        { <RightSide/> }
      </div>
    </div>
  );
}

export default App;
