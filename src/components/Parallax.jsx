import { useParallax } from 'react-scroll-parallax'
import React from 'react'

function Parallax (props) {
  console.log(props.start)
  const parallax = useParallax({
    startScroll: props.start,
    endScroll: props.end,
    speed: props.speed
  })
  return (
        <>
      <picture ref={parallax.ref} className="parallax_picture">
        <img src={props.img} alt='El peregrino' />
    </picture>
        </>
  )
}

export default Parallax
