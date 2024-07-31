import React, { useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import '../style/ArtAddart.css'
import axios from 'axios'
import { useSelector } from 'react-redux'


const ArtAddart = () => {
    const { userProfileData } = useSelector((state)=>state.user)
    const [Artname, setArtname] = useState()
    const [Artprice, setArtprice] = useState()
    const [Arttype, setArttype] = useState()
    const [Artframe, setArtframe] = useState()
    const [Artcanvas, setArtcanvas] = useState()
    const [Artimage, setArtimage] = useState()
    const [show, setshow] = useState(false)

    function uploadimage(e) {
        const data = new FormData()
        data.append("image", e.target.files[0])
        axios.post("http://localhost:5000/UploadImage", data)
            .then((result) => {
                console.log(result.data)
                setArtimage(result.data.filepath)
                alert("image uploaded")
            }).catch((err) => {
                console.log(err)
            })
    }


    function addartwork() {
        const Artwork = {
            artworkname: Artname,
            artworktype: Arttype,
            artworkprice: Artprice,
            artworkframesize: Artframe,
            artworkcanvastype: Artcanvas,
            artworkimage: Artimage,
            artistid: userProfileData._id

        }

        axios.post("http://localhost:5000/Addartwork", Artwork)
            .then((result) => {
                console.log(result.data)

            }).catch((err) => {
                console.log(err)
            })
    }


    function onShow() {
        setshow(true)
    }
    function onHide() {
        setshow(false)
    }




    return (
        <div className='addartdiv'>
            <Container>
                <Form className='w-75 addartform'>

                    <Form.Group className='d-flex'>
                        <Form.Label className='w-25'>ArtWork Name:</Form.Label>
                        <Form.Control className='w-50 ' type='text' onChange={(e) => setArtname(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='d-flex mt-4'>
                        <Form.Label className='w-25'>Artwork Type:</Form.Label>
                        <Form.Control className='w-50 ' type='text' onChange={(e) => setArttype(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='d-flex mt-4'>
                        <Form.Label className='w-25'>Artwork Frame Size:</Form.Label>
                        <Form.Control className='w-50' type='text' onChange={(e) => setArtframe(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='d-flex mt-4'>
                        <Form.Label className='w-25'>Artwork Canvas Type:</Form.Label>
                        <Form.Control className='w-50' type='text' onChange={(e) => setArtcanvas(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='d-flex mt-4'>
                        <Form.Label className='w-25'>Artwork Price</Form.Label>
                        <Form.Control className='w-50' type='Number' onChange={(e) => setArtprice(e.target.value)} />
                    </Form.Group>

                    <Form.Group className='d-flex mt-4'>
                        <Form.Label className='w-25'>Upload image</Form.Label>
                        <Form.Control className='w-25' size='sm' type='file' onChange={(e) => uploadimage(e)} />
                    </Form.Group>
                    <Button className='frmbtn' onClick={() => {
                        addartwork()
                        onShow()
                    }}>Submit</Button>


                </Form>
            </Container>
            <Modal show={show} className='modalart'>
                <Modal.Body>
                    <div className='modaldiv1'><h3 className='text-center'>ArtWork Uploaded Sucessfully</h3></div>
                    <div className='modaldiv2'><Button className='btnmodal' onClick={onHide}>Ok</Button></div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default ArtAddart