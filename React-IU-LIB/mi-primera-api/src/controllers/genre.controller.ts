import { Request, Response, NextFunction } from 'express';
import * as genreService from '../services/genre.service';

// GET /api/genres
export async function getAllGenres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const genres = await genreService.getAllGenres();
    res.json({ success: true, data: genres });
  } catch (error) { next(error); }
}

// GET /api/genres/:id
export async function getGenreById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const genre = await genreService.getGenreById(id);
    res.json({ success: true, data: genre });
  } catch (error) {
    next(error);
  }
}

// POST /api/genres
export async function createGenre(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const genre = await genreService.createGenre(req.body);
    res.status(201).json({ success: true, message: 'Genre created succesfully', data: genre });
  } catch (error) {
    next(error);
  }
}

// PUT /api/genres/:id
export async function updateGenre(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const genre = await genreService.updateGenre(id, req.body);
    res.json({ success: true, message: 'Genre updated successfully', data: genre });
  } catch (error) { next(error); }
}

// DELETE /api/genres/:id
export async function deleteGenre(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    await genreService.deleteGenre(id);
    res.json({ success: true, message: 'Genre deleted successfully' });
  } catch (error) { next(error); }
}
