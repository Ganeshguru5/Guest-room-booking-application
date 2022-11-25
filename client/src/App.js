import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import "../src/styles/main.css"
import Nav from "../src/screens/Nav"
import HotelView from './screens/HotelView'
import LoginPage from './screens/LoginPage'
import RegisterPage from './screens/RegisterPage'
import Hotels from './screens/Hotels'
import Bookings from './screens/Bookings'
import BookingDetail from './screens/BookingDetail'
import OwnerNav from './screens/OwnerNav'
import OwnerLogin from './screens/OwnerLogin'
import OwnerRegister from './screens/OwnerRegister'
import OwnedRooms from './screens/OwnedRooms'
import ConfirmedRooms from './screens/ConfirmedRooms'
import Guests from './screens/Guests'
import EmptyScreen from './screens/EmptyScreen'
import AddRooms from './screens/AddRooms'
import Map from './screens/Map'
import HotelAdminView from './screens/HotelAdminView'
import DetailView from './screens/DetailView'
import EditPage from './screens/EditPage'

export default function App() {
  return (
    <div className='main'>
      <Router>
        <Routes>
        <Route>
          <Route exact path='/OwnerHome' element={<OwnerNav/>} />
          <Route exact path='/Homepage' element={<Nav/>}/>
          <Route exact path='/Homepage/:id' element={<Nav/>}/>
          <Route exact path='/' element={<LoginPage />}/>
          <Route exact path='/OwnerLogin' element={<OwnerLogin />}/>
          <Route exact path='OwnerRegister' element={<OwnerRegister/>}/>
          <Route exact path='/Register' element={<RegisterPage/>}/>
          <Route exact path='/OwnerHome/Rooms' element={<OwnerNav/>}/>
          <Route exact path='/OwnerHome/Rooms/:id' element={<OwnerNav/>}/>
          <Route exact path='/OwnerHome/:id' element={<OwnerNav/>}/>
          <Route exact path='/OwnerHome/confirmed' element={<OwnerNav/>}/>
          <Route exact path='/OwnerHome/EditRoom/:id' element={<OwnerNav/>}/>
          <Route exact path='/OwnerHome/Guests' element={<OwnerNav/>}/>
          <Route exact path='/OwnerHome/Guests/:id' element={<OwnerNav/>}/>
          <Route exact path='OwnerHome/Addrooms' element={<OwnerNav />}/>
          <Route exact path='/Homepage/explore' element={<Nav />}/>

        </Route>
        </Routes>

        <Routes>
          <Route>
            <Route exact path='/OwnerHome' element={<Bookings/>}/>
            <Route exact path='/OwnerHome/:id' element={<Bookings/>}/>
            <Route exact path='/Homepage' element={<Hotels />}/>
            <Route exact path='/Homepage/:id' element={<Hotels/>}/>
            <Route exact path='/OwnerHome/Rooms' element={<OwnedRooms />}/>
            <Route exact path='/OwnerHome/Rooms/:id' element={<OwnedRooms/>}/>
            <Route exact path='/OwnerHome/EditRoom/:id' element={<OwnedRooms/>}/>
            <Route exact path='/OwnerHome/confirmed' element={<ConfirmedRooms />}/>
            <Route exact path='/OwnerHome/Guests' element={<Guests/>}/>
            <Route exact path='/OwnerHome/Guests/:id' element={<Guests/>}/>
            <Route exact path='OwnerHome/Addrooms' element={<AddRooms />}/>
            
            <Route exact path='/Homepage/explore' element={<Map />}/>
          </Route>
        </Routes>



        <Routes>
          <Route>
            <Route exact path='/OwnerHome' element={<BookingDetail/>}/>
            <Route exact path='/OwnerHome/:id' element={<BookingDetail/>}/>
            <Route exact path='/Homepage' element={<HotelView />}/>
            <Route exact path='/Homepage/:id' element={<HotelView/>}/>
            <Route exact path='/OwnerHome/Rooms' element={<BookingDetail />}/>
            <Route exact path='/OwnerHome/Rooms/:id' element={<HotelAdminView/>}/>
            <Route exact path='/OwnerHome/confirmed' element={<DetailView />}/>
            <Route exact path='/OwnerHome/EditRoom/:id' element={<EditPage/>}/>
            <Route exact path='/OwnerHome/Guests/:id' element={<DetailView/>}/>
            <Route exact path='OwnerHome/Addrooms' element={<BookingDetail />}/>
            <Route exact path='OwnerHome/explore' element={<BookingDetail />}/>
          </Route>
        </Routes>

      </Router>
    </div>
  )
}
