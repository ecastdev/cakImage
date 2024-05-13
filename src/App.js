import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Outlet} from 'react-router-dom';
import  { useState } from 'react';
import Navbarr from './components/navbar/navbar';
import Landing from './components/Landing/landing';
import Landing2 from './components/Landing/landing2';
import Choose from './components/choose/choose';
import Explore from './components/explore/explore';
import Encounter from './components/encounter/encouinter';


function App() {
  return(
    <div className='w-full h-full  rounded-bl-3xl'>    
       <Navbarr/>
       <div id='landing' className='flex bg-hero bg-center bg-no-repeat bg-cover h-screen items-center justify-around'>
            <div className='mt-10'>
              <Landing/>
            </div>
            {/* the image */}
            <div className='mt-10'>
              <Landing2/>
            </div>
       </div>
       {/* choose us */}
       <Choose/>
       {/* explore */}
       <div className='grid place-content-center'>
         <Explore/>


       </div>
       
       {/* encounter our services */}
       <Encounter/>
      
    </div>
  );

}
export default App;
