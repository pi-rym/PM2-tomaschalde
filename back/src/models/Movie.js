const {Schema, model} = require('mongoose'); //Con destructuring agarramos la clase Schema y el metodo model

const movieSchema = new Schema({

    title: String,
    year: Number,
    director: String,
    duration: String,
    genre:{
        type:[],
    },
    rate: Number,
    poster: String
})

const Movie = model('Movie',movieSchema)

module.exports = Movie;