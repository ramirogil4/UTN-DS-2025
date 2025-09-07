import express from 'express';
import { bookRoutes } from './routes/book.routes';
import { userRoutes } from './routes/user.routes';
import { genreRoutes } from './routes/genre.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import { authorRoutes } from './routes/author.routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
};


// Middlewares globales
app.use(cors(corsOptions));
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