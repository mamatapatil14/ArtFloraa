import React from 'react'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import TopArtist from '../Pages/TopArtist';
import TopAtwork from '../Pages/TopArtwork'
import NavBar from '../Layout/NavBar'
import Footer from '../Layout/Footer'


const Main = () => {
  return (
    <div>
      <NavBar />

      <section id='home'><Home /></section>
      <section id='about'><About /></section>
      <section id='topartist'><TopArtist /></section>
      <section id='topatwork'><TopAtwork /></section>
      <section id='contactus'><Contact /></section>

      <Footer />

    </div>
  )
}

export default Main