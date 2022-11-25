import React,{useEffect,useState} from 'react'
import SingleBooking from '../components/SingleBooking'
import Confirmde from '../components/Confirmde';
import "../styles/Bookings.css"
import axios from 'axios';
import { decodeToken } from 'react-jwt';
export default function ConfirmedRooms() {
  const token=localStorage.getItem("GappOwnertoken");
  const [bookings,setBookings]=useState([])
  const decoded = decodeToken(token);
  useEffect(()=>{
    axios.post('http://localhost:8080/api/confirmedBookings/')
   .then(res=>{
     setBookings(res.data)
   })
 },[])
  return (
    <div className='BookingContainer'>
      <h3>Bookings Confirmed</h3>
      <div className='userbooks'>
      {bookings.map((data,index)=>{
        if(data.owneruname==decoded.username){
        return(
          <Confirmde 
          name={data.name}
          hotelname={data.hotelname}
          id={data._id}
          email={data.email}
          phonenum={data.phonenum}
          owneruname={data.owneruname}
          />
        )
        }
      })}
      </div>
    </div>
  )
}