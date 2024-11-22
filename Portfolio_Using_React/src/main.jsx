import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import Techskills from './components/Techskills/Techskills.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='Techskills' element={<Techskills />} />
        
      </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



