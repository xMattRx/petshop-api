import express from 'express';
import petsRouter from './routes/pets';
import pingRouter from './routes/ping';
import { authMiddleware } from './middleware/auth';

const app = express();

app.use(express.json());

app.use('/', pingRouter);

app.use('/pets', authMiddleware, petsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
