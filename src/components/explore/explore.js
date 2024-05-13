import { behindScene, secondimgae, thirdimage } from "../assests/assest";
import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';

import { Carousel } from 'primereact/carousel';


export default function Explore(){
    const imgData = [
        { image: behindScene },
        { image: secondimgae },
        { image: thirdimage },
        { image: behindScene },
        { image: secondimgae },
        { image: thirdimage },
        { image: behindScene },
        { image: secondimgae },
        { image: thirdimage }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (slide) => {
        return (
            <>
               <img src={slide.image} alt="explore" className=" group relative rounded-lg w-80 h-80 ml-5 hover:opacity-30" />
               <div className=" transition  text-center transform mt-16 
                translate-y-8 ease invisible    absolute group-hover:visible pr-10 m1-4
                text-white  group-hover:translate-y-0 rounded-full focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 ">
                <Fab variant="extended" color="secondary" >
                        {/* <NavigationIcon sx={{ mr: 1 , color:'secondary'}} /> */}
                                Enroll
                    </Fab> 
              </div>
            </>
        );
    };

    return (
        <div className=" mt-52 w-3/4 ">
            <h1 className="text-center ml-10 text-sky-700 font-subt text-4xl mb-10">
                Explore Recent Production
            </h1>
            <div className="grid place-content-center ml-72">
              <Carousel value={imgData} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate}  />
            </div>
            
        </div>
    );
}