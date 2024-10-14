// src/server.js
import app from './src/app.js';  // Se usa 'import' en lugar de 'require'
import dotenv from 'dotenv';  // Se importa dotenv

dotenv.config();  // Se carga la configuración desde el archivo .env

const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor lambda corriendo`);
});
