import React, { useEffect, useState } from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid';

const HeroSlideShow = () => {
    const[slide, setSlide] = useState(0);

    // useEffect=(() => {
    //     setTimeout(() => setSlide(slide - 100), 1000);
    // });

  return (
    <section className="text-black mt-3 items-center justify-center">
        <div className="relative flex items-center w-full h-auto space-x-6 box-border p-0 m-0">
            <div className="min-w-fit h-auto transition-all duration-300" style={{transform: `translateX(${slide}%)`}}>
                <img className="rounded-md" src='/heroslideshow-technodev.jpg' alt='' />
            </div>
            <div className="min-w-fit h-auto transition-all duration-300" style={{transform: `translateX(${slide}%)`}}>
                <img className="rounded-md" src='/heroslideshow-rrr.jpg' alt='' />
            </div>
            <div className="min-w-fit h-auto transition-all duration-300" style={{transform: `translateX(${slide}%)`}}>
                <img className="rounded-md" src='/heroslideshow-alanwalker.jpg' alt='' />
            </div>
            <button
                onClick={() => {slide === 0? setSlide(-200) : setSlide(slide + 100)}}
                className="absolute top-1/5 -left-1 w-12 h-10 bg-black opacity-50 rounded-md hover:opacity-70">
                <ChevronLeftIcon className="h-10 text-gray-100 ml-3" />
            </button>
            <button
                 onClick={() => {slide === -200? setSlide(0) : setSlide(slide - 100)}}
                className="absolute top-1/5 -right-1 w-12 h-10 bg-black opacity-50 rounded-md hover:opacity-70">
                <ChevronRightIcon className="h-10 text-gray-100 mr-3" />
            </button>
            <div className="absolute bottom-4 items-center justify-center left-1/2 flex flex-row space-x-4">

                <span 
                    onClick={() => setSlide(0)} 
                    className={`h-2 w-2 ${slide === 0? "bg-white" : "bg-gray-700 opacity-50"}  rounded-full cursor-pointer`}></span>
                <span
                    onClick={() => setSlide(-100)}
                    className={`h-2 w-2 ${slide === -100? "bg-white" : "bg-gray-700 opacity-50"} rounded-full cursor-pointer`}></span>
                <span
                    onClick={() => setSlide(-200)} 
                    className={`h-2 w-2 ${slide === -200? "bg-white" : "bg-gray-700 opacity-50"} rounded-full cursor-pointer`}></span>
            </div>
        </div>
    </section>
  )
}

export default HeroSlideShow;
