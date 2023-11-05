/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/LandingPage/Hero'
import Carosel from '../components/LandingPage/Carousel'
import Footer from '../components/common/Footer'
import Stats from '../components/LandingPage/Stats'
import Feature1 from '../components/LandingPage/Feature1'
import Feature2 from '../components/LandingPage/Feature2'
import Feature3 from '../components/LandingPage/Feature3'
import Feature4 from '../components/LandingPage/Feature4'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className='flex flex-col items-center md:mx-[150px] mt-[100px]'>
        <Feature1 />
        <Feature2 />
        <Feature3/>
        <Feature4/>
        {/* <Carosel /> */}
      </div>
      <Stats />
      <Footer/>
    </div>
  )
}

export default LandingPage
