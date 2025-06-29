import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/BookCards.css';

export default function BookCard({ libro }) {
  return (
    <Card style={{ width: '18rem', height: '35rem'}} className="book-card">
        <div className="book-card-content">
      <Card.Img variant="top" src={libro.nombreImagen} className='book-image'/>
      <Card.Body>
        <Card.Title>{libro.nombreLibro}</Card.Title>
        <Card.Text>
          {libro.nombreAutor}
        </Card.Text>
        <Button variant="primary" className='book-button'>Comprar</Button>
      </Card.Body>
      </div>
    </Card>
  );
}
