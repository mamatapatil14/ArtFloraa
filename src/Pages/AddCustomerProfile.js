import React, { useRef, useState } from 'react'
import '../style/AddCustomerProfile.css'
import { Button, Form, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addUserProfile } from '../Redux_work/UserSlice'
import { useNavigate } from 'react-router-dom'

const AddCustomerProfile = () => {
  const inputref = useRef(null)
  const { userData } = useSelector((state) => state.user)
  const dispatcher=useDispatch()
  const navi=useNavigate()



  const [UserProfile, setUserProfile] = useState('')
  const [Cusname, setCusname] = useState('')
  const [Cusaddress, setCusaddress] = useState('')
  const [Cuscity, setCuscity] = useState('')
  const [Cusstate, setCusstate] = useState('')
  const [Cuspincode, setCuspincode] = useState('')
  const [CusEmail, setCusEmail] = useState('')
  const [Cusmobile, setCusmobile] = useState('')
  const [Cusdob, setCustdob] = useState('')

  const Handleimgclick = () => {
    inputref.current.click()
  }

  function uploadimage(e) {
    const data = new FormData()
    data.append("image", e.target.files[0])
    axios.post("http://localhost:5000/UploadImage", data)
      .then((result) => {
        setUserProfile(result.data.filepath)
        alert("image uploaded")
      }).catch((err) => {
        console.log(err)
      })
  }

  function addCustomer(){
    const cus={
      customername:Cusname,
      customermobno:Cusmobile,
      customeaddress:Cusaddress,
      city:Cuscity,
      state:Cusstate,
      pincode:Cuspincode,
      email:CusEmail,
      dob:Cusdob,
      profile:UserProfile,
      userid: userData._id
    }
    axios.post("http://localhost:5000/AddCustomer",cus)
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

          {UserProfile ? <Image src={`http://localhost:5000${UserProfile}`} className='cproimg1' /> : <h6 className='text-center mt-5'>Add Photo</h6>}

          <input type="file" ref={inputref} onChange={(e) => uploadimage(e)} style={{ display: "none" }} />
        </div>
        <div>
          <Form className='addcus_form'>

            <Form.Group className='d-flex'>
              <Form.Label className='w-25'>Customer Full Name:</Form.Label>
              <Form.Control className='w-50 ' type='text' onChange={(e)=>setCusname(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Customer Address:</Form.Label>
              <Form.Control className='w-50 ' type='text' onChange={(e)=>setCusaddress(e.target.value)} />
            </Form.Group>

            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>City:</Form.Label>
              <Form.Control className='w-50' type='text' onChange={(e)=>setCuscity(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>State:</Form.Label>
              <Form.Control className='w-50' type='text' onChange={(e)=>setCusstate(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Pincode:</Form.Label>
              <Form.Control className='w-50' type='text' onChange={(e)=>setCuspincode(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>DOB:</Form.Label>
              <Form.Control className='w-50' type='date' onChange={(e)=>setCustdob(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Email :</Form.Label>
              <Form.Control className='w-50 ' type='email' onChange={(e)=>setCusEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className='d-flex mt-3'>
              <Form.Label className='w-25'>Mobile Number:</Form.Label>
              <Form.Control className='w-50 ' type='Number' onChange={(e)=>setCusmobile(e.target.value)} />
            </Form.Group>

            <Button className='frm_btn' onClick={()=>addCustomer()}>Submit</Button>
            </Form>
        </div>
      </div>
    </div>
  )
}

export default AddCustomerProfile