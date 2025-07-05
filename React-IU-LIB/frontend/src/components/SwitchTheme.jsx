import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/ThemeContext';

export default function SwitchTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Form>
      <Form.Check
        type="switch"
        id="switch-theme"
        label={theme === 'light' ? '🌞' : '🌙'}
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
    </Form>
  );
}
