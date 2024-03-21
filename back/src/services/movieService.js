
const {Movies} = require('../types/class');
const Movie = require('../models/Movie');

module.exports = {
    //hacer una funcion de tipo async que retorne un arreglo con las peliculas que tenemos.
    //Podemos hacerle una peticion a la api y copiar y pegarlo acá. Para responder con ese mismo objeto.
    getAllMovies: async () => {
            
            try {
                
                const data = await Movie.find();
                const movies = data.map((movie) => new Movies(movie));
                
                return movies;

            } catch (error) {
                throw new Error(error);
            }
    },

    postMovieService: async (movie) => {
        try {
            const newMovie = await Movie.create(movie);
            return newMovie;
        } catch (error) {
            throw Error (error.message)
        }
    }

}



/* 

const axios = require('axios');
const {Movies} = require('../types/class');

module.exports = {
    //hacer una funcion de tipo async que retorne un arreglo con las peliculas que tenemos.
    //Podemos hacerle una peticion a la api y copiar y pegarlo acá. Para responder con ese mismo objeto.
    getAllMovies: async () => {
            
            try {
                
                const {data} = await axios('https://students-api.up.railway.app/movies');
                const movies = data.map((movie) => new Movies(movie));
                console.log(movies);
                return movies;

            } catch (error) {
                throw new Error(error);
            }
    }

}
*/