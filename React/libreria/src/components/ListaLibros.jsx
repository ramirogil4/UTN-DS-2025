import '../styles/Libros.css';
import LibrosXSeccion from '../SeccionLibros.js';

function ListaLibros({ libros }) {
  return (
    <div className='lista-libros'>
      {libros.map((libro, index) => (
        <div key={index} className="tarjeta-libro">
          <img src={libro.nombreImagen} alt={libro.nombreLibro} />
          <h2>{libro.nombreLibro}</h2>
          <h3>{libro.nombreAutor}</h3>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default ListaLibros;
