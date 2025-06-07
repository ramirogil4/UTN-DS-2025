import { useState } from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';


const ComponenteNavBar = () => {
    return (
     <div>
        <nav className='nav-bar'>
            <ul className='nav-buttons'>
                <img className='logo-cuspide' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLftO2_LlXXGGZNTGwsc88kxbgCrYqjMP3w&s" alt="logo-cuspide" />
                <li><Link to="/">Home</Link></li>
                <li> <a href="#Locales">Locales</a></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li className='user-nav-item'><Link to="/registro"><img src="/icons/user-icon.png" alt="" />Registrarme</Link></li>
            </ul>
        </nav>
     </div>   
    );
};

export default ComponenteNavBar;