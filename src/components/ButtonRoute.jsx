import React from 'react'

function ButtonRoute ({ nameClass = 'button_route', content = 'button' }) {
  return (
    <button className={nameClass}>{content}</button>
  )
}

export default ButtonRoute
