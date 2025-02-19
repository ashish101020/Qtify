import React from 'react'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Album from '../Album/Album';

const Home = () => {
  

  
  return (
    <>
    <Navbar />
    <Hero/>
    <Album title={"Top Albums"} Package={"albums/top"} genre={false}/>
    <Album title={"New Albums"} Package={"albums/new"} genre={false}/>
    <Album title={"Songs"} Package={"songs"} genre={true}/>
    </>
  )
}

export default Home