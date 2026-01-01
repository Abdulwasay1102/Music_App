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
            children:[{
                path:'sidebar',
                element:<Sidebar/>
            }]
        },
        {
            path:'/hollywood',
            element:<Hollywood/>
        },
          {
            path:'/bollywood',
            element:<Bollywood/>
        }
    ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Layout