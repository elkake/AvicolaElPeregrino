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
import Slider from '../components/Slider'
import { ContextProducts } from '../context/context'
import SliderText from '../components/SliderText'

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
          <section className='main_seccion-father main_about' ref={nearAbout}>
            <div className="main_about-section main_section">
              <h3>¿QUIENES SOMOS?</h3>
              <p>Empresa líder especializada en la producción y comercialización de productos avícolas en Bahía Blanca, Argentina. Con amplia experiencia en el mercado, consolidado como una de las principales empresas del sector en la región. Nos detacamos por utilizar métodos de producción sostenibles y responsables. </p>
            </div>
            <div className="main_about-section main_section">
              <FloatBox image={equipoImg} nameClass='main_about_image' dinamic={false}/>
            </div>
            <ButtonRoute nameClass='button_route' content="SABER MAS"/>
          </section>
          <section className='main_seccion-father main_products' ref={nearProducts}>
              <ContextProducts>
          <div className="main_products-section main_section">
              <h3>PRODUCTOS</h3>
              <div className='main_products-slider'>

              <Slider/>
              </div>
            </div>
            <div className="main_products-section main_section">
              <p className='main_products-description'>
              En Avícola El Peregrino nos dedicamos a ofrecer productos avícolas de la más alta calidad para nuestros clientes. Contamos con una amplia variedad de huevos frescos. Además, ofrecemos pollos criados en granjas bajo los más estrictos controles de calidad, asegurando que lleguen a tu mesa frescos y deliciosos.
              </p>
            </div>
            <ButtonRoute nameClass='button_route' content="VER TODOS"/>
              </ContextProducts>
          </section>
          <section className='main_seccion-father main_recipes ' ref={nearRecipes}>
          <div className="main_recipes-section main_section">
              <h3>RECETAS</h3>
              <p>En Avícola El Peregrino, nos encanta compartir nuestras recetas y consejos de cocina contigo. Creemos que la alimentación es un pilar fundamental de la salud y el bienestar, y queremos ayudarte a sacar el máximo provecho de nuestros productos, sin renunciar al <em>sabor</em> y la <em>variedad</em>, asegurando que tu plato este lleno <em>calidad</em>.</p>
            </div>
            <div className="main_recipes-section main_section">
              <div className='main_recipes-gallery-container'>

              <DinamicGallery img1={polloAlChampignon} img2={polloAlDisco} img3={milanesa} img4={polloAsado} img5={arrollado} animacion={true} bordeColor='#f9d923'/>
            </div>
              </div>
            <ButtonRoute nameClass='button_route' content="VER MAS"/>
          </section>
    </div>
  )
}

export default Body
