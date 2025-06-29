import '../styles/SearchBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/search-icon.svg';

export default function SearchBar() {
  const [busqueda, setBusqueda] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.trim() === '') {
        setError('Por favor, ingrese un término de búsqueda.');
        return;
    }
    setError('');
    navigate(`/results?busqueda=${encodeURIComponent(busqueda)}`);
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar-inner" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar libros..."
          value={busqueda}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="search-icon"
          />
        </button>
      </form>
      <div className='error-search'>
        <p>{error}</p>
      </div>
    </div>
  );
}