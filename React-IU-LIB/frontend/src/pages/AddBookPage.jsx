import "../styles/AddBookPage.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function AddBookPage( { nuevoLibro }) {
  const [libros, setLibros] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();
  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, nuevoLibro]);
    console.log("Libro agregado:", nuevoLibro);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const libro = {
      id: Date.now(),
      nombreLibro: titulo,
      nombreAutor: autor,
      nombreImagen: imagen ? URL.createObjectURL(imagen) : "",
      genero
    };

    nuevoLibro(libro);

    setTitulo("");
    setAutor("");
    setGenero("");
    setImagen(null);
    e.target.reset();
    alert("El Libro fue registrado con éxito");
    navigate('/');
  };

  return (
    <div className="add-book-bg">
      <div className="add-book-container">
        <div className="add-book-header">
          <h1>Agregar libro</h1>
        </div>
        <div className="add-book-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formArchivo">
              <Form.Label>Seleccione la portada del libro</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImagen(e.target.files[0])}
                required
              />
            </Form.Group>

            <Form.Label>Título del Libro</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </InputGroup>

            <Form.Label>Autor del Libro</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nombre del autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                required
              />
            </InputGroup>

            <Form.Label>Género del Libro</Form.Label>
            <Form.Select
              aria-label="Género"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
            >
              <option disabled hidden value="">Seleccione el género</option>
              <option value="cienciaficcion">Ciencia Ficción</option>
              <option value="crimen">Crimen</option>
              <option value="infantil">Infantil</option>
              <option value="clasicosnacionales">Clásicos Nacionales</option>
            </Form.Select>

            <div className="mt-4">
              <Button type="submit" variant="primary">
                Agregar Libro
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
