import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/ContactPage.css';

export default function ContactPage() {
  return (
    <div className='contact-page'>
    <Form className='form-container'>
      <fieldset>
        <h1>Contacto</h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="emailInput">Email</Form.Label>
          <Form.Control type="email" id="emailInput" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="direccionInput">Dirección</Form.Label>
          <Form.Control type="text" id="direccionInput" placeholder="Dirección" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="telefonoInput">Teléfono</Form.Label>
          <Form.Control type="tel" id="telefonoInput" placeholder="Teléfono" />
        </Form.Group>
        <Button className='button-form' type="submit">Enviar</Button>
      </fieldset>
    </Form>
    </div>
  );
}
