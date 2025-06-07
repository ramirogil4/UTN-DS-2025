import { useParams } from 'react-router-dom';
import LibrosXSeccion from '../SeccionLibros.js';
import ListaLibros from './ListaLibros';

function SeccionLibros() {
  const { seccion } = useParams();
  const libros = LibrosXSeccion[seccion] || [];
  
  return (
  <>
  <ListaLibros libros={libros}/>
  </>);
}

export default SeccionLibros;