import React from 'react'
import ButtonAction from '../components/ButtonAction'
import { useLazyLoad } from '../hooks/useLazyLoad'
import useMove from '../hooks/useMove'
import useNav from '../hooks/useNav'
import back from '../svg/icons/back.svg'

function Products () {
  const myElementRef = useMove(-70)
  const toBack = useNav('/')
  const visible = useLazyLoad(0, false)

  return (
    <div className='product_container' ref={myElementRef}>
      <ButtonAction nameClass='backButton' event={toBack}>
            <img src={back} alt="Menu el peregrino" />
        </ButtonAction>
        <div className='product_container-flex' ref={visible}>

        </div>
    </div>
  )
}

export default Products
