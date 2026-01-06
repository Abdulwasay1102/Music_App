import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home'
import Sidebar from '../../components/Sidebar'
import Hollywood from '../../pages/Hollywood'
import Bollywood from '../../pages/Bollywood'

const Layout = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Home/>,
        },
        {
          path:'/category/:term',
          element:<Home/>
        }
    ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Layout