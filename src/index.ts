import express from 'express';
import pingRouter from './routes/ping';

const app = express();
app.use(express.json());
app.use('/', pingRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
