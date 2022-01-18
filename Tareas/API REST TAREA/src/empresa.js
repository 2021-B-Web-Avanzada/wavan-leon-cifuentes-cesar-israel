//modelo de la base de datos
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const empresa = new Schema(
    {
        nombre: String,
        descripcion: String,
        fechaFundacion: Date,
        webSite: String
    }
)
module.exports = mongoose.model('Empresa',empresa);
