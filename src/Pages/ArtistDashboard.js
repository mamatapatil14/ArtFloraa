import React from 'react'
import '../style/ArtistDashboard.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ArtistProfile from './ArtistProfile';
import ArtistOrder from './ArtistOrder';
import ArtAddart from './ArtAddart';
import MyArtWork from './MyArtWork';

const ArtistDashboard = () => {
  return (
    <div className='artdashmain'>
      <div className='artdasd_main'>
        <div className='text-center' style={{
          "background":"black",
          "marginLeft":"-2rem",
          "width":"76vw",
          "borderRadius":"2rem",
          "color":"white"

        }}><h2>Artist Profile</h2></div>
        <div>
          <Tabs
            defaultActiveKey="artprofile"
            id="justify-tab-example"
            className="mb-3 "
            justify
          >
            <Tab eventKey="artprofile" title="Artist Profile" className='tabbg'>
              <ArtistProfile/>
            </Tab>
            <Tab eventKey="artorder" title="Orders">
            <ArtistOrder/>
            </Tab>
            <Tab eventKey="artartwork" title="Add ArtWork">
              <ArtAddart/>
            </Tab>
            <Tab eventKey="allartartwork" title="My ArtWork">
              <MyArtWork/>
            </Tab>

          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ArtistDashboard