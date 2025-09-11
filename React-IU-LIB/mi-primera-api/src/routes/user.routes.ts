import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { validate } from '../middlewares/validation.middleware';
import { createUserSchema, updateUserSchema } from '../validations/user.validation';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

// GET /api/users
router.get('/', authenticate, authorize('ADMIN')  ,userController.getAllUsers);

// GET /api/users/:id
router.get('/:id', authenticate, authorize('ADMIN') , userController.getUserById);

// POST /api/users
router.post('/',validate(createUserSchema), 
userController.createUser);

// PUT /api/users/:id
router.put('/:id', authenticate, authorize('USER', 'ADMIN')  ,validate(updateUserSchema), 
userController.createUser);

// DELETE /api/users/:id
router.delete('/:id',userController.deleteUser);

export const userRoutes = router;
