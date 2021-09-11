import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import HowItWorks from './HowItWorks'
import AboutUs from './AboutUs'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <>
     <Navbar/>
     <Header/>
     <HowItWorks/>
     <AboutUs/>
     <Services/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home;
