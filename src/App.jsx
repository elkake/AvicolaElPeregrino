import React, { useEffect } from 'react'
import MobileHeader from './layout/MobileHeader'
import MobileNav from './layout/MobileNav'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './layout/Home'
import Footer from './layout/Footer'
import LoadModal from './components/Load'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './modules/About'
import Products from './modules/Products'
import Recipes from './modules/Recipes'
function App () {
  // durante la carga el body no muestra scroll
  useEffect(() => {
    document.body.style = 'overflow-y:hidden'
    setTimeout(() => (document.body.style = ''), 2000)
  }, [])

  return (
    <div >
        <LoadModal/>
        <MobileNav />
      <ParallaxProvider>
        <MobileHeader/>
      </ParallaxProvider>
      <Routes>
        <Route path='/home' element={<Navigate replace to='/'/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/nosotros" element={<About/>}/>
        <Route path="/productos" element={<Products/>}/>
        <Route path="/recetas" element={<Recipes/>}/>
      </Routes>
      {/* <Main/> */}
      <Footer/>
    </div>
  )
}

export default App
