import React, { useState } from 'react'
import '../style/Login.css'
import { Button, Col, Form, Row, Image } from 'react-bootstrap'
import { BsPersonCircle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import welcome from '../images/welcome.png'
import welcome1 from '../images/welcome1.png'
import logoimg from '../images/logimg.png'

// import artfloralogo from '../images/artfloralogo.png'
import emp from '../images/emp.png'

import Registration from './Registration'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogin } from '../Utils'
import requestInstance from '../Utils/axios_instances'
import { addUserProfile, login } from '../Redux_work/UserSlice'
import axios from 'axios'


const Login = () => {
  const [userEmail, setuserEmail] = useState("")
  const [userPassword, setuserPassword] = useState("")
  const { userData } = useSelector((state) => state.user)
  const [usepro, setusepro] = useState()



  const navi = useNavigate()
  const dispatcher = useDispatch()




  function loginuser() {
    const userData1 = {
      email: userEmail,
      pass: userPassword
    }

    requestInstance().post(UserLogin, userData1)
      .then((result) => {
        console.log("result", result.data)
        let userData1 = result.data.user
        userData1.idToken = result.data.token

        dispatcher(login(userData1))
        // dispatcher(addUserProfile(userData1))
        // console.log("type:",result.data.user.User_type_id)
        if(result.data.user.User_type_id==0){
          const pro={
            userid: result.data.user._id
          }
          axios.post("http://localhost:5000/Artistbyuserid",pro)
            .then((result)=>{
              dispatcher(addUserProfile(result.data[0]))
              // console.log("pro",result.data)
            }).catch((err)=>{
              console.log(err)
            })
        }
        else{
          const pro={
            
            userid: result.data.user._id
          }
          axios.post("http://localhost:5000/Customerbyuserid",pro)
            .then((result)=>{
              
              dispatcher(addUserProfile(result.data[0]))
              console.log("Result",result.data)
            }).catch((err)=>{
              console.log(err)
            })

        }
        navi("/")
        alert("Login Sucess")
      }).catch((err) => {
        alert(err.response.data)
      })

  }

  return (
    <div className='logdiv'>
      <div className='svgwave'>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="55%" x2="100%" y2="45%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 109.21428571428572,352.92857142857144 218.42857142857144,405.85714285714283 354,390 C 489.57142857142856,374.14285714285717 651.4999999999999,289.5 782,252 C 912.5000000000001,214.5 1011.5714285714284,224.14285714285717 1116,240 C 1220.4285714285716,255.85714285714283 1330.2142857142858,277.92857142857144 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path></svg>      </div>
      <div className='logbox'>
        <Row>
          <div className='logindiv'>
            <Col className='logincol1'>
              <div className='logoname'>

                <div className='Lweldiv'><Image src={welcome1} className='welimg'/></div>
                {/* <div className='nameart'><Image src={artfloralogo} className='logartfloralogo'/></div> */}
                <div className='nameart'><Image src={emp} className='logartfloralogo'/></div>

                <div className='cartoon'><Image src={logoimg} className='carttonimg' /></div>

              </div>

            </Col>
          </div>
          <div>
            <Col className='logocol2'>
              <div className='logo'><BsPersonCircle /></div>
              <div>
                <Form className='loginform'>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control className='w-75' type='text' onChange={(e) => setuserEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className=''>Password:</Form.Label>
                    <Form.Control className='w-75' type='text' onChange={(e) => setuserPassword(e.target.value)} />
                  </Form.Group>

                  <div className='d-flex justify-content-end  w-75 mt-3'>Forget Password?</div>
                  <div className='w-75 d-flex justify-content-center mt-3'><Button onClick={() => loginuser()} className='w-100 d-flex justify-content-center' >Log In</Button></div>
                  <div className='mt-3 d-flex'><p>Don't Have an account?
                    <Link to='/Registration' onClick={() => navi('/Registration')}><b className='register'>Register</b></Link>
                  </p></div>

                </Form>
              </div>
            </Col>
          </div>


        </Row>
      </div>
    </div>
  )
}

export default Login