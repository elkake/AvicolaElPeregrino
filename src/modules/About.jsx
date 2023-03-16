import React from 'react'
import ButtonAction from '../components/ButtonAction'
import back from '../svg/icons/back.svg'
import { about } from '../data/About'
import useMove from '../hooks/useMove'
import useNav from '../hooks/useNav'
import { useLazyLoad } from '../hooks/useLazyLoad'

function About () {
  const myElementRef = useMove(-70)
  const toBack = useNav('/')
  const visible = useLazyLoad(0, false)

  return (
    <div className="about_container" ref={myElementRef}>
      <ButtonAction nameClass='backButton' event={toBack}>
            <img src={back} alt="Menu el peregrino" />
        </ButtonAction>
      <div className='about_container-flex' ref={visible}>
          {about.map(obj => (
            <section key={obj.section}>
              <h2>{obj.section}</h2>
              <p>{obj.content}</p>
              <picture><img src={obj.img} alt={obj.img}/>
              {obj.span && <span>{obj.spanContent}</span>}
              </picture>
            </section>
          ))}
      </div>
    </div>
  )
}

export default About
