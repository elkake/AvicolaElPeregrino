import React from 'react'
import ButtonAction from '../components/ButtonAction'
import menuIcon from '../svg/icons/menu.svg'
function MobileNav () {
  return (
    <div id='mobileNav_container'>
        <a className='mobileNav_banner' href="#header">EL PEREGRINO</a>
        <ButtonAction>
            <img src={menuIcon} alt="Menu el peregrino" />
        </ButtonAction>
    </div>
  )
}

export default MobileNav
