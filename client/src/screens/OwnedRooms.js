import React,{useEffect,useState} from 'react'
import SingleHotel from '../components/SingleHotel'
import OwnedRoom from '../components/OwnedRoom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {decodeToken} from 'react-jwt'
import { useNavigate } from 'react-router-dom'
import Info from '../components/Info'

export default function OwnedRooms() {
  const navigate=useNavigate();
  const token=localStorage.getItem("GappOwnertoken");
  const decoded = decodeToken(token);
  const [hotelData,setHotelData]=useState([])
  useEffect(()=>{
    axios.post('http://localhost:8080/api/getallrooms/')
          .then(res=>{
            setHotelData(res.data)
          })
  },[])
  const arr=[5,6,7,8,9]
  return (
    <div className='BookingContainer'>
        <h3>My rooms</h3>
        
        <Link to='/OwnerHome/Addrooms'>
        <button style={{backgroundColor:'red',color:'white',border:'none',padding:'10px',borderRadius:'15px'}}>Add more rooms</button>
        </Link>
        <Info/>
        <div className='userbooks'>
      {
        hotelData.map((data,index)=>{
          if(data.username==decoded.username){
            return(
              <Link to={`/OwnerHome/Rooms/${data._id}`} style={{textDecoration:'none'}}>
                <OwnedRoom 
                name={data.name}
                rent={data.rent}
                address={data.address}
                URL={data.image}
                />
                </Link>
            )
          }
        })
      }
      </div>
    </div>
  )
}
