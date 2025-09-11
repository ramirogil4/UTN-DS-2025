import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// Extender tipo Request
declare global {
   namespace Express {
       interface Request {
           user?: {
               id: number;
               email: string;
               role: 'USER' | 'ADMIN';
           }
       }
   }
}

//Autenticacion
export function authenticate(req: Request, res: Response, next: NextFunction) {
   try {
       //Obtengo token del header
       const authHeader = req.headers.authorization;
       if (!authHeader || !authHeader.startsWith('Bearer ')) {
           return res.status(401).json({ success: false, error: 'Token no proporcionado' });
       }
       const token = authHeader.split(' ')[1];
       // 2. Verifico el token
       const decoded = jwt.verify( token, process.env.JWT_SECRET!) as any;
       // 3. Agrego usuario al request
       req.user = {
           id: decoded.id,
           email: decoded.email,
           role: decoded.role
       };
       next();
   } catch (error: any) {
       console.error(error);
       if (error.name === 'TokenExpiredError') {
           return res.status(401).json({ success:  false, error: 'Token expirado'  });
       }
       res.status(401).json({ success: false, error: 'Token inválido' });
   }
}

//Autorizacion
export function authorize(...roles: string[]) {
   return (req: Request, res: Response, next: NextFunction) => {
       if (!req.user) {
           return res.status(401).json({
               success: false,
               error: 'No autenticado'
           });
       }
       if (!roles.includes(req.user.role)) {
           return res.status(403).json({
               success: false,
               error: 'No tienes permisos para esta acción'
           });
       }
       next();
   };
}