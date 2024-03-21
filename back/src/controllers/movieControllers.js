const {getAllMovies, postMovieService} = require('../services/movieService');
module.exports = {
    
    getMovies: async (req,res) => {

        try {
            const movies = await getAllMovies();
            res.status(200).json(movies);

        } catch (error) {
            res.status(500).send(error.message);
        }

        
    },

    postMovies: async (req,res) => {
        try {
            await postMovieService(req.body);

            res.status(201).json({message: "la pelicula se creo exitosamente"});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
}