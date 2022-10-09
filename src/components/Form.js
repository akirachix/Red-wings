import React, {useState} from "react";
import './Form.css';
import logoo from '../logoo.png';
import man from '../man.png';
import pass from '../pass.png';
import key from '../key.png';


import { BrowserRouter as Router, Link, Route, Routes , Navigate} from "react-router-dom";


const Form = () => {
  const [name , setName] = useState('');
  console.log(name);
  const [email,setEmail] = useState('');
  console.log(email)
  const [password,setPassword] = useState('');
  console.log(password)
  const [success, setSuccess]= useState(false)


  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')
    setSuccess(true)
    Navigate('/Sidebar')
        // const data = {
        //   name : name,
        //   password: password
        // }
      
        // alert(JSON.stringify(data))
  };
  
  return (
    <>
    {success ? (
      <section>
        <Navigate exact to ='/Sidebar'>Form</Navigate>

      </section>
    ):(
    <div>
    
    <div className="Login"  >
      <form className="Form" onSubmit={handleSubmit} >
         <label for="userName">UserName</label> <br></br>
         <input type="text" name="username" id="username" placeholder="      wanadamu" required  onChange={(e)=>
          {setName(e.target.value)}}></input> <br></br>
  
         <label for="Password">Password</label> <br></br>
         <input type="password" name="password" id="password" placeholder="    ..........." required onChange={(e)=>
          {setPassword(e.target.value)}} ></input> <br></br> <br></br>

<button className="login">Login</button>
      </form>


 <div className="logo">
      <img src={logoo} className='Image' alt='logoo'/> 
      </div>
      
      <div
       className="perso">
      <img src={man} className='Image' alt='man' style={{height:"50px"}}/> 
</div>
<div className="password">
      <img src={pass} className='Images' alt='pass' style={{height:"30px"}}/> 
</div>
<div className="keys">
      <img src={key} className='Images' alt='key' style={{height:"25px"}}/> 
</div>

</div>


</div>


)}
</>
  );

}
export default Form;

  

