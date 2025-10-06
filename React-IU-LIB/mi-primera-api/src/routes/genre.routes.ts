import { Router } from 'express';
import * as genreController from '../controllers/genre.controller';
import { validate } from '../middlewares/validation.middleware';
import { createGenreSchema, updateGenreSchema } from '../validations/genre.validation';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

// GET /api/genres
router.get('/', genreController.getAllGenres);

// GET /api/genres/:id
router.get('/:id', authenticate, authorize('ADMIN') ,genreController.getGenreById);

// POST /api/genres
router.post('/', authenticate, authorize('ADMIN') , validate(createGenreSchema), 
genreController.createGenre);

// PUT /api/genres/:id
router.put('/:id', authenticate, authorize('ADMIN') ,validate(updateGenreSchema), 
genreController.updateGenre);

// DELETE /api/genres/:id
router.delete('/:id', authenticate, authorize('ADMIN') ,genreController.deleteGenre);

export const genreRoutes = router;
