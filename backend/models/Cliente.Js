const mongoose = require('mongoose');

// Definir el esquema del modelo Cliente
const ClienteSchema = new mongoose.Schema({
  cedula: {
    type: String,
    required: true,
    unique: true,
  },
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  telefono1: {
    type: String,
    required: true,
  },
  telefono2: {
    type: String,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  dirFisica: {
    type: String,
    required: true,
  },
});

// Crear el modelo Cliente basado en el esquema
const Cliente = mongoose.model('Cliente', ClienteSchema);

// Exportar el modelo Cliente
module.exports = Cliente;
