import React, { useEffect, useRef, useState } from 'react'
import img1 from '../image/recipes/milanesaNapolitana.jpg'
import img2 from '../image/recipes/arrolladoDePollo.jpg'
import img3 from '../image/recipes/polloAlDisco.jpg'
import './Slider3D.css'

function Slider3D () {
  return (
    <div className='container_slider'>

        <div className='container_slider-input'>

            <input type="radio" name='slider' id='item-1'/>
            <input type="radio" name='slider' id='item-2' />
            <input type="radio" name='slider' id='item-3' />

            <div className="container_slider-cards">
                <label className="container_slider-card" htmlFor="item-1" id='selector-1'>
                    <img src={img1} alt="" />
                </label>
                <label className="container_slider-card" htmlFor="item-2" id='selector-2'>
                    <img src={img2} alt="" />
                </label>
                <label className="container_slider-card" htmlFor="item-3 " id='selector-3'>
                    <img src={img3} alt="" />
                </label>
            </div>
        </div>
    </div>
  )
}

export default Slider3D
