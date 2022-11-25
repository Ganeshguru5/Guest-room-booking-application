import React,{useEffect,useState} from 'react'
import SingleBooking from '../components/SingleBooking'
import "../styles/Bookings.css"
import axios from 'axios'
import {decodeToken} from 'react-jwt'
import { Link } from 'react-router-dom'
import Info from '../components/Info'


export default function Bookings() {
  
  const token=localStorage.getItem("GappOwnertoken");
  const [bookings,setBookings]=useState([])
  const decoded = decodeToken(token);
  useEffect(()=>{
     axios.post('http://localhost:8080/api/myroombookings/')
    .then(res=>{
      setBookings(res.data)
    })
  },[])
  return (
    <div className='BookingContainer'>
      {console.log(bookings)}
      <h3>New Bookings @{decoded.name}</h3>
      <Info />
      <div className=''>
      {bookings.map((data,index)=>{

        console.log(data.owneruname)
        console.log(decoded.username)
        if(data.owneruname==decoded.username){
        return(
          <Link to={`/OwnerHome/${data._id}`} style={{textDecoration:'none'}}>
          <SingleBooking 
          name={data.name}
          date={data.date.slice(0,10)}
          hotelname={data.hotelname}
          id={data._id}
          />
          </Link>
        )
        }
      })}
      </div>
    </div>
  )
}
