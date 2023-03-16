import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../svg/icons/back.svg'
import ButtonAction from '../components/ButtonAction'

function Recipes () {
  const navigate = useNavigate()
  const toBack = () => {
    navigate('/')
  }
  return (
    <div className="recipes_container">
      <ButtonAction nameClass='backButton' event={toBack}>
            <img src={back} alt="Menu el peregrino" />
        </ButtonAction>
    </div>
  )
}

export default Recipes
