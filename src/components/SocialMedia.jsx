import React from 'react'
import {BsYoutube, BsInstagram, BsTwitter} from'react-icons/bs'
const SocialMedia = () => {
  return (
    <div className='flex flex-col gap-5 items-center'>
        <h1 className='mt-5 text-xl font-bold'>Our Social Media Links</h1>
        <div className='flex max-sm:flex-col gap-5 items-center mt-10 mb-10'>
           <a href="https://www.youtube.com/@manuel_friends2023/videos" target="_blank" rel="noopener noreferrer">
           <div className='Youtube w-[150px] h-[150px] bg-transparent border border-white rounded-lg cursor-pointer flex items-center justify-center'>
                <BsYoutube size={80}/>
            </div>
           </a>
           <a href="https://www.instagram.com/manuel_friends2023/" target="_blank" rel="noopener noreferrer">
           <div className='Instagram w-[150px] h-[150px] bg-transparent border border-white rounded-lg cursor-pointer flex items-center justify-center'>
                <BsInstagram size={80}/>
            </div>
           </a>
           
            <div className='Twitter w-[150px] h-[150px] bg-transparent border border-white rounded-lg cursor-pointer flex items-center justify-center'>
                <BsTwitter size={80}/>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia