import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "../styles/Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function OwnerRegister() {

  const navigate = useNavigate()
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const [phonenum,setPhonenum]=useState("")

 const handleSubmit=(event)=>{
  event.preventDefault();
  const response= axios.post('http://localhost:8080/api/ownerregister/',{
    email:email,
    password:password,
    username:username,
    name:name,
    phonenum:phonenum,
  })
  if(response){

    navigate('/OwnerLogin')
    window.location.reload()
  }
 }

  return (
    <div className='LoginContainer'>
      <div className='onehalf'>
      <form onSubmit={handleSubmit}>
        <p className='LoginHeader'>Register</p>
        <p className='LoginHeader'>Welcome to our application !</p>
        <p className='desc'>Reach out great peoples and provide rooms for rent</p>
        <p className='inputHead'>Username*</p>
        <input 
          placeholder='Mahi dacter' 
          className='input'
          name="name"
          value={name}
          onChange={(event)=>{setName(event.target.value)}}
          />
        <p className='inputHead'>Email*</p>
        <input 
          placeholder='mail@website.com' 
          className='input'
          name="email"
          value={email}
          onChange={(event)=>{setEmail(event.target.value)}}
          />
          <p className='inputHead'>Phone number*</p>
        <input 
          placeholder='+917885768585' 
          className='input'
          name="phonenum"
          value={phonenum}
          onChange={(event)=>{setPhonenum(event.target.value)}}
          />
          <p className='inputHead'>Username*</p>
        <input 
          placeholder='ganesh7878' 
          className='input'
          name="username"
          value={username}
          onChange={(event)=>{setUsername(event.target.value)}}
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
        <p></p>
        <button type='submit' className='Loginbtn' >Register</button>

        
      </form>
      <p style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Or</p>
      <Link to='/OwnerLogin'>
        <button type='submit' className='Loginbtn' >Log in</button>
        </Link>
      </div>
    </div>
  )
}
