import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComponenteNavBar from './NavBar.jsx';
import Carrousel from './Carrousel.jsx';
import Secciones from './Secciones.jsx';
import ListaLibros from './ListaLibros.jsx';
import LibrosXSeccion from '../SeccionLibros.js';
import ComponenteFooter from './Footer.jsx';
import Registro from './Registro.jsx';
import SeccionLibros from './SeccionLibros.jsx';
import Contacto from './Contacto.jsx';

const App = () => {
  return (
    <>
      <ComponenteNavBar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Carrousel />
            <Secciones />
            <ListaLibros libros={[
              LibrosXSeccion['CienciaFiccion'][0],
              LibrosXSeccion['Crimen'][2],
              LibrosXSeccion['Infantil'][2],
              LibrosXSeccion['ClasicosNacionales'][1]
            ]} />
          </>
        } />
        
        <Route path="/registro" element={<Registro />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/libros/:seccion" element={<SeccionLibros />} />
      </Routes>

      <ComponenteFooter />
    </>
  );
};

export default App;
