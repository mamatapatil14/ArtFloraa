import React, { useEffect, useState } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, calculateTotal ,clearCart} from '../Redux_work/UserSlice'
import axios from 'axios'



const PlaceOrder = () => {

    const {CartItems, CartTotalAmt, ItemCount ,userProfileData}=useSelector((state)=>state.user)
    const dispatcher = useDispatch()

    dispatcher(calculateTotal())


    function AddOrder(){
        let finalitems=[]

        CartItems.map((crt)=>finalitems.push({Art:crt._id,qty:crt.qty,total:crt.subtotal}))
        const orderdata={
            orderamount:CartTotalAmt,
            ordertotal:ItemCount,
            orderstatus:"pending",
            customerid:userProfileData._id,
            orderitems:finalitems
        }

        axios.post("http://localhost:5000/Addorder",orderdata)
        .then((res)=>{
            
            dispatcher(clearCart())
            alert("Order Placed")
        }).catch((err)=>{
            console.log(err)
        })

        console.log("total",finalitems)
    }


   


    return (
        <div>
            <div className='maincart'>

                <div className='cartdiv'>
                    <div>
                        <h3>Shopping Cart</h3>
                        <div className='cart_head'>
                            <div className='head_1'>Items</div>
                            <div className='head_2'>Description</div>
                            <div className='head_3'>Quantity</div>
                            <div className='head_4'>Price</div>
                        </div>

                        <hr />
                    </div>
                    <div>
                        {
                            CartItems.map((item) => {
                                const iid = item._id
                                return (
                                    <Row>
                                        <Col lg={3}>
                                            <Image src={"http://localhost:5000".concat(item.Artworkimage)} className='cartimg' />

                                        </Col>
                                        <Col lg={4}>
                                            <div className='ms-4'>
                                                <h5 className='cartdescrp'>{item.Artwokname}</h5>
                                                <h6><b>Type: &nbsp;</b>{item.Artworktype}</h6>
                                                <h6><b>Frame size: &nbsp;</b>{item.Artworkframesize}</h6>
                                                <h6><b>Canvas Type:&nbsp;</b>{item.Artworkcnvastype}</h6>
                                                <h6><b>Price:&nbsp;&#8377;</b>{item.ArtworkPrice}/-</h6>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className='ms-5 d-flex'>
                                                <h5 className='ms-5'>{item.qty}</h5>

                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            <h5 className='ms-5'> &#8377;&nbsp;{ item.subtotal}/-</h5>
                                        </Col>

                                        <hr className='mt-4' />
                                    </Row>

                                )
                            })


                        }
                    </div>
                </div>
                <div className='vertical'></div>
                <div className='total_cart'>
                    <h3>Price Details</h3>
                    <hr />
                    <div className='d-flex justify-content-between pricedetai'>
                        <p >Total Product Price</p>
                        <p>&#8377;&nbsp;{CartTotalAmt}&nbsp;/-</p>

                    </div>
                    <div className='d-flex justify-content-between qtydetai'>
                        <p>Total Quantity:</p>
                        <p>&nbsp;{ItemCount}</p>
                    </div>
                    <hr />
                    <div className='btnplace'>
                        <Button onClick={()=>AddOrder()}>Place Order</Button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default PlaceOrder