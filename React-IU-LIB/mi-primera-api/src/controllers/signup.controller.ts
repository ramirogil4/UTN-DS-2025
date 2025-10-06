import { Request, Response, NextFunction } from 'express';
import * as signupService from '../services/signup.service';
import { SignupRequest, SignupResponse } from '../types/signup.types';

export async function signup(
  req: Request<{}, any, SignupRequest>,
  res: Response<SignupResponse>,
  next: NextFunction
) {
  try {
    const result = await signupService.signup(req.body); // llamamos al service
    res.status(201).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
}