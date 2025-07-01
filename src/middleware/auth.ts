import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers.authorization;

  if (!token || token !== 'Bearer petshop123') {
    res.status(401).json({ message: 'Acesso negado: token inválido' });
    return;
  }

  next();
}
