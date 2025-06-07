import { useNavigate } from 'react-router-dom';
import '../styles/Secciones.css'

const ComponenteSecciones = () => {
    const navigate = useNavigate();

    return(
        <div className='Secciones'>
            <h2><strong>Visita nuestras secciones más populares!</strong></h2>
            <div className='secciones-container'>
            <button onClick={() => navigate('/libros/CienciaFiccion')}><strong>Ciencia Ficción</strong></button>
            <button onClick={() => navigate('/libros/Crimen')}><strong>Crimen</strong></button>
            <button onClick={() => navigate('/libros/Infantil')}><strong>Infantil</strong></button>
            <button onClick={() => navigate('/libros/ClasicosNacionales')}><strong>Clásicos Nacionales</strong></button>
            </div>
        </div>
    );

};

export default ComponenteSecciones;