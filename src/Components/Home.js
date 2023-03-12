import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';

const Home = () => {
  const data={
    name:"Store",
  }
  return (
    <>
    <HeroSection myData={data}/>
    <Services/>
    <Trusted/>
    </>
  )
}

export default Home
