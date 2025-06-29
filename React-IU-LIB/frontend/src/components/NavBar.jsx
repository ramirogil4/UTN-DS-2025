import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/NavBar.css';
import { useLocation, Link } from "react-router-dom";
import addIcon from '../assets/add-icon.svg';

export default function NavBarComponent() {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="nav-bar-contentainer">
      <Container>
        <Navbar.Brand>
          <img className="nav-bar-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXM__nXFjRYuevawdJIV-OhIgc0YRaGfOGg&s" alt="" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <NavDropdown title="Secciones" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cienciaficcion">Ciencia Ficción</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/crimen">Crimen</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/infantil">Infantíl</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/clasicosnacionales">Clásicos Nacionales</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/add">Agregar Libro</Nav.Link>
          </Nav>
          <Nav>
            
          </Nav>
          <Nav className=''>
            <Nav.Link as={Link} to="/register">
              <img  className="img-account" src="https://img.icons8.com/?size=100&id=ckaioC1qqwCu&format=png&color=000000" alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

