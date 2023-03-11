import React from 'react'
import ButtonRoute from '../components/ButtonRoute'
import DinamicGallery from '../components/DinamicGallery'
import FloatBox from '../components/FloatBox'
import { lazyLoad } from '../hooks/lazyLoad'
import equipoImg from '../image/main/equipo1.jpg'
import polloAlDisco from '../image/recipes/polloAlDisco.jpg'
import polloAlChampignon from '../image/recipes/pollo-al-champignon.jpg'
import milanesa from '../image/recipes/milanesaNapolitana.jpg'
import polloAsado from '../image/recipes/PolloAsadoconPapasAjoyRomero.jpg'
import arrollado from '../image/recipes/arrolladoDePollo.jpg'

function Body () {
  const nearProducts = lazyLoad(0, false)
  const nearAbout = lazyLoad(0, false)
  const nearRecipes = lazyLoad(0, false)

  return (
    <div id='main'>
        <div className="main_title">
          <h1>AVICOLA EL PEREGRINO SRL</h1>
          <em>Pollo de calidad,venta por mayor y menor</em>
        </div>
          <section className='main_secion-father main_about' ref={nearAbout}>
            <div className="main_about-section main_section">
              <h3>¿QUIENES SOMOS?</h3>
              <p>Empresa líder especializada en la producción y comercialización de productos avícolas en Bahía Blanca, Argentina. Con amplia experiencia en el mercado, consolidado como una de las principales empresas del sector en la región. Nos detacamos por utilizar métodos de producción sostenibles y responsables. </p>
            </div>
            <div className="main_about-section main_section">
              <FloatBox image={equipoImg} nameClass='main_about_image' dinamic={false}/>
              {/* <picture className='main_about-picture'>
                <img src={pollo} alt="Avicola El peregrino Equipo" />
              </picture> */}
            </div>
            <ButtonRoute nameClass='button_route' content="SABER MAS"/>
          </section>
          <section className='main_secion-father main_products' ref={nearProducts}>
          <div className="main_products-section main_section">
              <h3>PRODUCTOS</h3>
                  {/* 3 imagenes y 3 textos que cambiar por imagen */}
              <p></p>
            </div>
            <div className="main_products-section main_section"></div>
          </section>
          <section className='main_secion-father main_recipes ' ref={nearRecipes}>
          <div className="main_recipes-section main_section">
              <h3>RECETAS</h3>
              <p>En <strong>Avícola El Peregrino</strong>, nos encanta compartir nuestras recetas y consejos de cocina contigo. Creemos que la alimentación es un pilar fundamental de la salud y el bienestar, y queremos ayudarte a sacar el máximo provecho de nuestros productos, sin renunciar al <em>sabor</em> y la <em>variedad</em>, asegurando que tu plato este lleno <em>calidad</em>.</p>
            </div>
            <div className="main_recipes-section main_section">
              <div className='main_recipes-gallery-container'>

              <DinamicGallery img1={polloAlChampignon} img2={polloAlDisco} img3={milanesa} img4={polloAsado} img5={arrollado} animacion={false} bordeColor='#f9d923'/>
            </div>
              </div>
            <ButtonRoute nameClass='button_route' content="VER MAS"/>
          </section>
    </div>
  )
}

export default Body
