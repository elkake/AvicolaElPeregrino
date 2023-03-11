import React, { useEffect, useState, useRef } from 'react'
import './DinamicGallery.css'

// recibe 4 imagenes que se  muestra en un tiempo diferente

// cambiar el color de borde de .gallery>picture
function DinamicGallery ({ img1, img2, img3, img4, img5, animacion = false, bordeColor = '#000' }) {
  const [seconds, setSeconds] = useState(0)
  const element1 = useRef()

  useEffect(() => {
    const globlaInterval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 2500)

    // llamamos a los picture y a image
    element1.current.childNodes.forEach(e => (
      e.children[0].style = `
      transform:scale(1);
      filter: grayScale(100%);
      z-index: 0;
      `)
    )

    // estilando las imagenes
    element1.current.childNodes[seconds].children[0].style = `
    transform:scale(1.05);
    filter: grayScale(0%);
    `

    if (animacion === true) {
    // definir estilos de la animacion

      element1.current.childNodes.forEach(e => (e.style = `
    animation:none;
    z-index: 0;
    border-color: #0005
    `))

      let estilo = ''
      if (seconds === 4) {
        estilo = `
    animation:lastItem 1s ease;
    z-index: 0;
    border-color: #0005
    `
      } else
      if (seconds % 2 === 0) {
        estilo = `
    animation:left 1s ease;
    z-index: 0;
    border-color: #0005
    `
        // cuando es impar inicia la animacion a la dere
      } else {
        estilo = `
      animation:right 1s ease;
      z-index: 0;
      border-color: #0005
      `
      }

      element1.current.childNodes.forEach(e => (e.style = estilo))

      element1.current.childNodes[seconds].style = `
    border-color: ${bordeColor};
    z-index: 10;
    `
    }
    return () => clearInterval(globlaInterval)
  }, [seconds])

  // reiniciamos el contador por el numero de imagenes
  if (seconds > 4)setSeconds(0)

  return (
    <div ref={element1} className='gallery'>

        <picture>
          <img src={img1} alt="El peregrino avicola bahia blanca" />
          </picture>
        <picture>
          <img src={img2} alt="El peregrino avicola bahia blanca" />
          </picture>
        <picture>
          <img src={img3} alt="El peregrino avicola bahia blanca" />
          </picture>
        <picture>
          <img src={img4} alt="El peregrino avicola bahia blanca" />
          </picture>
        <picture>
          <img src={img5} alt="El peregrino avicola bahia blanca" />
          </picture>
    </div>
  )
}

export default DinamicGallery
