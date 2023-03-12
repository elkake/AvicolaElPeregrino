import React, { useContext } from 'react'
import { Context } from '../context/context'
import './SliderText.css'

function SliderText () {
  const { contador } = useContext(Context)

  const data = [{
    sub: 'pollo',
    content: 'contenido1'

  }, {
    sub: 'huevos',
    content: 'contenido2'
  }, {
    sub: 'especiales',
    content: 'contenido3'
  }

  ]
  return (
    <div className='slider_text-container'>
        {data.map(data => (
            <div key={data.sub} className='slider_text-card'>
                <h4>{data.sub}</h4>
                <p>{data.content}</p>
            </div>
        ))}
    </div>
  )
}

export default SliderText
