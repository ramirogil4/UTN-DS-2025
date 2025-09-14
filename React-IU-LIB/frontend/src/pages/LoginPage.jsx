import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { setToken } from '../helpers/auth'; 
import '../styles/LoginPage.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterNavigate = () => {
    navigate('/register');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { email: '', password: '' };
    setLoginError(''); 

    if (!email.trim()) {
      newErrors.email = 'El email es requerido';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'La contraseña es requerida';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Error en login');

      const { data } = await res.json();
      setToken(data.token); 
      navigate('/home');  
    } catch (err) {
      setLoginError('Correo o contraseña inválidos');
    }
  };

  return (
    <div className='contact-page'>
      <Form className='form-container' onSubmit={handleSubmit}>
        <fieldset>
          <h1>Iniciar Sesión</h1>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailInput">Email</Form.Label>
            <Form.Control 
              type="email" 
              id="emailInput" 
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div style={{ color: 'red', marginTop: '5px' }}>{errors.email}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3" style={{ position: 'relative' }}>
            <Form.Label htmlFor="passwordInput">Contraseña</Form.Label>
            <Form.Control 
              type={showPassword ? "text" : "password"} 
              id="passwordInput" 
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '38px',
                border: 'none',
                background: 'transparent',
                padding: 0,
                cursor: 'pointer'
              }}
            >
              <img 
                src="https://img.icons8.com/?size=100&id=85130&format=png&color=000000" 
                alt="Mostrar/Ocultar contraseña" 
                style={{ width: '20px', height: '20px' }}
              />
            </button>

            {errors.password && (
              <div style={{ color: 'red', marginTop: '5px' }}>{errors.password}</div>
            )}
            {loginError && (
              <div style={{ color: 'red', marginTop: '5px' }}>{loginError}</div>
            )}
          </Form.Group>

          <Button className='button-form' type="submit">Ingresar</Button>

          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <Button 
              variant="link"
              className="register-button"
              onClick={handleRegisterNavigate}
            >
              ¿No tenes cuenta? Registrate
            </Button>
          </div>
        </fieldset>
      </Form>
    </div>
  );
}
