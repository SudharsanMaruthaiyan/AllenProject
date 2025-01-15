import React from 'react'
import { openingApi } from '../api/openingApi'
import OpeningCard from './OpeningCard'

const Opening = () => {
  return (
    <div className=' bg-secondary px-4 sm:px-[10%] pt-24' id='movie'>
        <div>
            <h1 className=' font-bold text-white text-base md:text-2xl'>OPENING THIS WEEK</h1>
            <hr className=' bg-primary h-[2px] w-full outline-none border-none' />
        </div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
            {
                openingApi.map((e,index)=>(
                    <>
                        <div key={index}>
                            <OpeningCard name={e.name} image={e.image} category={e.category} time={e.time}/>
                        </div>
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default Opening