import React,{useState,useEffect} from 'react'
import '../styles/DetailView.css'
import { useParams } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import { GiConsoleController } from 'react-icons/gi';

export default function DetailView() {
    const token=localStorage.getItem("GappOwnertoken");
    const [bookings,setBookings]=useState([])
    const decoded = decodeToken(token);
    let {id}=useParams()
    useEffect(()=>{
       axios.post('http://localhost:8080/api/Guestnow/')
      .then(res=>{
        setBookings(res.data)
      })
    },[])
  return (
    <div className='userDetail'>
        {
            bookings.map((data,index)=>{
                
                if(data._id==id){
                    return(
                        <div>
                        <div className='profiledetail'>
                            <p>{data.name.slice(0,1)}</p>
                        </div>
                        <p><span className='dtitle'>Name :</span>{data.name}</p>
                        <p><span className='dtitle'>email-id :</span> {data.email}</p>
                        <p><span className='dtitle'>Phonenum :</span>+91{data.phonenum}</p>
                        <p><span className='dtitle'>Hotel Name :</span> {data.hotelname}</p>
                        </div>
                    )
                }
            })
        }
       
    </div>
  )
}
