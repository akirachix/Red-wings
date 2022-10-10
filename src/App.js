// import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
         <Form/>
      {/* <Form/> */}
      <Router>
     

      <Routes>
     <Route exact path ='/Form' element={<Form/>} components={<Form/>} />
     <Route exact path='/Sidebar' element={<Sidebar/>} components={<Sidebar/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
