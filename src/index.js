import React from 'react';
import  {BrowserRouter, Routes, Route} from "react-router-dom"
import {createRoot} from 'react-dom/client';
import App from './App';


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter> 
   </React.StrictMode>
);

export default App;

