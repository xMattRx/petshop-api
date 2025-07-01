import { Request, Response } from 'express';

export function healthCheckHandler(req: Request, res: Response): void {
  res.status(200).json({ message: 'pong 🏓' });
}
