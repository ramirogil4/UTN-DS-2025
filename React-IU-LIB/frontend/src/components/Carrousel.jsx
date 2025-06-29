import Carousel from 'react-bootstrap/Carousel';
import img4 from '../assets/img4-cuspide.jpg';
import img5 from '../assets/img5-cuspide.jpg';
import '../styles/Carrousel.css';

export default function CarrouselComponent() {
  return (
    <div className='carrousel-container'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carrousel-text'>Descubrí tu próxima gran lectura</h3>
          <p className='carrousel-text'>Elegí entre cientos de títulos para crecer, aprender o simplemente disfrutar de una buena historia.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='carrousel-text'>Visitá nuestros locales</h3>
          <p className='carrousel-text'>Te esperamos en el local con libros para todos los gustos. Nada como hojear, elegir y llevarte una buena historia.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
