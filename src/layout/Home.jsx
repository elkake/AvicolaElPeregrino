import React from 'react'
import ButtonRoute from '../components/ButtonRoute'
import DinamicGallery from '../components/DinamicGallery'
import FloatBox from '../components/FloatBox'
import equipoImg from '../image/main/equipo1.jpg'
import polloAlDisco from '../image/recipes/polloAlDisco.jpg'
import polloAlChampignon from '../image/recipes/pollo-al-champignon.jpg'
import milanesa from '../image/recipes/milanesaNapolitana.jpg'
import polloAsado from '../image/recipes/PolloAsadoconPapasAjoyRomero.jpg'
import arrollado from '../image/recipes/arrolladoDePollo.jpg'
import Slider from '../components/Slider'
import { ContextProducts } from '../context/context'
import useMove from '../hooks/useMove'

function Body () {
  // regresamos el scroll al inicio
  const main = useMove(-70)

  return (
    <div id='main' ref={main}>
          <section className='main_seccion-father main_about' >
            <div className="main_about-section main_section">
              <h3>¿QUIENES SOMOS?</h3>
              <p>Empresa líder especializada en la producción y comercialización de productos avícolas en Bahía Blanca, Argentina. Con amplia experiencia en el mercado, consolidado como una de las principales empresas del sector en la región. Nos detacamos por utilizar métodos de producción sostenibles y responsables. </p>
            </div>
            <div className="main_about-section main_section">
              <FloatBox image={equipoImg} nameClass='main_about_image' dinamic={false}/>
            </div>
            <ButtonRoute to='/nosotros' nameClass='button_route' content="SABER MAS"/>
          </section>
          <section className='main_seccion-father main_products' >
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
            <ButtonRoute to='productos' nameClass='button_route' content="VER TODOS"/>
              </ContextProducts>
          </section>
          <section className='main_seccion-father main_recipes '>
          <div className="main_recipes-section main_section">
              <h3>RECETAS</h3>
              <p>En Avícola El Peregrino, nos encanta compartir nuestras recetas y consejos de cocina contigo. Creemos que la alimentación es un pilar fundamental de la salud y el bienestar, y queremos ayudarte a sacar el máximo provecho de nuestros productos, sin renunciar al <em>sabor</em> y la <em>variedad</em>, asegurando que tu plato este lleno <em>calidad</em>.</p>
            </div>
            <div className="main_recipes-section main_section">
              <div className='main_recipes-gallery-container'>

              <DinamicGallery img1={polloAlChampignon} img2={polloAlDisco} img3={milanesa} img4={polloAsado} img5={arrollado} animacion={true} bordeColor='#f9d923'/>
            </div>
              </div>
            <ButtonRoute to='recetas' nameClass='button_route' content="VER MAS"/>
          </section>
    </div>
  )
}

export default Body
