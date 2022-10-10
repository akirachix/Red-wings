// import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
       {/* <Sidebar/> */}
      <Router>
        <Routes>
     <Route exact path ='/' element={<Form/>} component={<Form/>} />
     <Route exact path ='/sidebar' element={<Sidebar/>} component={<Sidebar/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
