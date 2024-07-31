import React from 'react'
import { Modal, Button, Image } from 'react-bootstrap'
import '../style/Allart_view.css'
const Allart_view = ({ show, view, hide ,artistview}) => {

  return (
    <div>
      <Modal show={show} size='lg' className='modalview'>
        <div className='modaldiv' >
          <div className='  modaldiv_img'>
            <Image src={`http://localhost:5000${view.Artworkimage}`} className='modal_image' />
          </div>
          <div className='modaldiv_data'>
            <p className='d-flex m-auto'><h3>{view.Artwokname},&nbsp;</h3><p style={{"fontSize":"1.4rem"}}>({view.Artworkcnvastype})</p></p>
            <p className='d-flex m-auto'><h4>Type:</h4>&nbsp;<p style={{"fontSize":"1.4rem"}}>{view.Artworktype}</p></p>

            <p className='d-flex m-auto'><h4>Frame size:</h4>&nbsp;<p style={{"fontSize":"1.4rem"}}>{view.Artworkframesize}&nbsp;inch</p></p>
            <p className='d-flex m-auto'><h4>Price:</h4>&nbsp;<p style={{"fontSize":"1.4rem"}}>&#8377;{view.ArtworkPrice}&nbsp;/-</p></p>
            <p className='d-flex m-auto'><h4>Artist name:</h4>&nbsp;<p style={{"fontSize":"1.4rem"}}>{artistview.Artistfullname}</p></p>
            <p className='d-flex m-auto'><h4>Artist Address:</h4>&nbsp;<p style={{"fontSize":"1.4rem"}}>{artistview.Artistaddress},&nbsp;{artistview.City}</p></p>

            <Button className='btnclose' onClick={()=>hide()}>Close</Button>

          </div>
        </div>

      </Modal>
    </div>
  )
}

export default Allart_view