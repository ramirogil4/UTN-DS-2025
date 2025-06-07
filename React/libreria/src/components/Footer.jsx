import { useState } from 'react'
import '../styles/Footer.css'

const ComponenteFooter = () => {
    return (
        <div className='footer'>
            <footer>
                <div className='redes-sociales'>
                    <p><a href="https://www.instagram.com/cuspidelibros/?hl=es"> 
                    <img src="https://img.icons8.com/?size=100&id=xQDoK3WxHJ8O&format=png&color=000000"/> Seguinos en Instagram!</a></p>
                </div>
                <p><strong>© 2025 Cúspide Libros. Todos los derechos reservados.</strong></p>
            </footer>
        </div>
    );
};
export default ComponenteFooter;