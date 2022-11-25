import React from 'react'
import "../styles/Nav.css"
import {AiOutlineHome,AiOutlineHeart,AiOutlineSetting,AiOutlineLogout} from "react-icons/ai"
import {FaWpexplorer} from 'react-icons/fa'
import {GrNotification} from "react-icons/gr"
import logo from "../assets/icon.jpg"
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div className='NavContainer'>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={logo} width='80px'/>
        </div>
        <div className='navContent'>
          <Link to='/Homepage' className='navItem'>
            <AiOutlineHome/>
            <p className='navtitle'>Dashboard</p>
          </Link>
{/*           
          <div className='navItem'>
            <GrNotification />
            <p className='navtitle'>Notification</p>
          </div> */}
{/*           
          <div className='navItem'>
            <AiOutlineSetting />
            <p className='navtitle'>Settings</p>
          </div> */}

          <Link to='/' className='navItem'>
            <AiOutlineLogout />
            <p className='navtitle'>Log off</p>
          </Link>
          
        </div>
    </div>
  )
}
