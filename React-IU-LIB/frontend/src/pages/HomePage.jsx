import CarrouselComponent from "../components/Carrousel.jsx";
import BookCard from "../components/BookCards.jsx";
import SeccionXLibros from "../data/SeccionLibros.js";
import Buttons from "../components/Button.jsx";
import SearchBar from "../components/SearchBar.jsx";
import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <div>
        <CarrouselComponent />
        <div className="search-books">
            <SearchBar />
        </div>
        <div className="container-buttons">
            <Buttons />
        </div>
        <div className="container-books">
            <BookCard libro={SeccionXLibros.CienciaFiccion[0]}/>
            <BookCard libro={SeccionXLibros.Crimen[2]}/>
            <BookCard libro={SeccionXLibros.Infantil[2]}/>
            <BookCard libro={SeccionXLibros.ClasicosNacionales[1]}/>
        </div>
    </div>
  );
}
