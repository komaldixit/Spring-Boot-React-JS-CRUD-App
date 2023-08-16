import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';
export default function Edituser() {
  const addStyle = { textAlign:'left'};

  let navigate = useNavigate()

  const {id} = useParams()
  const [user,setUsers] =useState(
    {
      name:"",
      username:"",
      email:""
    })
    const {name,username,email}=user
    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value})

    }

    const onSubmitInfo= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/");

    }
    useEffect(()=>{ 
        loadUsers();
    },[]);
    const loadUsers=async()=>{
      const result= await axios.get(`http://localhost:8080/user/${id}`);
      setUsers(result.data);
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='"text-center m-4'>Edit User</h2>
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
