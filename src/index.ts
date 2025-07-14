import express from 'express';
import { authMiddleware } from './middleware/auth';
import petsRouter from './routes/pets';
import pingRouter from './routes/ping';
import { setupSwagger } from './swagger';

const app = express();

app.use(express.json());
setupSwagger(app);

app.use('/', pingRouter);

app.use('/pets', authMiddleware, petsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
