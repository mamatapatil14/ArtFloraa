import React from 'react'
import '../style/About.css'
import { Col, Row, Image } from 'react-bootstrap'
import AboutImg from '../images/about_img.png'
import graph from '../images/graph.png'
import {MdAddCall} from 'react-icons/md'
import { Slide } from 'react-awesome-reveal'

const About = () => {
    return (
        <div className='About_div'>

            <div>
                <Row>
                    <Col>
                        <div className='grapn_img'>
                            <Slide direction='right'>
                            <Image src={graph} className='graph_overlap'/>

                            </Slide>
                        </div>
                        <div className='about_img'>
                            <Slide direction='left'>
                            <Image src={AboutImg} className='About_Img' />

                            </Slide>
                        </div>
                    </Col>
                    <Col>
                        <div >
                            <h1 className='About_Name'>About Us</h1>
                        </div>
                        <div className='About_line'></div>
                        <div className='About_text'>
                            <div>
                                <p>Welcome to "Art Flora"! We are a passionate team dedicated to 
"Our mission is to provide a dynamic online platform that connects artists, 
art enthusiasts, and collectors, fostering a thriving community centered around the appreciation and promotion of art.
 Our goal is to Through this website disabled people will get livelihood and confidence.
                                </p>
                                <p className='mt-5'>
                                    <h5>
                                    <i>The primary purpose of an artwork website is to connect artists with a broader audience, provide exposure for their creations, and facilitate art sales.</i>
                                    </h5>
                                </p>
                                <p className='d-flex'><MdAddCall className='call_logo'/> <h3><b>+91(234)567-8976</b></h3></p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About