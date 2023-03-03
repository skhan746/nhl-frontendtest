import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chatbot from './pages/Chatbot';
import Jupyter from './pages/Jupyter';



import { 
  
  createBrowserRouter,
  RouterProvider,
   
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App /> ,
  },
  {
    path:"chatbot",
    element:<Chatbot /> ,
  },

  {
    path:"jupyter",
    element:<Jupyter /> ,
  },

  
]);


//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <>
 
    <RouterProvider router={router} />
  
  </>,

  document.getElementById('root')

);
