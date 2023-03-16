import { useEffect, useRef } from 'react'

export function useLazyLoad (margin = 0, infiniteView = true) {
  const elementRef = useRef()

  useEffect(() => {
    const observando = (e) => {
      if (e[0].isIntersecting) {
        // console.log(true)
        elementRef.current.childNodes.forEach(e => (e.style = `
        animation:disp 1.7s ease;
        `))
        if (!infiniteView) {
          observer.unobserve(elementRef.current)
        }
      } else {
        // console.log(false)
        elementRef.current.childNodes.forEach(e => (e.style = `
        animation:none;
        `))
      }
    }

    const observer = new IntersectionObserver(observando, { rootMargin: `${margin}px` })
    observer.observe(elementRef.current)
  }, [])

  return elementRef
}
