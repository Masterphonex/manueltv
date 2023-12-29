import React from 'react'
import logo from '../assets/logo.png'
import {BsYoutube, BsInstagram} from'react-icons/bs'
 
const Navbar = () => {
  return (
    <div className='px-10 py-5 flex justify-between items-center'>
        <img src={logo} className='w-[60px]'/>

        <ul className='flex gap-10 items-center'>
          <a href="https://www.youtube.com/@manuel_friends2023" target='_blank'>
          <BsYoutube size={25}/>

          </a>
          <a href="https://www.instagram.com/manuel_friends2023/" target="_blank" rel="noopener noreferrer">
          <BsInstagram size={25}/>

          </a>
        </ul>
    </div>
  )
}

export default Navbar