import React, { useState } from 'react'
import '../style/Registration.css'
import { Button, Col, Form, Row, Image } from 'react-bootstrap'
import reg_img from '../images/img_reg1.jpg'
import requestInstance from '../Utils/axios_instances'
import { UserRegister } from '../Utils'
import { useDispatch, useSelector, userDispatch } from 'react-redux'
import { register } from '../Redux_work/UserSlice'
import Select from 'react-select'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'



const Registration = () => {

    const { UserData } = useSelector((state) => state.user)

    const [userName, setuserName] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userMobile, setuserMobile] = useState("")
    const [userPassword, setuserPassword] = useState("")
    const [userType, setuserType] = useState(-1)
    const navi = useNavigate()
    const dispatcher = useDispatch()


    function registerUser() {
        const userData = {
            name: userName,
            email: userEmail,
            pass: userPassword,
            mobile: userMobile,
            utid: userType
        }

        requestInstance().post(UserRegister, userData)
            .then((result) => {
                console.log(result.data)
                let userData = result.data.registerduser
                userData.idToken = result.data.token

                dispatcher(register(userData))
                if (userType == 0)
                    navi('/AddArtistprofile')
                else
                    navi('/AddCustomerProfile')

                alert("Registration Sucessful")
            }).catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <div className='svgwave'>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,350 0,350 C 118.93333333333334,389.6 237.86666666666667,429.2 397,402 C 556.1333333333333,374.8 755.4666666666667,280.79999999999995 936,261 C 1116.5333333333333,241.20000000000002 1278.2666666666667,295.6 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            </div>
            <div className='reg_div'>
                <Row>
                    <div className='register_div'>
                        <Col className='reg_col1'>
                            <div className='reg_name'><h1>Register Here</h1></div>
                            <div>
                                <Form className='reg_form'>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className='w-75' type='text' onChange={(e) => setuserName(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Mobile no</Form.Label>
                                        <Form.Control className='w-75' type='number' onChange={(e) => setuserMobile(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control className='w-75' type='email' onChange={(e) => setuserEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className=''>Password:</Form.Label>
                                        <Form.Control className='w-75' type='text' onChange={(e) => setuserPassword(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className=''>Type:</Form.Label>
                                        <Form.Select className='w-75' onChange={(e) => setuserType(e.target.value)}>
                                            <option>Select</option>
                                            <option value={0}>Artist</option>
                                            <option value={1}>Customer</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <div className='w-50 mt-3  regbutton' ><Button onClick={() => {
                                        registerUser()

                                    }} variant="outline-primary" className='w-100 d-flex justify-content-center'><h5>Register</h5></Button></div>
                                    <Link to="/Login" onClick={() => navi('/Login')}><p className='already'>Already login</p></Link>

                                </Form>
                            </div>
                        </Col>
                    </div>
                    <div className='blank_div'>
                        
                        <Col className='reg_col2'>
                            <div>
                            
                                <div><Image src={reg_img} className='regimg' /></div>

                            </div>

                        </Col>
                    </div>
                </Row>

            </div>
        </div>
    )
}

export default Registration