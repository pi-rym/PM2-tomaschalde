//Solucion con jQuery
const renderPeliculas = (pelicula) => {
    // Seleccionamos el contenedor donde se agregarán las tarjetas
    const containerPeliculas = document.querySelector(".containerCards");
    //Creo el contenedor que tendra a cada pelicula
    const movieElement = document.createElement('div');
    movieElement.classList.add('card');

    movieElement.innerHTML = `
                        <h3>${pelicula.title} (${pelicula.year})</h3>
                        <img src= "${pelicula.poster}" alt="${pelicula.title}">
                        <p> <strong>Director: </strong> ${pelicula.director}</p>
                        <p> <strong>Duración: </strong> ${pelicula.duration}</p>
                        <p> <strong>Genero: </strong> ${pelicula.genre.join(', ')}</p>
                        <p> <strong>Validación: </strong> ${pelicula.rate}</p>
                        `
    
    containerPeliculas.appendChild(movieElement);
}

module.exports = renderPeliculas;