import React,{useEffect,useState} from 'react'
import "../styles/Hotels.css"
import SingleHotel from '../components/SingleHotel'
import NearHotel from '../components/NearHotel'
import {decodeToken} from 'react-jwt'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Hotels() {
  const arr =[4,5,6,6,7,8,8,8,]
  const token=localStorage.getItem("Gapptoken");
  const decoded = decodeToken(token);
  const [hotelData,setHotelData]=useState([])
  useEffect(()=>{
    axios.post('http://localhost:8080/api/getallrooms/')
          .then(res=>{
            setHotelData(res.data)
          })
  },[])

  return (
    <div className='HotelContainer'>
      <p className='Findtitle'>Welcome {decoded.name} 😎</p>
      <div className='searchDiv'>
        <p className='where'>Where to</p>
        <div className='searchBar'>
        <input placeholder='Yogykatra' className='searchInput'/>
        <button className='searchbtn'>Search</button>
        </div>
      </div>
      
      <div >
      <span>Lodging available</span>
      <div className='HotelsAvailable'>
        {
          hotelData.map((data,index)=>{
            return(
              <Link to={`/Homepage/${data._id}`} style={{textDecoration:'none'}}>
              <SingleHotel 
              name={data.name}
              address={data.address}
              rent={data.rent}
              URL={data.image}
              />
              </Link>
            )
          })
        }
        </div>

      </div>
      <div>
        <span>Near Me</span>
        <div className='nearallhotels'>
          {
            hotelData.map((data,index)=>{
              return (
                <NearHotel 
                name={data.name}
              address={data.address}
              location={data.location}
              URL={data.image}
              rent={data.rent}
                />
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}
