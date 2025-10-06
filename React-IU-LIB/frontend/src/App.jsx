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
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

function App() {
  const [librosAgregados, setLibrosAgregados] = useState([]);

  const agregarLibro = (libro) => {
    setLibrosAgregados(prev => [...prev, libro]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Layout><HomePage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/signup" element={<SignUp />} />
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

