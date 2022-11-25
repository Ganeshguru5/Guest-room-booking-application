import React from 'react'
import "../styles/Nav.css"
import { Link } from 'react-router-dom'
import {MdBedroomParent} from 'react-icons/md'
import {BsCalendarDate} from 'react-icons/bs'
import {AiOutlineSetting,AiOutlineLogout} from 'react-icons/ai'
import {GiSleepingBag,GiConfirmed} from 'react-icons/gi'
import logo from "../assets/icon.jpg"
export default function OwnerNav() {
  return (
    <div className='NavContainer'>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={logo} width='80px'/>
        </div>
        <div className='navContent'>
          <Link to='/OwnerHome' className='navItem'>
            <MdBedroomParent/>
            <p className='navtitle'>Bookings</p>
          </Link>
          <Link to='/OwnerHome/confirmed' className='navItem'>
            <GiConfirmed />
            <p className='navtitle'>Confirmed</p>
          </Link>
          <Link to='/OwnerHome/Guests' className='navItem'>
            <GiSleepingBag />
            <p className='navtitle'>Guests</p>
          </Link>
          
          <Link to='/OwnerHome/Rooms' className='navItem'>
            <AiOutlineSetting />
            <p className='navtitle'>Rooms</p>
          </Link>
          <Link to='/OwnerLogin' className='navItem'>
            <AiOutlineLogout />
            <p className='navtitle'>Log off</p>
          </Link>
          
        </div>
    </div>
  )
}
