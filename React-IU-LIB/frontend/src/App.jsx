import HomePage from './pages/HomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import CatalogPage from './pages/CatalogPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import SignUp from './pages/SignUpPage.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBarComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/:seccion" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
