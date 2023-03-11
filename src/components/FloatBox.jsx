import React, { useRef, useEffect } from 'react'
import './FloatBox.css'
function FloatBox ({ width = 350, height = 100, nameClass = '', perspective = 580, scale = 1.05, image = '#', alt = '', dinamic = true }) {
  const test = useRef()
  let heightBox
  let widthBox

  useEffect(() => {
    // alto y ancho de la caja
    heightBox = test.current.clientHeight
    widthBox = test.current.clientWidth

    test.current.style = `  transition:box-shadow 0.4s linear,transform 0.3s linear;
    min-height: ${height}px;
       width:${width}px;
    `
  }, [])

  const movimiento = (e) => {
    if (!dinamic) return
    // obtenemos los pixeles en los que esta el mouse dentro del cuadro
    // 0 -500 en x - 0 - 400 en y
    const { layerX, layerY } = e.nativeEvent

    // formula para dividar el ancho y alto en 10 unidades
    // layer va de 0 - 350
    // widthbox=350px
    // ((100-175)/350)) *20
    const yRotation = (
      (layerX - widthBox / 2) / width
    ) * 20

    const xRotation = (
      (layerY - heightBox / 2) / height
    ) * 20

    console.log({
      heightBox, widthBox, layerX, layerY, xRotation, yRotation
    })

    const string = `
    perspective(${perspective}px)
    scale(${scale})
    rotateX(${yRotation}deg)
    rotateY(${xRotation}deg)
    `

    test.current.style.transform = string
  }

  const salida = e => {
    if (!dinamic) return
    test.current.style.transform = `
    perspective(${perspective}px)
    scale(1)
    rotateX(0)
    rotateY(0)
    `
  }

  return (
    <div ref={test}
            onMouseMove={movimiento }
            onMouseOut={salida}
            className='floatBox'
            id={`${nameClass}`}>

              <img src={image} alt={alt} />
    </div>
  )
}

export default FloatBox
