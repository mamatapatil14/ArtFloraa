import React, { useEffect, useState } from 'react'
import { Row,  Col, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../style/Cart.css'
import { useNavigate } from 'react-router-dom'
import {calculateTotal,  decreqty, increqty} from '../Redux_work/UserSlice'
import {MdDelete} from 'react-icons/md'



const Cart = () => {
    const { CartItems, CartTotalAmt, ItemCount } = useSelector((state) => state.user)
    // const { userData } = useSelector((state) => state.user)
    const dispatcher = useDispatch()
    const navi=useNavigate()
    dispatcher(calculateTotal())
    
    

    return (
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
                        const iid=item._id
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
                                            <Button  onClick={()=>dispatcher(decreqty({iid}))}>-</Button>
                                            <h5 className='m-1'>{item.qty}</h5>
                                            <Button  onClick={()=>dispatcher(increqty({iid}))}>+</Button>

                                        </div>
                                    </Col>
                                    <Col lg={2} className='d-flex'>
                                        <h5 className='ms-5'> &#8377;&nbsp;{item.subtotal}</h5>
                                        <div className='delbtn'><MdDelete /></div>
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
                    <p>&#8377;&nbsp;{CartTotalAmt}&nbsp;
                    </p>

                </div>
                <div className='d-flex justify-content-between qtydetai'>
                    <p>Total Quantity:</p>
                    <p >&nbsp;{ItemCount}</p>
                </div>
                <hr/>
                <div className='btnplace'>
                    <Button onClick={()=>navi('/Placeorder')}>Checkout</Button>
                </div>

            </div>


        </div>
    )
}

export default Cart