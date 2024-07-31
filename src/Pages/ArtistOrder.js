import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Card, Button, Col, Row, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArtistOrderDetails from './ArtistOrderDetails'

const ArtistOrder = () => {


  const { userProfileData } = useSelector((state) => state.user)
  const [Allord, setAllord] = useState([])
  const [show, setshow] = useState(false)


  const [idxdata, setidxdata] = useState({})
  const [Orderitems, setOrderitems] = useState([])
  const [OrderCustDetail, setOrderCustDetail] = useState({})
  const [ordData, setordData] = useState({})

  function onShow() {
    setshow(true)
  }

  function onHide() {
    setshow(false)
  }

  useEffect(() => {
    axios.get("http://localhost:5000/Allorder")
      .then((result) => {
        console.log("order",result.data)
        
        // const data1=
        // console.log("order2",data1)
        setAllord(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      
      <Row className=" h-100 mt-3">
        

      <div><h4>Total:&nbsp;&nbsp;({Allord.length})</h4></div>
        {
          Allord.map((ord, idx) => {
            return (
              <Col lg={3} md={4}>
                <Card className='mt-3 cardord mb-3'>
                  <Card.Body>
                    <div><h6><b>OrderID:</b>{ord._id}</h6></div>
                    <div className='' ><h6><b>Order Date:</b>{(ord.Orderdate).slice(0, 10)}</h6></div>
                    <div><h6><b>Order Amount:</b>{ord.Orderamount}</h6></div>
                    <div><h6><b>Items:</b>1</h6></div>
                    <div><h6><b>Order status:</b>{ord.Orderstatus}</h6></div>
                    <Button variant='outline-info'
                      onClick={() => {
                        setidxdata(ord)
                        // console.log("data1:",idxdata)
                        setOrderitems(ord.OrderItems)
                        // console.log("data:",idxdataitems)
                        setOrderCustDetail(ord.Customerid)
                        setordData(ord)
                        onShow()
                      }}
                    >Order Details</Button>

                  </Card.Body>

                </Card>
              </Col>
            )
          })
        }
      </Row>

      <ArtistOrderDetails Orderitems={Orderitems} OrdCusDeatil={OrderCustDetail} allorder={ordData} show={show} hide={onHide}/>
    </div>
  )
}

export default ArtistOrder