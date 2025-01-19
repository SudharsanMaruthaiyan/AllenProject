import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { openingApi } from '../api/openingApi'

const DetailsPage = () => {
    const {id} = useParams()
    const [movie, setMovie]= useState("")
    // const movie = openingApi.find((movie) => movie.id === parseInt(id, 10)); // Replace `openingApi` with your actual data source
    // const movie = openingApi[id -1]
    // console.log(movie);

    // const [lmovie, setLmovie] = useState([])

    // const fetchData = async ()=>{
    //     try {
            
    //         const response = await axios.get("https://jsonfakery.com/movies/paginated" )

    //         setLmovie(response.data.data)
    //         console.log("mmmmm", lmovie)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(()=>{
        // fetchData()
        openingApi.map((item)=>{
            if(item.imdbID == id){
                setMovie(item)
            }
        })
    },[])


    const image = movie?.Images || []

  return (
    <div className='pt-[80px] text-white bg-secondary px-4 sm:px-[10%]'>
        <div className=' relative'>
          <img src={movie.Poster} alt="banner" className='w-full md:h-[630px] bg-cover opacity-20 lg:block hidden' />
          <div className=''>
            <div className=' lg:absolute lg:bottom-0 flex lg:flex-nowrap items-center flex-wrap lg:gap-10'>
                <div className="movie-details md:p-5 lg:w-1/2" >
                    <img className=' w-full md:w-[400px] rounded-lg shadow-md shadow-primary border hover:scale-105 transition-all' src={movie.Poster} alt={movie.name} />
                    <h1 className=' text-2xl font-bold text-center py-3 text-primary'>{movie.Title}</h1>
                </div>
                <div className=' w-full'>
                  <p className=' text-2xl md:text-[40px] font-bold'>{movie.Title}</p>
                  <p className=' text-sm py-2'>{movie.Awards}</p>
                  <hr className=' my-3 w-full' />
                  <div className=' flex items-center gap-3 md:flex-nowrap flex-wrap'>
                    <p>Rating: {movie.imdbRating}</p> |
                    <p>Status: {movie.Released}</p> |
                    <p>Duration: {movie.Runtime}</p>
                  </div>
                  <hr className=' my-3' />
                  <div>
                    <p className=' text-2xl font-bold'>OverView</p>
                    <p>{movie.Plot}</p>
                  </div>
                  <hr  className=' w-full my-3'/>
                  <div className=' flex items-center md:flex-nowrap flex-wrap gap-2'>
                    <p>Language: {movie.Language}</p> |
                    <p>Release Date: {movie.Released}</p> |
                    <p>Type: {movie.Type}</p>
                  </div>
                  <hr  className=' w-full my-3'/>
                  <div className=' flex items-center gap-2 md:flex-nowrap flex-wrap'>
                    <p ><span className=' font-semibold pr-1'>Director:</span>{movie.Director}</p> |
                    <p>Writer: {movie.Writer}</p> |
                    <p>Type: {movie.Type}</p>
                  </div>
                  <hr  className=' w-full my-3'/>
                  <div>
                    <p><span className=' font-bold pr-1' >Genre:</span>{movie.Genre}</p>
                  </div>
                  <hr  className=' w-full my-3'/>
                  <div>
                    <p className=' flex flex-wrap'><span className=' font-bold pr-1' >Actors:</span>{movie.Actors}</p>
                  </div>

                  <div className=' grid md:grid-cols-5 grid-cols-1 gap-2 mb-32 md:mb-0 '>
                      {
                        image.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Breaking Bad ${index + 1}`}
                            className=' md:w-[140px] md:h-[100px] rounded-lg my-3 mb-5 hover:scale-105 transition-all hover:border-2'
                          />
                        ))
                      }
                  </div>
                </div>
            </div>


          </div>
        </div>
        
    </div>
  )
}

export default DetailsPage