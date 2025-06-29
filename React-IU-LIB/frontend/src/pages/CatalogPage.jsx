import { useParams } from 'react-router-dom';
import BookCards from '../components/BookCards.jsx';
import SeccionXLibros from '../data/SeccionLibros.js';
import '../styles/CatalogPage.css';

const seccionMap = {
  cienciaficcion: "CienciaFiccion",
  crimen: "Crimen",
  infantil: "Infantil",
  clasicosnacionales: "ClasicosNacionales"
};

export default function CatalogPage({ librosAgregados = [] }) {
  const { seccion } = useParams();
  const key = seccionMap[seccion];
  const librosOriginales = SeccionXLibros[key] || [];

  const librosAgregadosFiltrados = librosAgregados.filter(
    (libro) => libro.genero === seccion
  );

  const libros = [...librosOriginales, ...librosAgregadosFiltrados];

  return (
    <div className="book-section">
      <h2 className="section-title">{key || "Sección no encontrada"}</h2>
      <div className="books-list">
        {libros.map((libro, index) => (
          <BookCards key={libro.id || index} libro={libro} />
        ))}
      </div>
    </div>
  );
}
