import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App