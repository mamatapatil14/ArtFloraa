import React from 'react'
import '../style/Footer.css'
import { Link } from 'react-scroll'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import artfloralogo from '../images/artflorabg.png'
import emp from '../images/emp.png'
import { Image } from 'react-bootstrap'

function Footer() {
  return (

    <div className="pg-footer">
      <footer className="footer">
        <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>
        <div className='pgcontent'>
          <div className='pgcontent1'>
            {/* <Image src={artfloralogo} className='artfloralogo'/> */}
            <Image src={emp} className='artfloralogo'/>

          </div>
          <div className='pgcontent2'>
              <h3>Menu</h3>
              <ul  >
                <li><Link to='home'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='topartist'> Top Artist</Link></li>
                <li><Link to='topatwork'>Top ArtWork</Link></li>
                <li><Link to='contactus'>Contact Us</Link></li>
                
              </ul>
          </div>
          {/* <div className='pgcontent3' >
              <h3>Help</h3>
              <ul>
                <li><Link to=''>payment</Link></li>
                <li><Link to=''>Cancellation and Returns</Link></li>
                <li><Link to=''>FAQ</Link></li>
              </ul>

          </div> */}
          <div className='pgcontent4'>
              <h3>Connect with Us</h3>
              <ul>
                <li><Link to=''><FiInstagram/>&nbsp;&nbsp;Instagram</Link></li>
                <li><Link to=''><AiOutlineFacebook/> &nbsp;&nbsp;Fcebook</Link></li>
                <li><Link to=''><FiTwitter/> &nbsp;&nbsp;Twiter</Link></li>
              </ul>
          </div>
          <div className='pgcontent5'>
              <h3>Registered Office</h3>
              <p className='mt-3'>364  Travasso Mansion, <br/> Sitla Devi Temple, Road Mahim Mumbai,Pune,400016,India</p>
              <p>Telephone no:890-8867867</p>
              <p>Emial:- abc123@artflora.com</p>
          </div>
        </div>
        
      </footer>
      <div className='pgdown'>
      <b>copy©2023. | All rights reserved.</b>
      </div>
    </div>

  )
}

export default Footer