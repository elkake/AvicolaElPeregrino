import React from 'react'
import MobileHeader from './layout/MobileHeader'
import MobileNav from './layout/MobileNav'
import { ParallaxProvider } from 'react-scroll-parallax'
import Body from './layout/Main'
function App () {
  return (
    <div>
        <MobileNav />
      <ParallaxProvider>
        <MobileHeader/>
      </ParallaxProvider>
      <Body/>
    </div>
  )
}

export default App
