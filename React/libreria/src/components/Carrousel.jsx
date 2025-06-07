import { useState } from 'react'
import '../styles/Carrousel.css'
import Carousel from 'react-bootstrap/Carousel';


function Carrousel() {
  return (
    <div className='containerCarrousel'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img4-cuspide.jpg"
          alt="Primera imagen"
        />
        <Carousel.Caption>
          <h3 className='tituloCarrousel'>Bienvenidos a Cúspide</h3>
          <p className='tituloCarrousel'>Descubrí tu próxima lectura entre miles de libros nacionales e internacionales.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img5-cuspide.jpg"
          alt="Segunda imagen"
        />
        <Carousel.Caption>
          <h3 className='tituloCarrousel'>Tenemos todo lo que necesitas!</h3>
          <p className='tituloCarrousel'>Novedades, clásicos, infantiles, juveniles y mucho más. Todos los géneros en un solo lugar.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrousel;
