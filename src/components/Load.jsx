import React, { useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom'
import pollo from '../svg/header/pollo.svg'
function Load () {
  const chargeModal = useRef()

  useEffect(() => {
    setTimeout(() => (chargeModal.current.style = `
    position: fixed;
    z-index: 900;
    width: 100%;
    height: 100vh;
    background-color: rgb(54, 174, 124);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top:-100vh;
    transition:all 0.5s ease;
    `), 1500)
  }, [])

  return (
    <div ref={chargeModal} style={{ overflow: 'hidden', position: 'fixed', top: '0', zIndex: '900', width: '100%', height: '100vh', backgroundColor: '#36ae7c', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <span style={{ margin: '1em', fontSize: '2em', fontWeight: 'bold', color: '#fff', textShadow: '-1px 1px 6px #000' }}>EL PEREGRINO</span>
      <picture style={{ width: '220px', height: '220px', borderRadius: '50%', backgroundColor: '#f9d923', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'inset -3px -1px 15px #000' }}>
      <img style={{ width: '70%', height: '70%', filter: 'drop-shadow(0 0 1px #000)' }} src={pollo} alt="" />
      </picture>
      <span style={{ margin: '1em', fontSize: '2em', fontWeight: 'bold', color: '#fff', textShadow: '-1px 1px 6px #000' }}>CARGANDO...</span>
    </div>
  )
}

// function LoadModal () {
//   return ReactDOM.createPortal(<Load/>, document.getElementById('load-root'))
// }

export default Load
