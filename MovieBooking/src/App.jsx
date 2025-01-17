import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className=''>
      <ToastContainer/>
        <Navbar/>
        <div className=''>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/my-profile' element={<Profile/>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default App