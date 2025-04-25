const mongoose = require('mongoose');

// Definir el esquema del modelo Usuario
const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correoElectronico: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ['admin', 'usuario'],
    default: 'usuario',
  },
});

// Crear el modelo Usuario basado en el esquema
const Usuario = mongoose.model('Usuario', UsuarioSchema);

// Exportar el modelo Usuario
module.exports = Usuario;
