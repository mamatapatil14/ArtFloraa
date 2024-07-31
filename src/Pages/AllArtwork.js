
import React, { useEffect, useState } from 'react'
import '../style/AllArtwork.css'
import axios from 'axios'
import { Button, Col, Modal, Row, Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Allart_view from './Allart_view'
import { addItem } from '../Redux_work/UserSlice'



const AllArtwork = () => {

    const [allartworks, setallartworks] = useState([])
    const [show, setshow] = useState(false)
    const [showview, setshowview] = useState(false)
    const [Dataview, setDataview] = useState({})
    const [Viewart, setViewart] = useState({})

    const dispatcher=useDispatch()

    function onshow() {
        setshow(true)
    }
    function onhide() {
        setshow(false)
    }
    function onshowview() {
        setshowview(true)
    }
    function onhideview() {
        setshowview(false)
    }

    useEffect(() => {
        axios.get("http://localhost:5000/Allartwork")
            .then((result) => {
                
                setallartworks(result.data)
            }).catch((err) => {
                console.log(err)
            })


    }, [])

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
        <div>
            <div className='Allhead'><h2>ARTWORKS</h2></div>

            <div className='d-flex'>
                <div><p className='filter'>Filter By:</p></div>
                <div className='all_drp'>
                    <select className='w-100'>
                        <option>--Select--</option>

                    </select>
                </div>
            </div>
            
            <Row className='w-100 all_row'>
                {
                    allartworks.map((allart) => {
                        return (
                            <Col lg={3} className='all_col'>
                                <div>
                                    <img src={`http://localhost:5000${allart.Artworkimage}`} className='all_img' />
                                </div>
                                <div className='all_content'>
                                    <p className='d-flex m-auto'><h5>{allart.Artwokname}</h5>,&nbsp;({allart.Artworkcnvastype})</p>
                                    <p className='d-flex m-auto'><h6>Type:</h6>&nbsp;{allart.Artworktype}</p>

                                    <p className='d-flex m-auto'><h6>Frame size:</h6>&nbsp;{allart.Artworkframesize}&nbsp;inch</p>
                                    {/* <p className='d-flex m-auto'><h6>Artist name:</h6>&nbsp;{allart.Artistid.Artistfullname}</p> */}
                                    <h5>&#8377;{allart.ArtworkPrice}&nbsp;/-</h5>


                                </div>
                                <div className='ms-5'>
                                    <Button onClick={() => {
                                        setDataview(allart)
                                        setViewart(allart.Artistid)
                                        onshowview()
                                    }}>View</Button>&nbsp;&nbsp;
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

            <Modal show={show} className='all_modal'>
                <h4 className='text-center'>Successfuly added in cart</h4>
                <Button className=' btnhide' onClick={() => onhide()}>OK</Button>

            </Modal>

            <Allart_view show={showview} view={Dataview} hide={onhideview} artistview={Viewart}/>

        </div>
    )
}

export default AllArtwork