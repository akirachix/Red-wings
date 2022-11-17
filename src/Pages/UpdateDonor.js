import React, {useState}from 'react'
import "./UpdateDonor.css"
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Form() {
    const{formState:{errors}, reset}=useForm()
    const onSubmit=data=> console.log(data);
    
    const [user,setUser] = useState({
        first_name:"",
        last_name:"",
        address: "",
        email: "",
        Phone_number: "",
        age: "",
        blood_type: "",
        last_time_donated:""
    })
    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user,
        [name]:value
        })
        console.log(user)
        }
const Donor =() => {
        const{first_name,last_name,address,email,phone_number,age,blood_type,last_time_donated} = user
      if (first_name && last_name && address && email && phone_number&& age && blood_type&& last_time_donated){
          axios.post("https://serene-journey-13143.herokuapp.com/apis/Donor/", user)
          .then(res=>{
            console.log(res)
            reset()
          }
          )}
          else{
            alert("Invalid input.. please try again")
          }
      };
  return (
   <section>
        <form className='form' >
            <h2>Update Donor Information</h2>
            <div id='child'>
                <label>Donor's first Name</label>
            </div>
            <input id='input2' type='text' name='first_name' placeholder=' Enter your first name' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'first name required'}</div>
            <div id='child'>
                <label>Last Name</label>
            </div>
            <input id='input2' type='text'name='last_name' placeholder='Enter your last name' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'last name required'}</div>
            <div id='child'>
                <label>Location</label>
            </div>
            <input id='input2' type='text'name='address' placeholder='Enter your address' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'address is required'}</div>
            <div id='child'>
                <label>Email</label>
            </div>
            <input id='input2' type='text'name='email' placeholder='In put your email' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'email required'}</div>
            <div id='children'>
                <label>Phone number</label>
            </div>
            <input id='input2' type='text' name='phone_number' placeholder='Phone number' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>
            <div id='child'>
                <label>Age</label>
            </div>
            <input id='input2' type='number'name='age' placeholder='Enter age' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'age required'}</div>
            <div id='child'>
                <label>Blood Type</label>
            </div>
            <input id='input2' type='text'name='blood_type' placeholder='Enter blood_type' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'blood_type required'}</div>
            <div id='date'>
                <label>Last Time Donated</label>
            </div>
            {/* <div className='last_time_donated'> */}
            <input type='date' id='input2' name='last_time_donated' onChange={handleChange} ></input>
            {/* </div> */}
            <div className='error'>{errors.password?.type==='required'&& 'last_time_donated required'}</div>
            <div className='btn'>
                <button type='button' onClick={Donor} id='button'>Update</button>
            </div>
        </form>
     </section>
  )
}