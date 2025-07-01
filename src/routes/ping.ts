import { Router } from 'express';
import { healthCheckHandler } from '../controllers/health.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.get('/ping', authMiddleware, healthCheckHandler);

export default router;
