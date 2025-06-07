import '../styles/Contacto.css';
import { Link } from 'react-router-dom';


const Contacto = () => {
    return(
        <div className='container'>
        <div className='contacto'>
            <h1>Formulario de Contacto</h1>
            <form>
                <label>Dirección de contacto</label>
                <input type="text" placeholder='Dirección'/>
                <label>Correo electrónico</label>
                <input type="email" placeholder='Correo'/>
                <label>Número de teléfono</label>
                <input type="tel" placeholder='Teléfono'/>
                <Link to="/"><button onClick={() => alert("El formulario fue enviado exitosamente!")}>Enviar</button></Link>
            </form>
        </div>
        </div> 
    );
}

export default Contacto; 