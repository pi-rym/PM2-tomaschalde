//En este modulo vamos a definir las rutas a traves de las cuales nos podemos comunicar

const {Router} = require('express'); //Dentro de express obtenemos la clase Router
const router = Router(); //Creamos un enrutador que sera el principal

const movieRouter = require('./movieRouter') //requerimos el controlador

//Hacemos que una solicitud viaje hacia un camino
router.use('/movies',movieRouter); // Si la solicitud es /movies va a encaminar esta solicitud hacia el movieRouter

/*
    ¿Que hace router.get('/movies',movieRouter)?
    Crea una ruta de tipo GET a /movies. Entonces vamos a poder recibir la solicitud a la ruta /movies.
    Cuando se reciba la solicitud de tipo GET se va a dirigir al router de peliculas (que va a ejecutar el controlador)

*/

module.exports = router;