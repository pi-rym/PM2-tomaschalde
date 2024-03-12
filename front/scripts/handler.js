//Obtengo las peliculas desde la API y las convierto en tarjeta
const renderPeliculas = require('./renderFilms');

//Requiero libreria axios
const axios = require('axios');


const getFilms = async () => {

    try {
        const {data} = await axios.get('https://students-api.up.railway.app/movies')

        data.forEach(renderPeliculas);


    } catch (error) {
        alert(error.message);   
    }

}

module.exports = getFilms

