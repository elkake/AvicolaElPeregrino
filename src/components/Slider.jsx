import React, { useRef, useContext, useEffect } from 'react'
import './Slider.css'
import img1 from '../image/recipes/milanesaNapolitana.jpg'
import img2 from '../image/recipes/arrolladoDePollo.jpg'
import img3 from '../image/recipes/polloAlDisco.jpg'
import { Context } from '../context/context'

function Slider () {
  const { contador, setContador } = useContext(Context)

  const elementRef = useRef()

  useEffect(() => {
    const intervalo = setInterval(() => {
      right()
    }
    , 6000)
    return () => clearInterval(intervalo)
  }, [contador])
  const right = () => {
    if (contador === 2)setContador(-1)
    // obtengo el primer elemento
    const primerElemento = elementRef.current.children[0]

    setTimeout(() => {
      elementRef.current.style = `
      transition:all 0.3s cubic-bezier(0.165,0.84,0.44,1);    
    margin-left: -66.6%;
    `
    }
    , 5500)
    elementRef.current.insertAdjacentElement('beforeend', primerElemento)
    setContador(e => e + 1)
    console.log(contador)

    elementRef.current.style = `
    transition:none
    margin-left: -66.6%;
    `
  }

  const left = () => {
    if (contador === 0)setContador(3)
    // obtengo el primer elemento
    const ultimoElemento = elementRef.current.children[2]
    // mandar el primer elmento al ultimo lugar
    elementRef.current.insertAdjacentElement('afterbegin', ultimoElemento)
    setContador(e => e - 1)
    console.log(contador)
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
            <div className='slider_container-button'>
            <button className='slider_button slider_button-right' onClick={right}>&gt;</button>
                <button className='slider_button slider_button-left' onClick={left}>&lt;</button>
            </div>
    </>
  )
}

export default Slider
