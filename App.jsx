import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/> 
                                  {/* OUtlet is used to change in between easuly take place  */}
       <Outlet/>         
     <Footer/>

    </>
  )
}

export default App
