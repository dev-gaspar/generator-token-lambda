// src/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const authRoutes = require('./routes/routes');

const app = express();

// Middleware
app.use(cors()); // Permitir CORS para todas las solicitudes
app.use(express.json()); // Habilitar el parsing de JSON

// Usar las rutas de autenticación
app.use('/auth', authRoutes);

module.exports = app;
