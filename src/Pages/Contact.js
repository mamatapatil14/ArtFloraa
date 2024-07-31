import React, { useState } from 'react'
import '../style/Contact.css'
import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import { Slide } from "react-awesome-reveal";
import contact from '../images/contact.png';
// import cnt_img from '../images/cnt_img.png'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { MdAddCall } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import axios from 'axios';



function Contact() {

    const [Cfname, setfname] = useState("")
    const [Clname, setlname] = useState("")
    const [Cemail, setemail] = useState("")
    const [Cmessage, setCmessage] = useState("")
    const { userData } = useSelector((state) => state.user)




    function Sendquery(){
        const obj={
            fname:Cfname,
            lname:Clname,
            email:Cemail,
            message:Cmessage,
            userid:userData._id
        }
        axios.post("http://localhost:5000/Addquery",obj)
            .then((result)=>{
                alert('Query Suceessfuly send')
            }).catch((err)=>{
                console.log(err)
            })
    }

    return (
        <div className='Contact_Container'>
            <h1 className='headcontact'>Contact Us</h1>

            <div className='contact_div'>
                <Slide direction='left'>
                    <div>
                        <Image src={contact} className='contact_img' />
                        <div className='social_icon'>
                            <FaFacebook className='icons' />
                            <MdEmail className='icons' />
                            <MdAddCall className='icons' />
                            <AiFillInstagram className='icons' />
                        </div>
                    </div>
                </Slide>
            </div>

            <div className='contact_form'>
                <Slide direction='right'>

                    <div className='Contact_Form'>
                        <h6>Get in Touch</h6>
                        <h4><b>Have an inquiry or same feedback for us ?
                            fill out the form below to contact our team</b>
                        </h4>
                        <div>
                            <Form.Label className='Farm_Label'>First Name</Form.Label>
                            <Form.Control type='text' className="input" onChange={(e)=>setfname(e.target.value)} />
                            <Form.Label className='Farm_Label'>Last Name</Form.Label>
                            <Form.Control type='text' className="input" onChange={(e)=>setlname(e.target.value)} />
                            <Form.Label className='Farm_Label'>Email</Form.Label>
                            <Form.Control type='email' className="input" onChange={(e)=>setemail(e.target.value)} />
                            <Form.Label className='Farm_Label'>Massage</Form.Label>
                            <Form.Control className='input' as="textarea" rows={3} placeholder="Add your massage" onChange={(e)=>setCmessage(e.target.value)}/>
                            <button class="button-57" role="button" onClick={()=>Sendquery()}><span class="text">Get in Touch</span><span>Send Massage</span></button>

                        </div>

                    </div>
                </Slide>
            </div>



        </div>

    )
}

export default Contact
