import React, {useEffect, useState} from "react";
import './Form.css';
import logoo from './logoo.png';
import man from './man.png';
import pass from './pass.png';
import key from './key.png';

const Form = () => {
  

  const [name , setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errMessage, setError]= useState('')

  const handleSubmit = (e) => {
      e.preventDefault();
        setEmail('')
        setName('')
        setPassword('')
        console.log(email,password)
  };
  useEffect(()=>{
      setError('');

  }, [email,password] );
  
  return (
 <>
  
    <div>
           <section>
            <p className={errMessage? "errMessage":"offscreen"} aria-live="assertive" > 
           {errMessage}
            </p>
            </section>
    
    <div className="Login"  >
      <form className="Form" onSubmit={handleSubmit} >
         <label for="userName">UserName</label> <br></br>
         <input type="text" name="username" id="username"
            required
          placeholder="           wanadamu"   onChange={(e)=>
          {setName(e.target.value)}}></input> <br></br>
      
         <label for="Password">Password</label> <br></br>
         <input type="password" name="password" id="password" 
         required
         placeholder="          ..........." onChange={(e)=>
          {setPassword(e.target.value)}} ></input> <br></br> <br></br>


         
     
<button type="submit" name="login">Login</button>
      </form>
 <div className="logo">
      <img src={logoo} className='Image' alt='logoo'/> 
      
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
</div>
</>
  );

}
export default Form;