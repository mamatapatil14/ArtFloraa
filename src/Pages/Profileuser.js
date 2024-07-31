import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import '../style/Profileuser.css'
import { useSelector } from 'react-redux'
import { Image } from 'react-bootstrap'


const Profileuser = () => {
  const { userData } = useSelector((state) => state.user)
  const { isLogedin,userProfileData } = useSelector((state) => state.user)

  
  return (
    <div>

      <Link to={userData.User_type_id == 0 ? "/ArtistDashboard": "/CustDashboard"}>
        {
          (isLogedin==true) ? (userData.User_type_id == 0)? <Image src={`http://localhost:5000${userProfileData.Artistprofile}`} className='imgpro'/>:<Image src={`http://localhost:5000${userProfileData.Profile}`} className='imgpro'/>:<CgProfile className='btnprof' />
        }
        
      </Link>

    </div>
  )
}

export default Profileuser