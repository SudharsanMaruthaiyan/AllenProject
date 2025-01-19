import React from 'react'
import { useNavigate } from 'react-router-dom'

const OpeningCard = ({name, category, time, image, id,imdbRating ,Genre,Language}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>{navigate(`/detail/${id}`);scrollTo(0,0) }} className=' border hover:scale-105 transition-all'>
        <img src={image} alt="movie_image" className=' md:h-[300px] lg:h-[300px] rounded-lg  shadow-2xl shadow-primary' />
        <div className=' px-3 pb-4' >
          <p className=' text-white font-bold pt-4 md:text-xl'>{name}</p>
          <div className='flex items-center'>
              <p className=' text-white text-sm'>Duration: {time} | </p> |   
              <p className=' text-white text-sm'> Type: {category}</p>
          </div>
          <p className=' text-white text-sm'> Rating: {imdbRating}</p>
          <p className=' text-white text-sm'> Genre: {Genre}</p>
          <p className=' text-white text-sm'> Language: {Language}</p>

        </div>
    </div>
  )
}

export default OpeningCard