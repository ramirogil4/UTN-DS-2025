import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ContactPage  from './pages/ContactPage';
import SignUp from './pages/SignUpPage';
import Layout from './components/Layout'; 
import Results from './pages/Results';
import AddBook from './pages/AddBookPage';
import CommentsPage from './pages/CommentsPage';
import { useState } from 'react';

function App() {
  const [librosAgregados, setLibrosAgregados] = useState([]);

  const agregarLibro = (libro) => {
    setLibrosAgregados(prev => [...prev, libro]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/contacto" element={<Layout><ContactPage /></Layout>} />
        <Route path="/register" element={<Layout><SignUp /></Layout>} />
        <Route
          path="/:seccion"
          element={<Layout><CatalogPage librosAgregados={librosAgregados} /></Layout>}
        />
        <Route path="/results" element={<Layout><Results librosAgregados={librosAgregados} /></Layout>} />
        <Route path="/add" element={<Layout><AddBook nuevoLibro={agregarLibro} /></Layout>} />
        <Route path="/comments" element={<Layout><CommentsPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

