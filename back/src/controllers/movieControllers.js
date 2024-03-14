const movieService = require('../services/movieService');
module.exports = {
    
    getMovies: async (req,res) => {

        try {
            const movies = await movieService.getAllMovies();
            res.status(200).json(movies);

        } catch (error) {
            res.status(500).send(error.message);
        }

        
    }
}