import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpPage.css';

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    email: '',
    password: '',
    genero: '',
    seccion: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    if (name === 'genero') {
      setFormData({ ...formData, genero: value });
    } else if (id === 'Select') {
      setFormData({ ...formData, seccion: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }

    // Limpiar error al escribir
    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.TextInput = 'El nombre es requerido';
    if (!formData.apellido.trim()) newErrors.TextInput2 = 'El apellido es requerido';
    if (!formData.fechaNacimiento.trim()) newErrors.fechaNacimiento = 'La fecha de nacimiento es requerida';
    if (!formData.email.trim()) newErrors.emailInput = 'El email es requerido';
    if (!formData.password.trim()) newErrors.passwordInput = 'La contraseña es requerida';
    if (!formData.genero.trim()) newErrors.genero = 'Selecciona un género';
    if (!formData.seccion.trim()) newErrors.Select = 'Selecciona una sección favorita';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate('/home'); // Redirige a /home si todo está completo
    }
  };

  return (
    <div className='contact-page'>
      <Form className='form-container' onSubmit={handleSubmit}>
        <fieldset>
          <h1>Registro de usuario</h1>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="TextInput">Nombre</Form.Label>
            <Form.Control
              id="TextInput"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.TextInput && <div style={{ color: 'red', marginTop: '5px' }}>{errors.TextInput}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="TextInput2">Apellido</Form.Label>
            <Form.Control
              id="TextInput2"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
            {errors.TextInput2 && <div style={{ color: 'red', marginTop: '5px' }}>{errors.TextInput2}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              id="fechaNacimiento"
              placeholder="Fecha de Nacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
            {errors.fechaNacimiento && <div style={{ color: 'red', marginTop: '5px' }}>{errors.fechaNacimiento}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailInput">Email</Form.Label>
            <Form.Control
              type="email"
              id="emailInput"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.emailInput && <div style={{ color: 'red', marginTop: '5px' }}>{errors.emailInput}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="passwordInput">Contraseña</Form.Label>
            <Form.Control
              type="password"
              id="passwordInput"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.passwordInput && <div style={{ color: 'red', marginTop: '5px' }}>{errors.passwordInput}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Género</Form.Label>
            <div>
              {['masculino', 'femenino', 'otro'].map((g) => (
                <Form.Check
                  key={g}
                  type="radio"
                  label={g.charAt(0).toUpperCase() + g.slice(1)}
                  name="genero"
                  id={`genero-${g}`}
                  value={g}
                  checked={formData.genero === g}
                  onChange={handleChange}
                />
              ))}
            </div>
            {errors.genero && <div style={{ color: 'red', marginTop: '5px' }}>{errors.genero}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="Select">Sección Favorita</Form.Label>
            <Form.Select
              id="Select"
              value={formData.seccion}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Sección Favorita</option>
              <option>Ciencia Ficción</option>
              <option>Crimen</option>
              <option>Infantil</option>
              <option>Clásicos Nacionales</option>
            </Form.Select>
            {errors.Select && <div style={{ color: 'red', marginTop: '5px' }}>{errors.Select}</div>}
          </Form.Group>

          <Button className='button-form' type="submit">Registrarme</Button>

          <div className="login-link-container">
            <span className="login-link" onClick={() => navigate('/')}>
              ¿Ya estás registrado? Inicia sesión
            </span>
          </div>
        </fieldset>
      </Form>
    </div>
  );
}
