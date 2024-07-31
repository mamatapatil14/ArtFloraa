import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const MyArtWork = () => {

  const { userProfileData } = useSelector((state) => state.user)
  const [allart, setallart] = useState([])


  useEffect(() => {
    const art={artistid:userProfileData._id}

    axios.post("http://localhost:5000/Artworkbyartistid", art)
      .then((result) => {
        setallart(result.data)

      }).catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      <div><h4>Total:&nbsp;&nbsp;({allart.length})</h4></div>
      <Row>
        {
          allart.map((art) => {
            return (
              <Col lg={3} md={4}>
                <Card >
                  <Card.Body>
                    <Card.Img src={`http://localhost:5000${art.Artworkimage}`} style={{"width":"210px","height":"210px","marginLeft":"0.6rem"}} />
                  </Card.Body>
                  <Card.Footer>
                  <div><h6>Name:&nbsp;{art.Artwokname}</h6></div>
                  <div><h6>Price:&nbsp;{art.ArtworkPrice}</h6></div>
                  <div><h6>Frame Size:&nbsp;{art.Artworkframesize}</h6></div>
                  <div><h6>Canvas Type:&nbsp;{art.Artworkcnvastype}</h6></div>
                  <div><Button >Delete</Button></div>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default MyArtWork