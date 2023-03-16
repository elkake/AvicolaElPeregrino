import React, { useEffect, useRef, useState } from 'react'
import ButtonAction from '../components/ButtonAction'
import menuIcon from '../svg/icons/chickenEggOpen.svg'
import closeIcon from '../svg/icons/chickenEgg.svg'
import { Link } from 'react-router-dom'

function MobileNav () {
  const [show, setShow] = useState(false)
  const navModal = useRef()
  useEffect(() => {
    if (show) {
      navModal.current.style = `
      right:0;`
    } else {
      navModal.current.style = `
      right:-100%`
    }
  }, [show])

  // mostrar modal menu
  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div id='mobileNav_container'>
        <nav ref={navModal}>
          <picture></picture>
          <Link to="/" onClick={toggleShow}>INICIO</Link>
          <Link to='/nosotros' onClick={toggleShow}>NOSOTROS</Link>
          <Link to='/productos' onClick={toggleShow}>PRODUCTOS</Link>
          <Link to='/recetas' onClick={toggleShow}>RECETES</Link>
          <a href="#footer" onClick={toggleShow}>CONTACTANOS</a>
        </nav>
        <a className='mobileNav_banner' href="#mobileNav_container">EL PEREGRINO</a>

        <ButtonAction event={toggleShow}>
            <img src={(show) ? menuIcon : closeIcon} alt="Menu el peregrino" />
        </ButtonAction>
    </div>
  )
}

export default MobileNav
