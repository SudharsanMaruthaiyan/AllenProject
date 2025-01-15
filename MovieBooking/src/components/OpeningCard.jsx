import React from 'react'

const OpeningCard = ({name, category, time, image}) => {
  return (
    <div>
        <img src={image} alt="movie_image" className=' md:h-[300px] lg:h-[430px]' />
        <p className=' text-white font-bold'>{name}</p>
        <div className='flex items-center'>
            <p className=' text-white text-sm'>{time} | </p> |   
            <p className=' text-white text-sm'> {category}</p>
        </div>
    </div>
  )
}

export default OpeningCard