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

function CatalogPage() {
    const { seccion } = useParams();
    const key = seccionMap[seccion];
    const libros = SeccionXLibros[key] || [];

  return (
    <div className="book-section">
      <h2 className="section-title">{key || "Sección no encontrada"}</h2>
      <div className="books-list">
        {libros.map((libro, idx) => (
          <BookCards key={idx} libro={libro} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;