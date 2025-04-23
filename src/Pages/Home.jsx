import React from 'react'
import NavBar from '../comp/NavBar'
import Footer from '../comp/Footer'
import Carousel from '../comp/Carousel'
import GridCard from '../comp/GridCard'


const Home = () => {
  return (
    <>
    <NavBar />
    <br />
    <Carousel />
    
    <GridCard />

    <br />
   
    <Footer />
    </>
  )
}

export default Home