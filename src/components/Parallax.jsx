import { useParallax } from 'react-scroll-parallax'
import React from 'react'

function Parallax ({ start, end, speed, img, alt = 'El Peregrino', nameClass = 'parallax_picture' }) {
  const parallax = useParallax({
    startScroll: start,
    endScroll: end,
    speed
  })
  return (
        <>
      <picture ref={parallax.ref} className={nameClass}>
        <img src={img} alt={alt} />
    </picture>
        </>
  )
}

export default Parallax
