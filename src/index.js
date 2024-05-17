import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { orange, purple } from '@mui/material/colors';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import ErrorPage from './error';
import Aboutrout from './components/About/aboutrout';
import Contact from './components/contact/contact';
import Services from './components/services/services';
import App2 from './app2';
import FilmMaking from './components/landingRout/filmMaking';
import MusicvideoShooting from './components/landingRout/musicvideoshoooting';
import VideoShooting from './components/landingRout/videoshooting';
import Weddingshooting from './components/landingRout/weddingshooting';
import FourKshoooting from './components/landingRout/4kphotos';

// import { NextUIProvider } from '@nextui-org/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
// theme
const theme = createTheme({
  palette:{
    primary:{
      main: 'rgb(52, 11, 44)',
    },
    secondary:{
      main: 'rgb(21, 85, 145)', 
    }
  }
}

)
 const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <App2/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'about',
        element: <Aboutrout/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'contact',
        element: <Contact/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'services',
        element: <Services/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'filmMaking',
        element: <FilmMaking/>,
        errorElement: <ErrorPage/>
        
      },
      {
        path: 'musicvideoshooting',
        element: <MusicvideoShooting/>,
        errorElement: <ErrorPage/>
        
      },
      {
        path: 'videoshooting',
        element: <VideoShooting/>,
        errorElement: <ErrorPage/>
        
      },
      {
        path: 'weddingshooting',
        element: <Weddingshooting/>,
        errorElement: <ErrorPage/>
        
      },
      {
        path: '4kphotos',
        element: <FourKshoooting/>,
        errorElement: <ErrorPage/>
        
      },
      
    ]
  }
 ])
root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
       
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
