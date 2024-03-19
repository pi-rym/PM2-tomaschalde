//Aca se hace la conexion a la base de datos desde una funcion.
const mongoose = require('mongoose');
require('dotenv').config()

const URI = process.env.URI;

const dbConnection = async () => {
    await mongoose.connect(URI);
}

//exportarmos la funcion para que se realice la conexion cuando se ejecute la funcion exportada.
module.exports = dbConnection;