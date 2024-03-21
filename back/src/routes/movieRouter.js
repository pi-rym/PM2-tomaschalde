//Hacemos un enrutador para las movies
const {Router} = require('express');
const movieRouter = Router();
const validateMovie = require('../middlewares/validateMovie')

const { getMovies, postMovies } = require('../controllers/movieControllers'); //requerimos el controlador

movieRouter.get('/',getMovies);
movieRouter.post('/',validateMovie,postMovies);

/*
  ¿Por que en movieRouter.get no ponemos como ruta /movies?
  Porque es el enrutador el que se encargo de eso. No necesitamos que movieRouter lo vuelva a chequear. Si llegamos hasta acá
  es porque ya estamos en /movies.
*/

module.exports = movieRouter;