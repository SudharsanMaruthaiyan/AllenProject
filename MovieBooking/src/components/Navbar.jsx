import {Clapperboard,Menu,X} from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className=' flex items-center justify-between py-5 px-4 sm:px-[10%] fixed right-0 left-0 top-0 z-50 w-full shadow-2xl drop-shadow-2xl border-b backdrop-blur-sm bg-white/10 border-white/40' >
      <div >
        <a href="#home" className=' flex items-center gap-1 cursor-pointer'>
            <Clapperboard className=' fill-primary stroke-white ' />
            <p className=" font-bold md:text-2xl text-base text-white">Movies</p>
        </a>
      </div>

      {
        open ? 
        <X className=' stroke-white md:hidden block' onClick={()=>setOpen(false)} />
        :
        <Menu className=' stroke-white md:hidden block' onClick={()=>setOpen(true)} />
      }
      <div className={`${open ? 'absolute top-[69px] left-0 right-0' : ' absolute -top-[250px] left-0 right-0' } transition-all flex justify-center pl-5 shadow-2xl drop-shadow-2xl border-b backdrop-blur-2xl bg-white/20 border-white/40 py-3`}>
        <div className=''>
            <ul className=' flex flex-col items-center gap-8'>
                <li className=' font-semibold hover:border-b-primary hover:border-b-[3px] text-white'><a href="#home">Home</a></li>
                <li className=' font-semibold hover:border-b-primary hover:border-b-[3px] text-white'><a href="#movie">Movies</a></li>
                <li className='font-semibold hover:border-b-primary hover:border-b-[3px] text-white'><a href="#comming">Coming</a></li>
                <li className='font-semibold hover:border-b-primary hover:border-b-[3px] text-white'><a href="#footer">Newsletter</a></li>
            </ul>
        </div>
      </div>
      <div className=' md:block hidden'>
        <ul className=' flex items-center gap-8'>
            <li className=' font-semibold hover:border-b-primary hover:border-b-[3px] text-white'><a href="#home">Home</a></li>
            <li className=' font-semibold hover:border-b-primary hover:border-b-[3px] text-white'><a href="#movie">Movies</a></li>
            <li className='font-semibold hover:border-b-primary hover:border-b-[3px] text-white'><a href="#comming">Coming</a></li>
            <li className='font-semibold hover:border-b-primary hover:border-b-[3px] text-white'><a href="#footer">Newsletter</a></li>
        </ul>
      </div>
      <button className=' bg-primary text-white md:py-2 md:px-6 rounded-lg py-1 px-2 md:text-base text-sm'>Sign in</button>
    </div>
  )
}

export default Navbar