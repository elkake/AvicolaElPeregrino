import React from 'react'

function ButtonAction ({ nameClass = '', children = 'hola', event = null }) {
  return (
    <div onClick={event} className={`buttonAction ${nameClass}`}>
        {children}
    </div>
  )
}

export default ButtonAction
