import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/Button.css'; 

export default function Buttons() {
  return (
    <>
        <Button className="button" as={Link} to="/cienciaficcion">
          Ciencia Ficcion
        </Button>
        <Button className="button" as={Link} to="/crimen">
          Crimen
        </Button>
        <Button className="button" as={Link} to="/infantil">
          Infantil
        </Button> 
        <Button className="button" as={Link} to="/clasicosnacionales">
          Clásicos Nacionales
        </Button>
    </>
  );
}
