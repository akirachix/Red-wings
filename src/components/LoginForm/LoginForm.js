// import React, {useEffect, useState} from "react";
// import './LoginForm.css';
// import pic from './wanadamu.png';
// import axios from "axios";
// // import Logo from './logo.png';
// const LoginForm = () => {
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const [errMessage, setError]= useState('')
//   const NewUser={
//     email:"",
//     password:""
//   }
//   const postdata = () =>{
//     NewUser.email=email
//     NewUser.password=password
//     console.log(NewUser)
//     axios.post('https://glacial-badlands-90755.herokuapp.com/api/NewUser/',NewUser)
//     .then(response =>{
//       console.log(response)
//     })
//     .catch(error =>{
//       console.log(error)
//     })
//   }
//   const handleSubmit = ()=>{
//     const data = {
//      email: email,
//      password:password
//     }
//     console.log({email,password});
//     (JSON.stringify(data))
//   }
//   useEffect(()=>{
//       setError('');
//   }, [email,password] );
//   return (
//  <>
//     <div>
//       <section>
//       <p className={errMessage? "errMessage":"offscreen"} aria-live="assertive" >{errMessage} </p> </section>
//     <div className="Login"  >
//       <form className="Form" onSubmit={handleSubmit} >
//          <label htmlFor="Email">Email</label> <br></br> <br></br>
//          <input type="text" value={email} name="email" id="email" required placeholder=""   onChange={(e)=>
//           {setEmail(e.target.value)}}></input> <br></br>
//          <label htmlFor="Password">Password</label> <br></br> <br></br>
//          <input type="password" name="password" value={password} id="password"
//          required placeholder="" onChange={(e)=>
//           {setPassword(e.target.value)}} ></input> <br></br> <br></br>
//           <button type="button" onClick={postdata} onSubmit={handleSubmit}>Login</button>
//       </form>
//       <div className="Logo">
//       <img src={pic} className='wanadamu.png' alt=''/>
//       </div>
// </div>
// </div>
// </>
//   );
// }
// export default LoginForm;