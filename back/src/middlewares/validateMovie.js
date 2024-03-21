const validateMovie = (req,res,next) => {
                                    
	const {title, year, director, duration, genre, rate, poster} = req.body;
	
	//Vamos a preguntar si tiene todos los campos
	if(!title || !year || !director || !duration || !genre || !rate || !poster) return res.status(400).json({message: "faltan datos por completar"});
		
	next()
}

module.exports = validateMovie;