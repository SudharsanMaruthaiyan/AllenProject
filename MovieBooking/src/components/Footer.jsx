import React from 'react'
import {Clapperboard,Facebook, Twitter, Instagram, Music2} from 'lucide-react'

const Footer = () => {
  return (
    <div className=' bg-secondary px-4 sm:px-[10%] pb-10' id='footer'>
      <div className=' flex justify-between items-center' >
        <div>
            <a href="#home" className=' flex items-center gap-1 cursor-pointer'>
                <Clapperboard className=' fill-primary stroke-white ' />
                <p className=" font-bold md:text-2xl text-base text-white">Movies</p>
            </a>
        </div>
        <div className=' flex items-center gap-3 cursor-pointer'>
            <Facebook className=' stroke-primary  bg-white p-3 rounded-full w-12 h-12' />
            <Twitter className=' stroke-primary  bg-white p-3 rounded-full w-12 h-12'/>
            <Instagram className=' stroke-primary  bg-white p-3 rounded-full w-12 h-12'/>
            <Music2 className=' stroke-primary  bg-white p-3 rounded-full w-12 h-12'/>
        </div>
      </div>
      <p className=' text-center text-white pt-20'>@copy Sudharsan All Right Reserved</p>
    </div>
  )
}

export default Footer