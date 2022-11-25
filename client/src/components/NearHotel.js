import React from 'react'
import "../styles/NearHotel.css"
export default function NearHotel(props) {
  return (
    <div className='nearhotel'>
        <div >
            <img src={'http://localhost:8080/'+props.URL} className='nearhotelimg'  alt='roomimg'/>
        </div>
        <div>
            <p className='hotelnamenear'>{props.name}</p>
            <p className='hotellocationnear'>{props.location}</p>
        </div>
        <div>
            <p>${props.rent}/night</p>
        </div>
    </div>
  )
}
