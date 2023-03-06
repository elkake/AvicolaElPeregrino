import React from 'react'
import Parallax from '../components/Parallax'
import farm1 from '../svg/header/farm1.svg'
import farm2 from '../svg/header/farm2.svg'
import farm3 from '../svg/header/farm3.svg'
import farm4 from '../svg/header/farm4.svg'
import farm5 from '../svg/header/farm5.svg'
import farm6 from '../svg/header/farm6.svg'

function MobileHeader () {
  return (
    <div id='header_container'>
        <div id='header_container-mobile'>
          <picture className="parallax_picture">
            <img src={farm6} alt='El peregrino' />
          </picture>
          <Parallax start={-250} end={250} speed={-16} img={farm5}/>
          <Parallax start={-250} end={220} speed={-9} img={farm4}/>
          <Parallax start={-290} end={240} speed={-10} img={farm3}/>
          <Parallax start={-320} end={250} speed={-5} img={farm2}/>
          <picture className="parallax_picture picture_main">
            <img src={farm1} alt='El peregrino' />
          </picture>
        </div>
    </div>
  )
}

export default MobileHeader
