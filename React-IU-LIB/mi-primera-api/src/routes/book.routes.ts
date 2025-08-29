import { Router } from 'express';
import * as bookController from '../controllers/book.controller';
import { validate } from '../middlewares/validation.middleware';
import { createBookSchema, updateBookSchema } from '../validations/book.validation';

const router = Router();
// GET /api/books
router.get('/', bookController.getAllBooks);
// GET /api/books/:id 
router.get('/:id', bookController.getBookById);
router.get('/section/:section', bookController.getBookByGenreId);
// POST /api/books
router.post('/', validate(createBookSchema), 
bookController.createBook);
// PUT /api/books/:id
router.put('/:id', validate(updateBookSchema), 
bookController.updateBook);
// DELETE /api/books/:id
router.delete('/:id', bookController.deleteBook);
export const bookRoutes = router;