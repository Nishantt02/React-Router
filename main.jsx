import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './Components/Home/Home.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import {  githubInfoLoader } from './Components/Github/Github.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
               path:'Contact',
               element:<Contact/>
      },
      {
        path:'user/:userid',
        element:<User/>
      },
      {
        
        path: 'github',
        element: <Github />,
        loader: githubInfoLoader          // it is used to access the api of the fetch data 
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>           
                                            {/* //here it is working by calling the router */}
  </StrictMode>,
)
