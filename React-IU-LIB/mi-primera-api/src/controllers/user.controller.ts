import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

// GET /api/users
export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await userService.getAllUsers();
    res.json({ success: true, data: users });
  } catch (error) { next(error); }
}

// GET /api/users/:id
export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
}

// POST /api/users
export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, message: 'User created succesfully', data: user });
  } catch (error) {
    next(error);
  }
}

// PUT /api/users/:id
export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.updateUser(id, req.body);
    res.json({ success: true, message: 'User updated successfully', data: user });
  } catch (error) { next(error); }
}

// DELETE /api/users/:id
export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    await userService.deleteUser(id);
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) { next(error); }
}
