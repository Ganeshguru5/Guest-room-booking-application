import React,{useEffect,useState} from 'react'
import  {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {decodeToken} from 'react-jwt'

export default function EditPage() {
    const {id}=useParams();
    const token=localStorage.getItem("GappOwnertoken");
    const decoded = decodeToken(token);
    const [name,setName]=useState('')
    const [address,setaddress]=useState('')
    const [location,setlocation]=useState('')
    const [rent,setrent]=useState('')
    const [max,setmax]=useState('')
    const [min,setmin]=useState('')
    const [Facilities,setFacilities]=useState('')
    const [hotelData,setHotelData]=useState([])
  const [hotelDatas,setHotelDatas]=useState([])
  useEffect(()=>{
   axios.post(`http://localhost:8080/api/roomdetail/${id}/`)
          .then(res=>{
            setName(res.data.name)
            setaddress(res.data.address)
            setrent(res.data.rent)
            setlocation(res.data.location)
            setmax(res.data.Maximumstay)
            setmin(res.data.Minimumstay)
            setFacilities(res.data.Facilities)
          })
  },[])

  function update(){
    axios.put(`http://localhost:8080/api/update/${id}`,{
    name:name,
    address:address,
    rent:rent,
    location:location,
    Minimumstay:min,
    Maximumstay:max,
    });
    window.location.reload()
  }
  return (
    <div className='hotelViewAdmin'>
                    <div>
                      
                    <p className='adminhead'>Room Name</p>
                    <input  value={name} className='admininput' onChange={(event)=>{setName(event.target.value)}}/>
        
                    <p className='adminhead'> Address</p>
                    <input value={address} className='admininput' onChange={(event)=>{setaddress(event.target.value)}}/> 
        
                    <p className='adminhead'> Location</p>
                    <input value={location} className='admininput' onChange={(event)=>{setlocation(event.target.value)}}/> 
        
                    <p className='adminhead'>Room Rent</p>
                    <input value={rent} className='admininput' onChange={(event)=>{setrent(event.target.value)}}/> 

                    <p className='adminhead'>Max Stay</p>
                    <input value={max} className='admininput' onChange={(event)=>{setrent(event.target.value)}}/>

                    <p className='adminhead'>Min Stay</p>
                    <input value={min} className='admininput' onChange={(event)=>{setrent(event.target.value)}}/> 

                    <p className='adminhead'>Facilities</p>
                    <input value={Facilities} className='admininput' onChange={(event)=>{setrent(event.target.value)}}/> 

                    <br></br>
                    <br></br>
                    <Link to={`/OwnerHome/EditRoom/${id}`}>
                    <button onClick={update}>Update</button>
                    </Link>
                </div>
                

</div>
  )
}
