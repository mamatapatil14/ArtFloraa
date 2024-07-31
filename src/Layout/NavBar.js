import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Button, Image, Badge } from 'react-bootstrap'
import { Link } from 'react-scroll'
import './NavBar.css'
import { RiHome7Fill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { FaBookReader } from 'react-icons/fa';
import { BsPostcardHeartFill } from 'react-icons/bs';
import { RiUserHeartFill } from 'react-icons/ri'
import { FaShoppingCart } from 'react-icons/fa'
import artflorabg from '../images//artflorabg.png'
import emp from '../images/emp.png'

import Btnlog from '../Pages/Btnlog';
import Btncart from '../Pages/Btncart';
import Profileuser from '../Pages/Profileuser';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';




const NavBar = () => {

    const [scrollchangecolor, setscrollchangecolor] = useState(false);
    const { isLogedin } = useSelector((state => state.user))


    const changeBackground = () => {
        if (window.scrollY >= 250) {
            setscrollchangecolor(true);

        } else {
            setscrollchangecolor(false);

        }
    };

    window.addEventListener("scroll", changeBackground);



    return (
        <div>
            <Navbar className={
                scrollchangecolor
                    ? 'Site-Navigation active' : 'Site-Navigation'} collapseOnSelect fixed='top' expand='lg' >
                <Container>
                    {/* <Navbar.Brand ><Image src={artflorabg} className='artlogo' /></Navbar.Brand> */}
                    <Navbar.Brand ><Image src={emp} className='artlogo' /></Navbar.Brand>

                    <Navbar.Toggle aria-controls='responsive-nav-bar' />
                    <Navbar.Collapse id-controls='responsive-nav-bar' >
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <Link to='home' className='mlink mfont' spy={true} offset={-100} duration={100}><b><i><h5><RiHome7Fill /> Home </h5></i></b></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='about' className='mlink mfont' spy={true} offset={-10} duration={100}><b><i><h5><FaBookReader /> About</h5></i></b></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='topartist' className='mlink mfont' spy={true} offset={-68} duration={100}><b><i><h5><RiUserHeartFill /> TopArtist</h5></i></b></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='topatwork' className='mlink mfont' spy={true} offset={-68} duration={100}><b><i><h5><BsPostcardHeartFill /> TopAtwork</h5></i></b></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='contactus' className='mlink mfont' spy={true} offset={-68} duration={100}><b><i><h5><BsPostcardHeartFill /> Contact Us</h5></i></b></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Btncart />
                            </Nav.Link>
                            <Nav.Link className=' mlink mfont'>
                                {/* <ProtectedRoute isSignin={isLogedin}> */}
                                    <Profileuser />
                                {/* </ProtectedRoute> */}
                            </Nav.Link>
                            <Nav.Link className='logbtn mlink mfont'>
                                <Btnlog />
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </div>
    )
}

export default NavBar