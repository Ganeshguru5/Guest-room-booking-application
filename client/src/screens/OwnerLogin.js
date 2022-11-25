import React,{useState} from 'react'
import "../styles/Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function OwnerLogin() {
  
  const navigate = useNavigate()
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const handleSubmit= async(event)=>{
  console.log("submit pressed")
  event.preventDefault();
  const response = await axios.post('http://localhost:8080/api/Ownerlogin/',{
    email:email,
    password:password,
  })
  console.log(response.status)
  if(response.status === 200){
    localStorage.setItem("GappOwnertoken",response.data.GappOwnertoken)
    navigate('/OwnerHome')
    
  }
 
  
 }

  return (
    <div className='LoginContainer'>
      <div className='onehalf'>
      <form onSubmit={handleSubmit}>
        <p className='LoginHeader'>Login</p>
        <p className='LoginHeader'>Welcome Back Renter!</p>
        <p className='desc'>Rent your rooms and start your business again ....</p>
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
        
        <button type='submit' className='Loginbtn'>Login</button>
      </form>

      <p style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Or</p>
      <Link to='/OwnerRegister'>
        <button type='submit' className='Loginbtn' >Register as renter</button>
      </Link>
      </div>
    </div>
  )
}
