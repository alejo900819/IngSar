
// Importar las dependencias necesarias
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Configurar dotenv para usar variables de entorno
dotenv.config();

// Crear una instancia de Express
const app = express();

// Configurar middleware para manejar CORS y JSON
app.use(cors());
app.use(express.json());

// Definir el puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3000;

// Configurar el servidor para escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo sobre puerto: ${PORT}`);
});

// Conectar a MongoDB usando Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Definir un endpoint inicial
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});
