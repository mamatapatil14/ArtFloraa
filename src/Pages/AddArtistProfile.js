import React, { useRef, useState } from 'react'
import { Button, Form, Image } from 'react-bootstrap'
import '../style/AddArtistProfile.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUserProfile } from '../Redux_work/UserSlice'


const AddArtistProfile = () => {
  const inputref = useRef(null)
  const [ArtiProfile, setArtiProfile] = useState("")

  const { userData } = useSelector((state) => state.user)
   
  const navi=useNavigate()
  const dispatcher = useDispatch()

  const [ArtiName, setArtiName] = useState("")
  const [Artiage, setArtiage] = useState()
  const [ArtiAddress, setArtiAddress] = useState()
  const [ArtiCity, setArtiCity] = useState("")
  const [ArtiState, setArtiState] = useState("")
  const [ArtiPincode, setArtiPincode] = useState("")
  const [ArtiEmail, setArtiEmail] = useState("")
  const [ArtiMobile, setArtiMobile] = useState("")
  const [ArtiAdhar, setArtiAdhar] = useState("")
  const [ArtiHandicapcer, setArtiHandicapcer] = useState("")


  const Handleimgclick = () => {
    inputref.current.click()
  }

  function uploadimage1(e) {
    const data = new FormData()
    data.append("image", e.target.files[0])
    axios.post("http://localhost:5000/UploadImage", data)
      .then((result) => {
        setArtiProfile(result.data.filepath)
        alert("image uploaded")
      }).catch((err) => {
        console.log(err)
      })
  }
  function uploadimage2(e) {
    const data = new FormData()
    data.append("image", e.target.files[0])
    axios.post("http://localhost:5000/UploadImage", data)
      .then((result) => {
        setArtiAdhar(result.data.filepath)
        
        alert("image uploaded")
      }).catch((err) => {
        console.log(err)
      })
  }
  function uploadimage3(e) {
    const data = new FormData()
    data.append("image", e.target.files[0])
    axios.post("http://localhost:5000/UploadImage", data)
      .then((result) => {
        setArtiHandicapcer(result.data.filepath)
        alert("image uploaded")
      }).catch((err) => {
        console.log(err)
      })
  }


  function addArtist() {
    const addart = {
      artistfullname: ArtiName,
      artistage: Artiage,
      artistaddress: ArtiAddress,
      email: ArtiEmail,
      mobile: ArtiMobile,
      city: ArtiCity,
      state: ArtiState,
      pincode: ArtiPincode,
      artistadharcard: ArtiAdhar,
      artistprofile: ArtiProfile,
      artisthandicapcer: ArtiHandicapcer,
      userid: userData._id
    }

    axios.post("http://localhost:5000/AddArtist",addart)
      .then((result)=>{
          console.log(result.data)
          alert("data added")
          dispatcher(addUserProfile(result.data))
          navi('/')
      }).catch((err)=>{
        console.log(err)
      })


  }



  return (
    <div>
      <div className='custprofile'>
        <div className='head_color'><h3 className='text-center'>Add Profile</h3></div>
        <div onClick={Handleimgclick} className='cproimg'>

          {ArtiProfile ? <Image src={`http://localhost:5000${ArtiProfile}`} className='cproimg1' /> : <h6 className='text-center mt-5'>Add Photo</h6>}

          <input type="file" ref={inputref} onChange={(e) => uploadimage1(e)} style={{ display: "none" }} />
        </div>
        <div>
          <Form className='addart_form'>

            <Form.Group className='d-flex'>
              <Form.Label className='w-25'>Astist Full Name:</Form.Label>
              <Form.Control className='w-50 ' type='text' onChange={(e) => setArtiName(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Artist Address:</Form.Label>
              <Form.Control className='w-50 ' type='text' onChange={(e) => setArtiAddress(e.target.value)} />
            </Form.Group>

            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>City:</Form.Label>
              <Form.Control className='w-50' type='text' onChange={(e) => setArtiCity(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>State:</Form.Label>
              <Form.Control className='w-50' type='text' onChange={(e) => setArtiState(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Pincode:</Form.Label>
              <Form.Control className='w-50' type='text' onChange={(e) => setArtiPincode(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Email :</Form.Label>
              <Form.Control className='w-50 ' type='email' onChange={(e) => setArtiEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Mobile Number:</Form.Label>
              <Form.Control className='w-50 ' type='Number' onChange={(e) => setArtiMobile(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Age:</Form.Label>
              <Form.Control className='w-50 ' type='Number' onChange={(e) => setArtiage(e.target.value)} />
            </Form.Group>

            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Upload Adhar Card:</Form.Label>
              <Form.Control className='w-25' size='sm' type='file' onChange={(e) => uploadimage2(e)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Upload Handicap Certificate</Form.Label>
              <Form.Control className='w-25 h-25' size='sm' type='file' onChange={(e) => uploadimage3(e)} />
            </Form.Group>
            <Button className='frm_btn' onClick={() => addArtist()}>Submit</Button>

          </Form>
        </div>
      </div>
    </div>
  )
}

export default AddArtistProfile