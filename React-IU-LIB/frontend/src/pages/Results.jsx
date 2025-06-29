import { useLocation } from "react-router-dom";
import SeccionLibros from "../data/SeccionLibros";
import BookCard from "../components/BookCards";
import "../styles/Results.css";

export default function Results({ librosAgregados = [] }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const busqueda = params.get('busqueda') || '';

  const allBooks = [
    ...Object.values(SeccionLibros).flat(),
    ...librosAgregados
  ];


  const resultados = allBooks.filter(libro =>
    libro.nombreLibro.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="results-container">
      <div className="results-header">
        <h2>Resultados de la búsqueda: {busqueda}</h2>
      </div>
      <div className="results-body">
        {busqueda.trim() === '' ? (
          <p>Por favor ingresa un término de búsqueda.</p>
        ) : resultados.length > 0 ? (
          resultados.map(libro => (
            <BookCard key={libro.id} libro={libro} />
          ))
        ) : (
          <p>No se encontraron libros para "{busqueda}"</p>
        )}
      </div>
    </div>
  );
}