import React,{useEffect,useState} from 'react'
import "../styles/HotelView.css"
import {decodeToken} from 'react-jwt'
import { useParams,useNavigate } from 'react-router-dom';
import {BiLocationPlus} from 'react-icons/bi'
import axios from 'axios'
export default function HotelView() {
  const navigate=useNavigate()
  const {id} =useParams()
  
  const token=localStorage.getItem("Gapptoken");
  const decoded = decodeToken(token);
  const [allhotelData,setAllHotelData]=useState([])
  const [date,setDate]=useState();
  useEffect(()=>{
     axios.post(`http://localhost:8080/api/getallrooms/`)
          .then(res=>{
            setAllHotelData(res.data)
          })
  },[])

  let currentHotel;
  let owneruname;
  let image;
  const BookRoom=()=>{
    console.log("Book button pressed")
    console.log(decoded)
    if(date){
    const response= axios.post('http://localhost:8080/api/bookroom/',{
      name:decoded.name,
      email:decoded.email,
      username:decoded.username,
      phonenum:decoded.phonenum,
      hotelname:currentHotel,
      owneruname:owneruname,
      date:date,
      image:image,
    })
    navigate('/Homepage')
  }
  else{
    document.getElementsByClassName("hoteltitle").innerHTML='please eneter date'
  }
  }
  return (
    <div className='HotelViewConatiner'>
      
      <div>
      {
        allhotelData.map((data,index)=>{
          if(data._id===id){
            currentHotel=data.name;
            owneruname=data.username;
            image=data.image
            let splited=data.Facilities.split(',')
            return(
              <div className='onehalfdetail'>
                
                
                <img src={'http://localhost:8080/'+data.image} alt="hotelimg" className='Viewimg'/>
                
                <div className='Details'>
                <p className='hoteltitle'>{data.name}</p>                <span>
                <div className='requestBtn'>
              <button onClick={BookRoom} className='Book'>Book Room</button>
              </div>
                </span>
                <p>Owner name :{data.username}</p>
                <p><BiLocationPlus color='#3c94ff' fontSize='20'/><span className='hoteladdress'>{data.address}</span> </p>
                <p>Rate :{data.rent}/night</p>
                {/* <p className='hoteladdress'>{data.name} is located in {data.location} . They provide the facilities like {data.Facilities} . It was owned by {data.username}</p> */}
                <span>Date :<input type='Date' onChange={(event)=>{setDate(event.target.value)}}/></span>
                <p style={{color:'red'}}>(**please select date before book room**)</p>
                
                <p>Max Stay :{data.Maximumstay}/days</p>
                <p>Facilities :{data.Facilities}</p>
                
                
              </div>
              
              </div>
              
            )
          }
          
          
        })
      }
      
      </div>
      

      
    </div>
    
  )
}
