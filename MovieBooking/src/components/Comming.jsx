import React from 'react'
import { commingApi } from '../api/commingApi'
import CommingCard from './CommingCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comming = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className=' bg-secondary px-4 sm:px-[10%] pt-24 overflow-hidden' id='comming'>
        <div>
            <h1 className=' font-bold text-white text-base md:text-2xl'>COMMING SOON</h1>
            <hr className=' bg-primary h-[2px] w-full outline-none border-none' />
        </div>
        <div className=' pt-10'>
            <Slider {...settings}>
                {
                    commingApi.map((e,index)=>(
                        <>
                            <div key={index}>
                                <CommingCard name={e.name} image={e.image} category={e.category} time={e.time}/>
                            </div>
                        </>
                    ))
                }

            </Slider>
        </div>
    </div>
  )
}

export default Comming