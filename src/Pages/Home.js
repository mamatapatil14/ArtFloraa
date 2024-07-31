import React from 'react'
import '../style/Home.css'
import { Carousel, Col, Image, Row } from 'react-bootstrap'
import pencils from '../images/pencils.png'
import paint from '../images/paint.png'
import woolen from '../images/woolen.png'
import craft from '../images/carft.png'
import paint2 from '../images/paint2.png'
import artbg1 from '../images/homebg.png'
import artbg2 from '../images/artbg2.png'
import artbg4 from '../images/woolenbg.png'
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'

const Home = () => {
  return (
    <div className='hmain'>
      <div className='carasoul_div'>
        <Carousel className='carasoul' >

          <Carousel.Item interval={3000} className='cara'>

            <Image src={artbg1} className='caraimg' />
            <Carousel.Caption>
              <h4 className='Carousel-home1'><ImQuotesLeft className='quotes'/>A TRUE ARTIST IS NOT ONE WHO IS INSPIRED BUT ONE WHO INSPIRES OTHERS<ImQuotesRight className='quotee'/></h4>

            </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item interval={3000} className='cara'>
            <Image src={artbg4} className='caraimg' />
            <Carousel.Caption>
              <h4 className='Carousel-home2'><ImQuotesLeft className='quotes'/>ART WILL REMAIN THE MOST ASTONISHING ACTIVITY OF MANKIND BORN OUT OF STRUGGLE BETWEEN WISDOM AND MADNESS<ImQuotesRight className='quotee'/></h4>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000} className='cara'>
            <Image src={artbg2} className='caraimg' />
            <Carousel.Caption>
              <h4 className='Carousel-home3'><ImQuotesLeft className='quotes'/>A TRUE ARTIST IS NOT ONE WHO IS INSPIRED BUT ONE WHO INSPIRES OTHERS<ImQuotesRight className='quotee'/></h4>

            </Carousel.Caption>
          </Carousel.Item>



        </Carousel>

      </div>
      <div className='divtext'>

        <div className='svgwave'>
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 158.93333333333334,225.46666666666667 317.8666666666667,200.93333333333334 487,219 C 656.1333333333333,237.06666666666666 835.4666666666667,297.73333333333335 996,310 C 1156.5333333333333,322.26666666666665 1298.2666666666667,286.1333333333333 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
        </div>
        <div className='home_carddiv'>
          <div className='home_card1'>
            <Image src={pencils} className='cardimg' />
          </div>
          <div className='home_card2'>
            <Image src={paint} className='cardimg' />
          </div>
          <div className='home_card3'>
            <Image src={woolen} className='cardimg' />
          </div>
          <div className='home_card4'>
            <Image src={craft} className='cardimg' />
          </div>
          <div className='home_card5'>
            <Image src={paint2} className='cardimg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home