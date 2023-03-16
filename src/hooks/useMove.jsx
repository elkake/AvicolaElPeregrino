import { useEffect, useRef } from 'react'
export default function useMove (margin = 0) {
  const myElementRef = useRef()
  useEffect(
    () => {
      // obtiene la distancia en px que esta el viewport a este elemento/ arriba positvo, abajo negativo
      const elementTop = myElementRef.current.getBoundingClientRect().top
      // obtenmos los pixeles que nos desplazamos en el eje Y / 70 del cartel titulo
      const offsetTop = window.pageYOffset + elementTop + margin
      // movemos hacia el lugar de offsetTop
      window.scrollTo(0, offsetTop)
    }, [])
  return myElementRef
}
