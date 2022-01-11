const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const morgan = require('morgan');
const app = express();

 // Middlewares: función que procesa datos antes que el servidor lo reciba
//npm i nodemon -D // Para reiniciar el servidor automáticamente

//Conección de base de datos

mongoose.connect('mongodb://localhost/entidades', function (err,res){
    if(err) console.log('ERRO: Conectando a la BD', err);
    else console.log('Conexión BD exitosa');
})

//Configuraciones
// create application/json parser
var jsonParser = bodyParser.json()

app.set('port', process.env.PORT || 3000);// Se define el puerto para utilizarlo posteriomente o tomar el puerto que nos da algún servicio

//RUTAS
require('./routes')(app,jsonParser); // se llama a las rutas

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'));

//comenzando el servidor
app.listen(app.get('port'));


