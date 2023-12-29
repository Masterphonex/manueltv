import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialMedia from '../components/SocialMedia'
import Videos from '../components/Videos'

const Home = () => {
  return (
    <div className='bg-[#200504] w-[100vw] text-white'>
        <Navbar />
     <div className='w-[100vw] flex flex-col items-center px-10'>
     <Hero />
        <SocialMedia />
        <Videos />
     </div>
    </div>
  )
}

export default Home