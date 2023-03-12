import React, { useState, useEffect } from 'react'
import MobileHeader from './layout/MobileHeader'
import MobileNav from './layout/MobileNav'
import { ParallaxProvider } from 'react-scroll-parallax'
import Main from './layout/Main'
import Footer from './layout/Footer'
import LoadModal from './components/Load'

function App () {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <div>
        {loading && <LoadModal/>}
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
