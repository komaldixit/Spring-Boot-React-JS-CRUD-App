import React, { useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
export default function AddUser() {
  const addStyle = { textAlign:'left'};

  let navigate = useNavigate()
  const [user,setUser] =useState(
    {
      name:"",
      username:"",
      email:""
    })
    const {name,username,email}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
    const onSubmitInfo= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/");

    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='"text-center m-4'>Register User</h2>
                <form onSubmit={(e)=>onSubmitInfo(e)}>
                <div className='mb-3'>
                    <label style={addStyle} htmlFor='Name' className='form-label'>Name</label>
                    <input type={"text"} className='form-control'placeholder='Enter Name' name="name" onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label style={addStyle} htmlFor='Username' className='form-label'>Username</label>
                    <input type={"text"} className='form-control'placeholder='Enter Username' name="username" onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label style={addStyle} htmlFor='Email' className='form-label'>E-mail</label>
                    <input type={"text"} className='form-control'placeholder='Enter E-mail' name="email" onChange={(e)=>onInputChange(e)}/>
                </div>
               <button className='btn btn-outline-primary' type='submit'>Submit</button>
               <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
               </form>
            </div>
           
        </div>
        
    </div>
  )
}
