import React, { useState } from 'react'
import { openingApi } from '../api/openingApi'
import OpeningCard from './OpeningCard'

const Opening = () => {
    const [search, setSearch] = useState("")

    const filterMovies = openingApi.filter((movie)=>(
        movie.Title.toLowerCase().includes(search.toLowerCase())
    ))

  return (
    <div className=' bg-secondary px-4 sm:px-[10%] pt-24' id='movie'>
        <div>
            <div className='md:flex items-center justify-between md:flex-nowrap'>
                <h1 className=' font-bold text-white text-base md:text-2xl'>OPENING THIS WEEK</h1>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    className="py-3 rounded-full my-2 outline-none pl-5 md:block hidden"
                    placeholder="Search Here..."
                />
            </div>

            <hr className=' bg-primary h-[2px] w-full outline-none border-none' />
        </div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
            {(search === "" ? openingApi : filterMovies).map((e, index) => (
                <>
                    <div key={index}>
                        <OpeningCard Language={e.Language} Genre={e.Genre} imdbRating={e.imdbRating} id={e.imdbID} name={e.Title} image={e.Poster} category={e.Type} time={e.Runtime}/>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default Opening