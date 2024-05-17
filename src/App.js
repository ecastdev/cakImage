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
import About from './components/About/about';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';


function App() {
  return(
    <div className='w-full h-full  bg-slate-300'>    
       <Navbarr/>
       <Outlet/>
       {/*  */}

       <div>
        footer
       </div>
    </div>
  );
}
export default App;
