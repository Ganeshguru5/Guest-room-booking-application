import React from 'react'
import "../styles/singleHotel.css"

export default function SingleHotel(props) {
  return (
    <div className='singleHotel'>
        <div className='img'>
        <img src={'http://localhost:8080/'+props.URL} width='250px' alt='roomimg' className='roomimg'/>
        </div>
        <span>{props.name}</span>
        <span style={{color:'#9f9f9f'}}>{props.address.slice(0,25)}</span>
        <span style={{color:'#9f9f9f'}}><span className='rate'>${props.rent}</span>/night</span>        
    </div>
  )
}
