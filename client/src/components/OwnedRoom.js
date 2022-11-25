import React from 'react'

export default function OwnedRoom(props) {
    return (
        <div className='singleHotel'>
            <div className=''>
            <img src={'http://localhost:8080/'+props.URL} width='250px' alt='roomimg' className='roomimg'/>
            </div>
            <span>{props.name}</span>
            <span style={{color:'#9f9f9f'}}>{props.address}</span>
            <span style={{color:'#9f9f9f'}}><span className='rate'>${props.rent}</span>/night</span>        
        </div>
      )
    }
