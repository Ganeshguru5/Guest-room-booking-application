import React,{useState,useEffect} from 'react'
import  {useParams} from 'react-router-dom'
import "../styles/HotelAdminView.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import {decodeToken} from 'react-jwt'


export default function HotelAdminView() {
    const {id}=useParams();
    const token=localStorage.getItem("GappOwnertoken");
  const decoded = decodeToken(token);
  const [name,setName]=useState('')
  const [address,setaddress]=useState('')
  const [location,setlocation]=useState('')
  const [rent,setrent]=useState('')
  const [hotelData,setHotelData]=useState([])
  useEffect(()=>{
    axios.post('http://localhost:8080/api/getallrooms/')
          .then(res=>{
            setHotelData(res.data)
          })      
  },[])

  function deleteone(){
    axios.post(`http://localhost:8080/api/delete/${id}`);
    window.location.reload();
  }
  
  return (
    <div className='hotelViewAdmin'>
        <p>{id}</p>
        {
          
            hotelData.map((data,index)=>{
                if(data._id===id){
                  
                    return(
                        <div>
                        <p style={{fontWeight:'bold'}}>Hotel Name</p>
                        <p>{data.name}</p>
                        <img src={'http://localhost:8080/'+data.image} style={{width:'400px'}}/>
                        <p  style={{fontWeight:'bold'}}>Address</p>
                        <p>{data.address}</p>
                        <p  style={{fontWeight:'bold'}}>Rent</p>
                        <p>{data.rent}/Day</p>

                        <Link to={`/OwnerHome/EditRoom/${id}`}>
                        <button>Click to edit details</button>
                        </Link>
                        <button onClick={deleteone}>Delete Room</button>
                    </div>
                    )
                }
            })
        }
        

    </div>
  )
}
