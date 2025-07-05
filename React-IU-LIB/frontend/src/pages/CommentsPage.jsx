import { useFetch } from '../hooks/useFetch';
import Card from 'react-bootstrap/Card';
import '../styles/CommentsPage.css';

export default function CommentsPage() {
    const { datos } = useFetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    return (
        <div>
            <h2 className="comments-title">Comentarios</h2>
            <div className="comments-list">
                {datos && datos.map(comment => (
                    <div key={comment.id} className="comment-container">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{comment.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{comment.email}</Card.Subtitle>
                                <Card.Text>
                                    {comment.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

