import '../styles/Registro.css';
import { Link } from 'react-router-dom';


const Registro = () => {
    return(
        <div className='container'>
        <div className='registro'>
        <form>
        <h1>Registrar usuario</h1>
        <label>Nombre 
            <input type="text" placeholder="Nombre" required />
        </label>
        <label>Apellido 
            <input type="text" placeholder="Apellido" required />
        </label>
        <label>Fecha de Nacimiento  
            <input type="date" placeholder="Fecha" />
        </label>
        <label>Correo electrónico
            <input type="email" placeholder="Correo" required />
        </label>
        <label>Contraseña
            <input type="password" placeholder="Contraseña" required />
        </label>
        <div>
            <label>Género</label>
            <label><input type="radio" name="genero" value="masculino" required />Masculino</label>
            <label><input type="radio" name="genero" value="femenino" />Femenino</label>
            <label><input type="radio" name="genero" value="otro" />Otro</label>
        </div>

        <label>Tema favorito:
            <select id="temas-fav">
                <option selected disabled hidden>Tema Favorito</option>
                <option>Ciencia Ficción</option>
                <option>Crimen</option>
                <option>Infantil</option>
                <option>Clásicos Nacionales</option>
            </select>
        </label>
        <Link to="/"><button onClick={() => alert("El usuario fue registrado exitosamente!")}>Registrarme</button></Link>
            </form>
        </div>
        </div>
        
    );
}

export default Registro; 