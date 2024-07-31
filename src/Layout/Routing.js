import React from 'react'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import TopArtist from '../Pages/TopArtist'
import TopArtwork from '../Pages/TopArtwork'
import Login from '../Pages/Login'
import Main from '../Component/Main'
import Registration from '../Pages/Registration'
import Cart from '../Pages/Cart'
import { isLogedin, useSelector } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import Profileuser from '../Pages/Profileuser'
import ArtistDashboard from '../Pages/ArtistDashboard'
import AddArtistProfile from '../Pages/AddArtistProfile'
import AddCustomerProfile from '../Pages/AddCustomerProfile'
import CustDash from '../Pages/CustDash'
import PlaceOrder from '../Pages/PlaceOrder'
import AllArtwork from '../Pages/AllArtwork'

import ArtistAll_Art from '../Pages/ArtistAllArt'


const Routing = () => {

  const { isLogedin } = useSelector((state => state.user))
  return (
    <div>
      <Container fluid>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/shopscart' element={
            <ProtectedRoute isSignin={isLogedin}>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/profileuser' element={
            <ProtectedRoute isSignin={isLogedin}>

              <ArtistDashboard />
            </ProtectedRoute>} />
          <Route path='/AddArtistprofile' element={<AddArtistProfile />} />
          <Route path='/AddCustomerProfile' element={<AddCustomerProfile />} />
          <Route path='/ArtistDashboard' element={
            <ProtectedRoute isSignin={isLogedin}>
              <ArtistDashboard />
            </ProtectedRoute>} />
          <Route path='/CustDashboard' element={
            <ProtectedRoute isSignin={isLogedin}>

              <CustDash />
            </ProtectedRoute>
          } />
          <Route path='/Placeorder' element={<PlaceOrder />} />
          <Route path='/AllArtwork' element={
            <ProtectedRoute isSignin={isLogedin}>
              <AllArtwork />
            </ProtectedRoute>
          } />
          <Route path='/ArtistAllArt' element={<ArtistAll_Art />} />
          {/* <Route path='' element={

          }/> */}

        </Routes>

      </Container>
    </div >
  )
}

export default Routing