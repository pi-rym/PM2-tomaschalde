//Aca se hace la conexion a la base de datos desde una funcion.
const mongoose = require('mongoose');

const URI = "mongodb+srv://chaldetomas:0Kyy1kylvy7RDiJ7@clusterm2.felyu8p.mongodb.net/databaseM2?retryWrites=true&w=majority&appName=ClusterM2"

const dbConnection = async () => {
    await mongoose.connect(URI);
}

//exportarmos la funcion para que se realice la conexion cuando se ejecute la funcion exportada.
module.exports = dbConnection;