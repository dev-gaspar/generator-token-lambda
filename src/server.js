// src/server.js
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
