import { Router } from 'express';
import * as authorController from '../controllers/author.controller';
import { validate } from '../middlewares/validation.middleware';
import { createAuthorSchema, updateAuthorSchema } from '../validations/author.validation';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

// GET /api/authors
router.get('/', authenticate, authorize('ADMIN'),authorController.getAllAuthors);

// GET /api/authors/:id
router.get('/:id', authenticate, authorize('ADMIN') ,authorController.getAuthorById);

// POST /api/authors
router.post('/', authenticate, authorize('ADMIN') ,validate(createAuthorSchema), 
authorController.createAuthor);

// PUT /api/authors/:id
router.put('/:id', authenticate, authorize('ADMIN') ,validate(updateAuthorSchema), 
authorController.updateAuthor);

// DELETE /api/authors/:id
router.delete('/:id', authenticate, authorize('ADMIN') ,authorController.deleteAuthor);

export const authorRoutes = router;
