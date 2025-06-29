import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/SignUpPage.css';

export default function SignUp() {
  return (
    <div className='contact-page'>
    <Form className='form-container'>
      <fieldset>
        <h1>Registro de usuario</h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Nombre</Form.Label>
          <Form.Control id="TextInput" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Apellido</Form.Label>
          <Form.Control id="TextInput" placeholder="Apellido" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Form.Label>
          <Form.Control type="date" id="fechaNacimiento" placeholder="Fecha de Nacimiento" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="emailInput">Email</Form.Label>
          <Form.Control type="email" id="emailInput" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="passwordInput">Contraseña</Form.Label>
          <Form.Control type="password" id="passwordInput" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Género</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Masculino"
              name="genero"
              id="genero-masculino"
              value="masculino"
            />
            <Form.Check
              type="radio"
              label="Femenino"
              name="genero"
              id="genero-femenino"
              value="femenino"
            />
            <Form.Check
              type="radio"
              label="Otro"
              name="genero"
              id="genero-otro"
              value="otro"
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Sección Favorita</Form.Label>
          <Form.Select id="Select">
            <option selected disabled hidden>Sección Favorita</option>
            <option>Ciencia Ficción</option>
            <option>Crimen</option>
            <option>Infantil</option>
            <option>Clásicos Nacionales</option>
          </Form.Select>
        </Form.Group>
        <Button className='button-form' type="submit">Registrarme</Button>
      </fieldset>
    </Form>
    </div>
  );
}

