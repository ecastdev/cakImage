import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { orange, purple } from '@mui/material/colors';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ErrorPage from './error';

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
