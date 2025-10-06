import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { validate } from '../middlewares/validation.middleware';
import { loginSchema } from '../validations/auth.validation';
import { createUserSchema } from '../validations/user.validation';
import * as signupController from '../controllers/signup.controller';
import { signup } from '../controllers/signup.controller';

const router = Router();
// Ruta públicas

router.post('/login',
   validate(loginSchema),
   authController.login
);

router.post('/signup', validate(createUserSchema), signupController.signup);

export const authRoutes = router;