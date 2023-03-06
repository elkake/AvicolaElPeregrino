import React from 'react'

function ButtonAction ({ className, children = 'hola' }) {
  return (
    <div className={`buttonAction ${className}`}>
        {children}
    </div>
  )
}

export default ButtonAction
