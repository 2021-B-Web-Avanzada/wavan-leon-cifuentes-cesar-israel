//modelo de la base de datos
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const aplicacion= new Schema(
    {
        empresa: String,
        nombre: String,
        descripcion: String,
        fechaCreacion: Date,
        versionActual: String,
        costo: String
    }
)
module.exports = mongoose.model('Aplicacion',aplicacion);