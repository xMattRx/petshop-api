import { Router } from 'express';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.get('/ping', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'pong 🏓' });
});

export default router;
