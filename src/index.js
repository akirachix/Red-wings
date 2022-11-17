import React from 'react';
import  {BrowserRouter, Routes, Route} from "react-router-dom"
import {createRoot} from 'react-dom/client';
// import { useForm } from 'react-hook-form';
import App from './App';


const root = createRoot(document.getElementById("root"));
root.render(
  
   <BrowserRouter><App /></BrowserRouter> 
  
);

