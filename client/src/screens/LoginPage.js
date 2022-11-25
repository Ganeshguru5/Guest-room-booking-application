import React,{useState} from 'react'
import "../styles/Login.css"
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

export default function LoginPage() {

  const navigate = useNavigate()
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const handleSubmit= async(event)=>{
  event.preventDefault();
  const response = await axios.post('http://localhost:8080/api/userlogin/',{
    email:email,
    password:password,
  })
  console.log(response.status)
  if(response.status === 200){
    localStorage.setItem("Gapptoken",response.data.Gapptoken)
    navigate('/Homepage')
    
  }
 
  
 }

  return (
    <div className='LoginContainer'>
      <div className='onehalf'>
      <form onSubmit={handleSubmit}>
        <p className='LoginHeader'>Login</p>
        <p className='LoginHeader'>Welcome Back !</p>
        <p className='desc'>Reach the great rooms in your area!!!</p>
        <p className='inputHead'>Email*</p>
        <input 
          placeholder='mail@website.com' 
          className='input'
          name="email"
          value={email}
          onChange={(event)=>{setEmail(event.target.value)}}
          />
        <p className='inputHead'>Password*</p>
        <input 
          placeholder='Min 8 character' 
          type='password' 
          className='input'
          name="password"
          value={password}
          onChange={(event)=>{setPassword(event.target.value)}}
          />
        <p className='Forgot'>Forgot password</p>
        <button type='submit' className='Loginbtn' >Login</button>
      </form>

      <p style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Or</p>
       <Link to='/Register'> <button type='submit' className='Loginbtn' >Register</button></Link>
        <Link to='/OwnerRegister'><p className='Forgot'>Click here to become a renter and rent your rooms or house</p></Link>
      </div>
    </div>
  )
}
