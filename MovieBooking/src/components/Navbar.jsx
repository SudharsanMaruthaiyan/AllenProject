import {Clapperboard,Menu,X} from 'lucide-react'
import { useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Appcontexted';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {token, loadUserProfile, userData, setUserData, logout} = useContext(AppContext)
    const navigate =  useNavigate()

    useEffect(()=>{
      if(token){
        loadUserProfile()
      }
      else{
        setUserData(false)
      }
    },[token])

    console.log(userData)

  return (
    <div className=' flex items-center justify-between py-5 px-4 sm:px-[10%] fixed right-0 left-0 top-0 z-50 w-full shadow-2xl drop-shadow-2xl border-b backdrop-blur-sm bg-white/10 border-white/40' >
      <div onClick={()=>navigate('/')}>
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
      {
        token && userData ? 
            <div className=' flex items-center gap-2 cursor-pointer group relative'>
              <div className=' flex items-center gap-2'>
                <div className=''>
                  <img className='w-8 h-8 rounded-full' src={userData.image} alt="profile imag3" />
                </div>
                <p className=' text-white'>{userData.name}</p>
              </div>
                <div className=' group-hover:block hidden absolute top-0 left-0 pt-10 text-base font-medium z-20'>
                  <div className='min-w-48 rounded flex flex-col gap-4 p-4 '>
                      <p onClick={()=> navigate('/my-profile')} className=' hover:text-primary text-white cursor-pointer'>My Profile</p>
                      <p onClick={logout} className=' hover:text-primary cursor-pointer text-white'>Logout</p>
                  </div>
                </div>  
            </div>
            :
          <button className=' bg-primary text-white md:py-2 md:px-6 rounded-lg py-1 px-2 md:text-base text-sm' onClick={()=>navigate('/register')}>Sign in</button> 
      }
    </div>
  )
}

export default Navbar