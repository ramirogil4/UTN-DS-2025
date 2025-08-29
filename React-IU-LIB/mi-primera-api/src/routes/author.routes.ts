import { Router } from 'express';
import * as authorController from '../controllers/author.controller';
import { validate } from '../middlewares/validation.middleware';
import { createAuthorSchema, updateAuthorSchema } from '../validations/author.validation';


const router = Router();

// GET /api/authors
router.get('/', authorController.getAllAuthors);

// GET /api/authors/:id
router.get('/:id', authorController.getAuthorById);

// POST /api/authors
router.post('/', validate(createAuthorSchema), 
authorController.createAuthor);

// PUT /api/authors/:id
router.put('/:id', validate(updateAuthorSchema), 
authorController.updateAuthor);

// DELETE /api/authors/:id
router.delete('/:id', authorController.deleteAuthor);

export const authorRoutes = router;
