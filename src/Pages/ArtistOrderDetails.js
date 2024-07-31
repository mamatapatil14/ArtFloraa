import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ArtistOrderDetails = (props) => {
  return (
    <div >
        <Modal size='xl' show={props.show} className='w-100'  >
        <Modal.Body>
          <div>
            <div><h5>Order Details</h5></div>
            <div>
              <table>
                <tr>
                  <td><h6><b>Order ID:</b></h6></td>
                  <td>:</td>
                <td>{props.allorder._id}</td>
                </tr>
                <tr>
                  <td><h6><b>Order Date:</b></h6></td>
                  <td>:</td>
                  <td>{props.allorder.Orderdate}</td>
                </tr><tr>
                  <td><h6><b>Total Amount</b></h6></td>
                  <td>:</td>
                  <td>{props.allorder.Orderamount}/-</td>
                </tr><tr>
                  <td><h6><b>Total items:</b></h6></td>
                  <td>1</td>
                </tr><tr>
                  <td><h6><b>Shipping Address:</b></h6></td>
                  <td>:</td>
                  <td>At-post Bhusawal Bhusawal Maharashtra 425305</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <div><h5>Artwork Details</h5></div>
            <div>
              <table className='table table-striped border border-3 rounded-2 '>
                <tr>
                  <th>Item summary</th>
                  <th>Qunatity</th>
                  <th>Price</th>
                  <th>Total price</th>
                </tr>
                <tbody>
                  {
                    props.Orderitems.map((art) => {
                      return (
                        <tr>
                          <td lg={3}><img src={`http://localhost:5000${art.Art.Artworkimage}`} className='img' />{art.Art.Artwokname}</td>
                          <td>{art.qty}</td>
                          <td>{art.Art.ArtworkPrice}/-</td>
                          <td>{art.total}/-</td>
                         
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>


            </div>
          </div>
          <div>
            <div><h5>Customer Details</h5></div>
            <div>
            <table className=''>
              <tr className='mt-5'>
                <td><b>Cuatomer Name</b></td>
                <td>:</td>
                <td>{props.OrdCusDeatil.Customername}</td>
              </tr>
              <tr>
                <td><b>Cuatomer Mobile No</b>:</td>
                <td>:</td>
                <td>{props.OrdCusDeatil.Customermobno}</td>
              </tr>
              <tr>
                <td><b>Cuatomer Email:</b></td>
                <td>:</td>
                <td>{props.OrdCusDeatil.Email}</td>
              </tr>
              <tr>
                <td><b>Cuatomer Address</b></td>
                <td>:</td>
                <td>
                  {props.OrdCusDeatil.Customeraddress}&nbsp;
                  {props.OrdCusDeatil.City}&nbsp;
                  {props.OrdCusDeatil.State}&nbsp;
                  {props.OrdCusDeatil.Pincode}
                </td>
              </tr>
            </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.hide}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ArtistOrderDetails