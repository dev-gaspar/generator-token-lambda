// src/app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorMiddleware from './middlewares/errors.js';
import authRoutes from './routes/routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Usar las rutas de autenticación
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Servidor lambda corriendo'
    });
});

app.use(errorMiddleware);

export default app; 
