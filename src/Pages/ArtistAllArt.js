import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import '../style/ArtistAllArt.css'
import { addItem } from '../Redux_work/UserSlice'



const ArtistAllArt = () => {


  const [allartworks, setallartworks] = useState([])
  const [show, setshow] = useState(false)
  const dispatcher = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const obj = { artistid: location.state.allart }
    axios.post("http://localhost:5000/Artworkbyartistid", obj)
      .then((result) => {
        console.log("artisrart",result.data)
        setallartworks(result.data)
      }).catch((err) => {
        console.log(err)
      })


  }, [])

  function onshow() {
    setshow(true)
  }
  function onhide() {
    setshow(false)
  }
  

  


  return (
    <div>
       <div className='Allhead' ><h2>ARTWORKS</h2></div>
      <Row className='w-100 allartist_row'>
        {
          allartworks.map((allart) => {
            return (
              <Col lg={3} className='allartist_col'>
                <div>
                  <img src={`http://localhost:5000${allart.Artworkimage}`} className='allartist_img' />
                </div>
                <div className='allartist_content'>
                  <p className='d-flex m-auto'><h5>{allart.Artwokname}</h5>,&nbsp;({allart.Artworkcnvastype})</p>
                  <p className='d-flex m-auto'><h6>Type:</h6>&nbsp;{allart.Artworktype}</p>

                  <p className='d-flex m-auto'><h6>Frame size:</h6>&nbsp;{allart.Artworkframesize}&nbsp;inch</p>
                  <h5>&#8377;{allart.ArtworkPrice}&nbsp;/-</h5>


                </div>
                <div className='ms-5'>
                  <Button onClick={() => {
                    dispatcher(addItem(allart))
                    onshow()
                  }}>Add to Cart</Button>
                </div>



              </Col>
            )
          })
        }
      </Row>

      <Modal show={show} className='allartist_modal'>
        <h4 className='text-center'>Successfuly added in cart</h4>
        <Button className=' artistbtnhide' onClick={() => onhide()}>OK</Button>

      </Modal>




    </div>
  )
}

export default ArtistAllArt