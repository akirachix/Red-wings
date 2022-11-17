





// import React, {useState}from 'react'
// import "./Adddononor.css"
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// export default function Form() {
//     // const { register, handleSubmit, formState: { errors }, reset } = useForm({
//     //     resolver: yupResolver(formSchema),
//     //   });
//     const{formState:{errors}, reset}=useForm()
//     const onSubmit=data=> console.log(data);
//     // const [passwordShown] = useState(false);
//     // const togglePassword = () => {
//     //     setPasswordShown(!passwordShown);
//     // }
//     const [user,setUser] = useState({
//         first_name:"",
//         last_name:"",
//         address: "",
//         email:"",
//         Phone_number:"",
//         age:"",
//         blood_type:"",
//         last_time_donated:""


//     })
//     const handleChange = e =>{
//         const {name,value} = e.target
//         setUser({
//         ...user,
//         [name]:value
//         })
//         console.log(user)
//         }
// const addUsers =() => {
//         const{first_name,last_name,address,email,Phone_number,age,blood_type, last_time_donated} = user
//       if (first_name && last_name && address&&email&&Phone_number&&age&&blood_type&& last_time_donated){
//           axios.post("https://serene-journey-13143.herokuapp.com/apis/Donor/",user)
//           .then(res=>{
//             console.log(res)
//             reset()
//           }
//           )}
//           else{
//             alert("Invalid input")
//           }
//       };
//   return (
//    <section>
//     <div className='container'>
//         <form className='form' >
//             <h2>Add Donor</h2>
//             <div id='name'>
//                 <label>Donors first Name</label>
//             </div>
//             <input id='input' type='text' name='first_name' placeholder='First Name'
//             onChange={handleChange}/>
//             <div className='error'>{errors.password?.type==='required'&& 'First Name required'}</div>
//             <div id='child'>
//                 <label>Last Name</label>
//             </div>
//             <input id='input' type='text'name='last_name' placeholder='Last Name' onChange={handleChange}/>
//             <div className='error'>{errors.password?.type==='required'&& 'Last Name required'}</div>
//             <div id='dates'>
//                 <label>Address</label>
//             </div>

//             <div className='date_of_birth'>
//                 <input type='date' id='dt' name='appointment_date' onChange={handleChange}cd ></input>
//             </div>
//             <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>
//             <div id='children'>
//                 <label> phone number</label>
//             </div>
//             <input id='input' type='text' name='Phone_number' placeholder='Phone number' onChange={handleChange}/>
//             <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>
//             <div className='btn'>
//                 <button type='button' onClick={addUsers} id='button'> Save</button>
//             </div>
//         </form>
//     </div>
//      </section>
//   )
// }