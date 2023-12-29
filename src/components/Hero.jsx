import React from 'react'
import logo from '../assets/logo.png'
import {HiArrowDown} from 'react-icons/hi'
const Hero = () => {
  return (
    <div className="hero w-[100vw] h-[85vh] flex flex-col items-center justify-center gap-5">
    <img src={logo} className='w-[130px] sm:w-[200px]'/>
    <h1 className='font-bold text-xl'>Welcome to <span className='text-orange-500'>Manuel Tv</span></h1>
    <p className='text-center'>Keep Scrolling to Know more About us <br /> and to Watch more Funny Videos</p>
    <HiArrowDown  size={20} className='mt-10'/>
    </div>
  )
}

export default Hero