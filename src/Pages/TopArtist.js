import React, { useEffect, useState } from 'react'
import '../style/TopArtist.css'
import {  Row, Col, Image, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


function TopArtist() {


  const [alltartist, setalltartist] = useState([])
  const navi = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/topartist")
      .then((result) => {
        console.log(result.data)
        setalltartist(result.data)
      }).catch((err) => {
        console.log(err)
      })


  }, [])


  const rate=[
    {
      "rate":4.8
    },
    {
      "rate":4.9
    },
    {
      "rate":4.7
    },
    {
      "rate":4.3
    },
    {
      "rate":4.5
    }
  ]


  const data=[
    {
      "des":"Making an beautiful paintings that very interasting topic"
    },
    {
      "des":"Making an beautiful Woolenart that very attractive"
    },
    {
      "des":"Making an beautiful craft  that very beautiful showing on wall"
    },
    {
      "des":"Making an beautiful Clay art that very people wants on website"
    },
    {
      "des":"Making an beautiful paintings that very interesting art"
    }
  ]
  return (
    <div className='maindiv'>
      <div className='atrbg'>
        <div className='tarttext'>
          <h1 className='tart_name'>Top Artist</h1>
          <p><b>This Artist aro on the top, Because its Artworks. That makes very beautiful  ART .<br />“Art washes away from the soul the dust of everyday life.”</b></p>
        </div>
        <div className='tartdiv'>
          <Row>
            {
              alltartist.map((art, idx) => {
                return (
                  <>

                    <Col className='tartcol1'>

                      <Card className='firstcontent'>
                        <div>
                          <Image src={`http://localhost:5000${art.Artistprofile}`} className='imgbord' />
                        </div>
                        <div className='text-center'>
                          <div className='mt-3'><h5><b>{art.Artistfullname}</b></h5></div>
                          <div><p>{data[idx].des}</p></div>
                        </div>
                        <div className='rating'>
                          {rate[idx].rate}<AiFillStar/>
                        </div>
                      </Card>

                      <Button className='cardbutton' onClick={() => {
                        navi('ArtistAllArt', { state: { allart: art._id, artistname: art.Artistfullname } })
                      }}>All ArtWorks</Button>

                    </Col>

                  </>
                )

              })
            }

          </Row>
        </div>
      </div>
      <div className='svgwave'>
      </div>

    </div>
  )
}

export default TopArtist

