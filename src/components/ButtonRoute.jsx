import React from 'react'
import { Link } from 'react-router-dom'

function ButtonRoute ({ nameClass = 'button_route', content = 'button', to = '/' }) {
  return (
    <Link to={to} className={nameClass}>{content}</Link>
  )
}

export default ButtonRoute
