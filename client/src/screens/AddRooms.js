import React,{useState} from 'react'
import {decodeToken} from 'react-jwt'
import axios from 'axios'
import { FaWindows } from 'react-icons/fa';

export default function AddRooms() {

  const [name,setName]=useState("");
  const [loaction,setlocation]=useState("");
  const [rent,setRent]=useState("");
  const [address,setAddress]=useState("");
  const [image,setImage]=useState([])
  const [Facilities,setFacilities]=useState("");
  const [Minimum,setMinimum]=useState("");
  const [Maximum,setMaximum]=useState("");


  const token=localStorage.getItem("GappOwnertoken");
  const decoded = decodeToken(token);

  const imageupload=(event)=>{
    console.log(event.target.files[0])
    setImage(event.target.files[0])
  }
  const handleSubmit= (event)=>{
    console.log("Submitted ")

    let formData=new FormData()
    formData.append('location',loaction);
    formData.append('name',name);
    formData.append('username',decoded.username);
    formData.append('image',image)
    formData.append('rent',rent);
    formData.append('address',address)
    formData.append('Minimumstay',Minimum);
    formData.append('Maximumstay',Maximum);
    formData.append('Facilities',Facilities)

    console.log(formData)
    event.preventDefault()
    try{
     axios.post(`http://localhost:8080/api/addroom/`,formData)
     window.location.reload()
    }
    catch(e){
    console.log("error")
    }
  }

  
  return (
    <div className='BookingContainer'>
      <h3>Enter the details of your room:</h3>
      <form onSubmit={handleSubmit}>
      <p>Room Name 😇</p>
      <input 
      placeholder='Enter the Name'
      value={name}
      className='admininput'
      onChange={(event)=>{setName(event.target.value)}}
      />
      <p>Location 📌</p>
      <input 
      placeholder='Enter the Location'
      value={loaction}
      className='admininput'
      onChange={(event)=>{setlocation(event.target.value)}}
      />
      <p>Room Image 🖼️</p>
      <input type='file' name='image' onChange={imageupload}/>
      <p>Rent Amount /Night 🌃</p>
      <input 
      placeholder='Enter the Amount'
      value={rent}
      className='admininput'
      onChange={(event)=>{setRent(event.target.value)}}
      />
      <p>Address 📝</p>
      <input 
      className='admininput'
      placeholder='Enter the Address'
      value={address}
      
      onChange={(event)=>{setAddress(event.target.value)}}
      />

      <p>Minimum Booking Days</p>
      <input 
      className='admininput'
      placeholder='Enter the Min Booking day'
      type='text'
      value={Minimum}
      onChange={(event)=>{setMinimum(event.target.value)}}
      />
      <p>Maximum Booking Days</p>
      <input 
      className='admininput'
      placeholder='Enter the Max booking day'
      type='text'
      value={Maximum}
      onChange={(event)=>{setMaximum(event.target.value)}}
      />
      <p>Facilities(Seperated with commas)</p>
      <input 
      className='admininput'
      placeholder='WIFI,Laundry...etc'
      type='text'
      value={Facilities}
      onChange={(event)=>{setFacilities(event.target.value)}}
      />
      <br></br>
      <br></br>
      <button>Add room</button>
      </form>
    </div>
  )
}
