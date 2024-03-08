//Obtengo las peliculas desde la API y las convierto en tarjeta
const renderPeliculas = require('./renderFilms');

const getFilms = () => {
    $.get('https://students-api.2.us-1.fl0.io/movies', (data) => data.forEach(renderPeliculas) );
}

module.exports = getFilms

