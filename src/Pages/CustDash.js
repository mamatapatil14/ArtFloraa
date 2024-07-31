import React, { useEffect, useState } from 'react'
import { Container, Image, Table } from 'react-bootstrap'
import '../style/CustDash.css'
import { useSelector } from 'react-redux'
import axios from 'axios'

const CustDash = () => {

  const { userProfileData } = useSelector((state) => state.user)
  const [allord, setallord] = useState([])




  useEffect(() => {
    const obj = { customerid: userProfileData._id }
    axios.post("http://localhost:5000/Orderbtcustomerid", obj)
      .then((result) => {
        console.log("data:", result.data)
        setallord(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])













  return (
    <div className='CustMaindiv '>

      <div className='Custdiv'>
        <div className='Chead'><h2 className='text-center pt-1'>Customer Profile</h2></div>

        <div className='d-flex'>
          <div className='Cusdiv1'>
            <div className='cusinfo_div'>
              <Image src={`http://localhost:5000${userProfileData.Profile}`} className='cusimg' />


              <table className='custable' >
                <tr className='tablerow'>
                  <td className='w-50'><h5> Name</h5></td>
                  <td className='w-25'><h5>:</h5></td>
                  <td className='w-25'><h6>{userProfileData.Customername}</h6></td>
                </tr>
                <tr className='tablerow'>
                  <td className='w-50'><h5>Address:</h5></td>
                  <td className='w-25'><h5>:</h5></td>
                  <td className='w-25'><h6> Adarsh&nbsp;Chauck&nbsp;{userProfileData.Customeraddress}</h6></td>
                </tr>
                <tr className='tablerow'>
                  <td className='w-50'><h5>State</h5></td>
                  <td className='w-25'><h5>:</h5></td>
                  <td className='w-25'><h6>{userProfileData.State}</h6></td>
                </tr>
                <tr className='tablerow'>
                  <td className='w-50'><h5>Pincode</h5></td>
                  <td className='w-25'><h5>:</h5></td>
                  <td className='w-25'><h6>{userProfileData.Pincode}</h6></td>
                </tr>
                <tr className='tablerow'>
                  <td className='w-50'><h5>DOB</h5></td>
                  <td className='w-25'><h5>:</h5></td>
                  <td className='w-25'><h6>{userProfileData.Dob}</h6></td>
                </tr>
                <tr className='tablerow'>
                  <td className='w-50'><h5>Email</h5></td>
                  <td className='w-25'><h5>:</h5></td>
                  <td className='w-25'><h6>{userProfileData.Email}</h6></td>
                </tr>
                <tr className='tablerow'>
                  <td className='w-50'><h5>Mobile No</h5></td>
                  <td className='w-25'><h5>:</h5></td>
                  <td className='w-25'><h6>{userProfileData.Customermobno}</h6></td>
                </tr>
                <tr className='tablerow'>
                  <td className='w-50'><h5>Total Orders</h5></td>
                  <td className='w-25'><h5>:</h5></td>
                  <td className='w-25'><h6>{allord.length}</h6></td>
                </tr>
              </table>

            </div>
          </div>
          <div className='Cusdiv2'>
            <h4>Orders:&nbsp;({allord.length})</h4>
            <Table className='Cusordtable table table-striped'>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th >Product</th>
                <th >Total Price</th>

              </tr>
              <tbody>
                {
                  allord.map((ord) => {
                    return (
                      <tr>
                        <td>{(ord.Orderdate).slice(0, 10)}</td>
                        <td>{ord.Orderstatus}</td>
                        <td>
                        <tr>
                          <th className='w-'></th>
                          
                          <th className='w-50 '></th>
                       
                          <th className='w-25'>Quantity</th>
                          <th className='w-25'>Price</th>
                        </tr>
                        <tbody>

                          {
                            ord.OrderItems.map((item) => {
                              return (
                                <tr >
                                  <td ><Image src={`http://localhost:5000${item.Art.Artworkimage}`} className='itemimg' /></td>
                                  <td> <b className='ps-4'>{item.Art.Artwokname}</b></td>
                                  <td ><b>qty&nbsp;:&nbsp;</b>{item.qty}</td>
                                  <td >&#8377;{item.Art.ArtworkPrice}&nbsp;/-</td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                        </td>
                        <td style={{"textalign":"cenetr","paddingTop":"4rem"}}>
                        &#8377;{ord.Orderamount}&nbsp;/-
                          
                        </td>

                      </tr>
                    )
                  })
                }

              </tbody>
            </Table>


          </div>

        </div>
      </div>
    </div>
  )
}

export default CustDash