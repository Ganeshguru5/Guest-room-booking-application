import React,{useState,useEffect} from 'react'
import SingleBooking from '../components/SingleBooking'
import GuestComp from '../components/GuestComp'
import "../styles/Bookings.css"
import axios from 'axios'
import {decodeToken} from 'react-jwt'
import { Link } from 'react-router-dom'
import Info from '../components/Info'

export default function Guests() {
  const token=localStorage.getItem("GappOwnertoken");
  const [bookings,setBookings]=useState([])
  const decoded = decodeToken(token);
  useEffect(()=>{
     axios.post('http://localhost:8080/api/Guestnow/')
    .then(res=>{
      setBookings(res.data)
    })
  },[])
    return (
      <div className='BookingContainer'>
        <h3>Guests list </h3>
        <Info />
        <div className='userbooks'>
        {bookings.map((data,index)=>{

console.log(data.owneruname)
console.log(decoded.username)
if(data.owneruname==decoded.username){
return(
  <Link to={`/OwnerHome/Guests/${data._id}`} style={{textDecoration:'none'}}>
  <GuestComp 
  name={data.name}
  hotelname={data.hotelname}
  id={data._id}
  date={data.email}
  />
  </Link>
)
}
})}
        </div>
      </div>
    )
  }
  
