import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Header = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        customPaging:  () => (
        <div className='absolute -top-10 flex justify-center w-full'
            style={{
            width: "30px",
            color: "blue",
            }}
        >
            <p className=' w-2 h-2 rounded-full bg-white'></p>
        </div>),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
    <div className='max-w-[100%]' id='home'>
        <div className=" slider-container overflow-hidden">
            <Slider {...settings} className=' h-screen'>
                <div className=' relative w-full h-screen bg-[url(https://ik.imagekit.io/jjyo3gsee/Allen%20Project/home1.jpg?updatedAt=1736921244780)] bg-cover bg-center'> 
                    <div className='z-10 bg-black absolute top-0 w-full h-screen opacity-50 bottom-0'>
                    </div>
                    <div className=' absolute top-[33%] px-4 sm:px-[10%] z-50'>
                        <div className=' flex flex-col items-start gap-0'>
                            <p className=' font-bold text-[12px] md:text-lg text-white' >MARVEL UNIVERSE</p>
                            <p className=' text-white text-[60px] md:text-[60px] lg:text-[80px] leading-tight font-bold'>Venom: Let There <br /> Be Carnage</p>
                            <button className=' bg-primary text-white md:py-2 md:px-3 rounded-lg py-3 px-6 md:text-base text-base my-5'>Book Now</button>
                        </div>
                    </div>
                </div>

                <div className=' relative w-full h-screen bg-[url(https://ik.imagekit.io/jjyo3gsee/Allen%20Project/home2.jpg?updatedAt=1736921244755)] bg-cover bg-center'> 
                    <div className='z-10 bg-black absolute top-0 w-full h-screen opacity-50 bottom-0'>
                    </div>
                    <div className=' absolute top-[33%] px-4 sm:px-[10%] z-50'>
                        <div className=' flex flex-col items-start gap-0'>
                            <p className=' font-bold text-[12px] md:text-lg text-white' >MARVEL UNIVERSE</p>
                            <p className=' text-white text-[60px] md:text-[60px] lg:text-[80px] leading-tight font-bold'>Avengers:<br /> Infinity War </p>
                            <button className='bg-primary text-white md:py-2 md:px-3 rounded-lg py-3 px-6 md:text-base text-base my-5'>Book Now</button>
                        </div>
                    </div>
                </div>

                <div className=' relative w-full h-screen bg-[url(https://ik.imagekit.io/jjyo3gsee/Allen%20Project/home3.jpg?updatedAt=1736921244663)] bg-cover bg-center'> 
                    <div className='z-10 bg-black absolute top-0 w-full h-screen opacity-50 bottom-0'>
                    </div>
                    <div className=' absolute top-[33%] px-4 sm:px-[10%] z-50'>
                        <div className=' flex flex-col items-start gap-0'>
                            <p className=' font-bold text-[12px] md:text-lg text-white' >MARVEL UNIVERSE</p>
                            <p className=' text-white text-[60px] md:text-[60px] lg:text-[80px] leading-tight font-bold'>Spider-Man: <br /> Far from Home</p>
                            <button className=' bg-primary text-white md:py-2 md:px-3 rounded-lg py-3 px-6 md:text-base text-base my-5'>Book Now</button>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </div>
    </div>
  )
}

export default Header 