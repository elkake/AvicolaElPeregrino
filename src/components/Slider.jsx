import React, { useRef, useEffect } from 'react'
import './Slider.css'
import img1 from '../image/recipes/milanesaNapolitana.jpg'
import img2 from '../image/recipes/arrolladoDePollo.jpg'
import img3 from '../image/recipes/polloAlDisco.jpg'

function Slider () {
  const elementRef = useRef()

  useEffect(() => {
    const intervalo = setInterval(() => {
      right()
    }
    , 6000)
    return () => clearInterval(intervalo)
  }, [])
  const right = () => {
    // obtengo el primer elemento
    const primerElemento = elementRef.current.children[0]
    if (primerElemento) {
      setTimeout(() => {
        elementRef.current.style = `
        transition:all 0.3s cubic-bezier(0.165,0.84,0.44,1);    
        margin-left: -66.6%;
        `
      }
      , 5000)
      elementRef.current.insertAdjacentElement('beforeend', primerElemento)

      elementRef.current.style = `
      transition:none
      margin-left: -66.6%;
      `
    }
  }

  return (
    <>
    <div className='slider_container'>
          <div className='slider_container-flexbox' ref={elementRef}>
                <picture className="container_slider-card" id='selector-2'>
                    <img src={img1} alt="" />
                </picture>
                <picture className="container_slider-card" id='selector-0'>
                    <img src={img2} alt="" />
                </picture>
                <picture className="container_slider-card" id='selector-1'>
                    <img src={img3} alt="" />
                </picture>
            </div>
    </div>
    </>
  )
}

export default Slider
