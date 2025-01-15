import React from 'react'

const Newsletter = () => {
  return (
    <div className=' bg-secondary py-20'>
        <div>
            <h1 className=' text-center md:text-4xl text-base font-bold text-white'>Subscribe To Get <br /> Newsletter</h1>
            <div className=' flex justify-center w-full my-10'>
                <div className='bg-white rounded-lg py-3 px-6'>
                    <input className=' outline-none border-none ' type="text" name="" id="" placeholder='Carpool' />
                    <button className=' bg-primary text-white font-bold py-2 px-6 rounded-lg'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter