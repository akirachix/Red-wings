// import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Form/> */}

      <Router>
        <Routes>
     <Route exact path ='/' element={<Form/>} component={<Form/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
