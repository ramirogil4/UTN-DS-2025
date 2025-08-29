import { Router } from 'express';
import * as genreController from '../controllers/genre.controller';
import { validate } from '../middlewares/validation.middleware';
import { createGenreSchema, updateGenreSchema } from '../validations/genre.validation';


const router = Router();

// GET /api/genres
router.get('/', genreController.getAllGenres);

// GET /api/genres/:id
router.get('/:id', genreController.getGenreById);

// POST /api/genres
router.post('/', validate(createGenreSchema), 
genreController.createGenre);

// PUT /api/genres/:id
router.put('/:id', validate(updateGenreSchema), 
genreController.updateGenre);

// DELETE /api/genres/:id
router.delete('/:id', genreController.deleteGenre);

export const genreRoutes = router;
