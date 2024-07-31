import axios from 'axios'
import React from 'react'
import '../style/TopArtwork.css'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { Slide } from 'react-awesome-reveal'
import { addItem } from '../Redux_work/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProtectedRoute from '../Layout/ProtectedRoute'
import {AiFillStar} from 'react-icons/ai'



const TopArtwork = () => {


  const [allartwork, setallartwork] = useState([])
  const { userData } = useSelector((state) => state.user)
  const { isLogedin } = useSelector((state => state.user))


  const dispatcher = useDispatch()
  const navi = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/topartwork")
      .then((result) => {
        console.log('data:', result.data)
        setallartwork(result.data)
      }).catch((err) => {
        console.log(err)
      })


  }, [])

  // function AddToCart(art) {
  //   const cartobj = {
  //     artworkname: art.Artwokname,
  //     artworkprice: art.ArtworkPrice,
  //     artworkimage: art.Artworkimage,
  //     artworkprice: art.ArtworkPrice,
  //     artistid: art.Artistid,
  //     artworkframesize: art.Artworkframesize,
  //     artworkcanvastype: art.Artworkcnvastype,
  //     artworkquantity: 1,
  //     userid: userData._id,
  //   }
  //   axios.post("http://localhost:5000/AddCrtItem", cartobj)
  //     .then((result) => {
  //       console.log(result.data)
  //     }).catch((err) => {
  //       console.log(err)
  //     })

  // }


  const art=[
    {
        name:"This art is the made from small glasses and see to very attractive"
    },{
        name:"Making from craft that is very beautiful and its naturatic craft"
    },
    {
        name:"Beautiful box for showcase,Maaking from craft and pins"
    },{
        name:"making a beautiful flower from craft that very beautiful"
    }
    
]

  return (
    <div className='artw_div'>
      <div className='artw_svg'>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 140.8,234 281.6,268 452,246 C 622.4,224 822.4000000000001,146 992,129 C 1161.6,112 1300.8,156 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
      </div>
      <div className='artw_card'>
        <div className='artw_name'><h1>Top ArtWork</h1></div>
        <Row>
          {
            allartwork.map((artw, idx) => {
              return (
                <Col lg={3} class>

                  <div className="artwcard">
                    <Image src={`http://localhost:5000${artw.Artworkimage}`} className='Guide_Image' />
                    <div className="card_content">
                      <span className="card_title"><h4><b>{artw.Artwokname}</b></h4></span>
                      <span className="card_subtitle"><h5>{art[idx].name}</h5></span>
                      <span className="card_description"><h5><b>Price:&nbsp;&#8377;{artw.ArtworkPrice}/-</b></h5></span>
                      <span className="card_description"><h5><b>Type:&nbsp;{artw.Artworktype}</b></h5></span>
                      <div className='artrating'>
                          4.9&nbsp;<AiFillStar/>
                        </div>
                      <span><Button onClick={() => {
                        dispatcher(addItem(artw))
                        // <ProtectedRoute isSignin={isLogedin}>

                          // AddToCart(artw)
                        // </ProtectedRoute> 

                      }}>Add to Cart</Button></span>
                    </div>
                  </div>

                </Col>
              )
            })
          }
        </Row>

      </div>
      <Button className='More_artwork' onClick={() => navi('/AllArtwork')}>More
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div></Button>


    </div>
  )
}

export default TopArtwork