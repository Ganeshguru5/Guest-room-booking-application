import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "../styles/BookingDetail.css"
import { decodeToken } from 'react-jwt';
import {useParams} from 'react-router-dom'

export default function BookingDetail() {
  const token=localStorage.getItem("GappOwnertoken");
  const [bookings,setBookings]=useState([])
  const decoded = decodeToken(token);
  let {id}=useParams()
  useEffect(()=>{
     axios.post('http://localhost:8080/api/myroombookings/')
    .then(res=>{
      setBookings(res.data)
    })
  },[])

  const confirm = ()=>{
    const response= axios.post(`http://localhost:8080/api/confirmbooking/${id}`);
    if(response){
      window.location.reload()
    }
    
  }
  const deleteone=()=>{
    axios.post(`http://localhost:8080/api/declinebooking/${id}`)
    window.location.reload()
  }

  return (
    <div className='BookingDetails'>
      {
        bookings.map((data,index)=>{
          if(data._id===id){
            return(
              <div>
          <p>Booking / {id}</p>
        
        <div className='deepdetails'>
          <div className='confirmation'>
            <p className='notify'>Notify Guest</p>
            <div className='buttons'>
            <button className='confirm' onClick={confirm}>Confirm</button>
            <button className='reject' onClick={deleteone}>Reject</button>
            </div>
          </div>
          <div className='userDetials'>
            <div className='usernameindet'>
              
                      <p>{data.name}</p>
                  
            </div>
            <div className='usercontact'>
              
              <div>
             
                      <p>Phone {data.phonenum}</p>
                <p>Secured with Credit card</p>
              </div>
            </div>
          </div>
        </div>

        <div className='roomdetialsadmin'>
          <div className='useradroomimg'>
            <img src={`http://localhost:8080/`+data.image} alt="room" className='adminuserroom'/>
          </div>
          <div className='details'>
         
                      <p>Mugan</p>
                  
            
            <span>Check in:{data.date.slice(0,10)}</span>
            <span>Minimum Stay:1 month</span>
            <span>Security 5,000</span>
          </div>
        </div>
        </div>
            )
          }
          
        })
      }
        
    </div>
  )
}
