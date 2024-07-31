import React, { useEffect, useState } from 'react'
import { Container, Form, Image, Row, Col, Table, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../style/ArtistProfile.css'
import axios from 'axios'
import { MdVerified } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'

const ArtistProfile = () => {

  const { userProfileData } = useSelector((state) => state.user)
  const [allart, setallart] = useState([])


  useEffect(() => {
    const art={artistid:userProfileData._id}

    axios.post("http://localhost:5000/Artworkbyartistid", art)
      .then((result) => {
        setallart(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className='art_div'>
    <div className='Main_div'>
      <div className='First_div'>
        <div><Image src={`http://localhost:5000${userProfileData.Artistprofile}`} className='profile_img' /></div>
        <Table className='protable'>
          <tr>
            <td ><h5>Artist Name</h5></td>
            <td>:</td>
            <td>{userProfileData.Artistfullname}</td>
          </tr>
          <tr>
            <td><h5>Age</h5></td>
            <td>:</td>
            <td>{userProfileData.Artistage}</td>
          </tr>
          <tr>
            <td><h5>Mobile No</h5></td>
            <td>:</td>
            <td>{userProfileData.Mobile}</td>
          </tr>
          <tr>
            <td><h5>Email</h5></td>
            <td>:</td>
            <td>{userProfileData.Email}</td>
          </tr>
          <tr>
            <td><h5>Address</h5></td>
            <td>:</td>
            <td>{userProfileData.Artistaddress}, &nbsp;{userProfileData.City},&nbsp;{userProfileData.Pincode}</td>
          </tr>
          <tr>
            <td><h5>State</h5></td>
            <td>:</td>
            <td>{userProfileData.State}</td>
          </tr>
          <tr>
            <td><h5>Total ArtWork</h5></td>
            <td>:</td>
            <td>{
              allart.length
            }</td>
          </tr>
          <tr>
            <td><h5>Is Verified</h5></td>
            <td>:</td>
            <td>{userProfileData.Isverified==true?"yes":"No"}</td>
          </tr>
          
        </Table>
      </div>
      <div className='Second_div'>
        <div><h4>Documents</h4></div>
        <div>
          <div className='d-flex'>
            <h5>Adhar Card:</h5>
            <Image src={`http://localhost:5000${userProfileData.Artistadharcard}`} className='adhar_img' />

          </div>
          <div className='d-flex mt-4'>
            <h5>Hadicap Certificate:</h5>
            <Image src={`http://localhost:5000${userProfileData.Artisthandicapcer}`} className='handicer_img' />

          </div>
        </div>

      </div>
      
    </div>
    <div className='Edit_button'><Button>Edit Profile</Button></div>
    </div>
  )
}

export default ArtistProfile