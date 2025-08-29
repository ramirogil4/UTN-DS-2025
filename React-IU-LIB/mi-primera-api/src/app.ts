import express from 'express';
import { bookRoutes } from './routes/book.routes';
import { userRoutes } from './routes/user.routes';
import { genreRoutes } from './routes/genre.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import { authorRoutes } from './routes/author.routes';
const app = express();
const PORT = 3000;
// Middlewares globales
app.use(express.json());
app.use(logRequest);
// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/authors', authorRoutes);
app.use(handleError);
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});