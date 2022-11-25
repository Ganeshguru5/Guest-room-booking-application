import React from 'react'
import "../styles/SingleBooking.css"

export default function SingleBooking(props) {
  return (
    <div className='onemanBooking'>
      <div className='profile'>
       
        <p className='userprofile'>{props.name.slice(0,1)}</p>
      </div>
      <div className='detials'>
        <span className='usernameadmin'>{props.name}</span>
        <span className='roomname'>{props.hotelname}</span>
        <span className='checkadmin'>Check-in:{props.date}</span>
        <span className='checkadmin'>{props.phonenum} </span>
      </div>
      <div className='id'>
        <p>{props.id.slice(19)}</p>
      </div>
    </div>
  )
}
