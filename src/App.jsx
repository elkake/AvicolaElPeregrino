import React from 'react'
import MobileHeader from './layout/MobileHeader'
import MobileNav from './layout/MobileNav'
import { ParallaxProvider } from 'react-scroll-parallax'
import Main from './layout/Main'
import Footer from './layout/Footer'
function App () {
  return (
    <div>
        <MobileNav />
      <ParallaxProvider>
        <MobileHeader/>
      </ParallaxProvider>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
