import React,{useEffect} from 'react'
import "../styles/SingleBooking.css"
import axios from 'axios';

export default function Confirmde(props) {


function addGuest(){
  console.log(props.id);
    axios.post(`http://localhost:8080/api/guestarrived/${props.id}`,{
      name:props.name,
      email:props.email,
      username:props.username,
      phonenum:props.phonenum,
      hotelname:props.hotelname,
      owneruname:props.owneruname,
    })
    window.location.reload()
 
}

  return (
    <div className='onemanBooking'>
      <div className='profile'>
       
       <p className='userprofile'>{props.name.slice(0,1)}</p>
     </div>
      <div className='detials'>
        <span className='usernameadmin'>{props.name}</span>
        <span className='roomname'>{props.hotelname}</span>
        <span className='checkadmin'>{props.date}</span>
        <span className='checkadmin'>{props.phonenum} </span>
        <div>
        <button onClick={addGuest}>Guest Arrived ?</button>
      </div>
      </div>
      <div className='id'>
        <p>{props.id.slice(19)}</p>
      </div>
      <div className='id'>
        <p>{props.id.slice(19)}</p>
      </div>
      
    </div>
  )
}
