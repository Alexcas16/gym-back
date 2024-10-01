import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';


const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
