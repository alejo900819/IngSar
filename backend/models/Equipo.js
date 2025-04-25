const mongoose = require('mongoose');

// Definir el esquema del modelo Equipo
const EquipoSchema = new mongoose.Schema({
  ref: {
    type: String,
    required: true,
  },
  tipoEquipo: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  serie: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

// Crear el modelo Equipo basado en el esquema
const Equipo = mongoose.model('Equipo', EquipoSchema);

// Exportar el modelo Equipo
module.exports = Equipo;