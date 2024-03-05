// Seleccionamos el contenedor donde se agregarán las tarjetas
const containerPeliculas = document.querySelector(".containerCards");

function renderPeliculas(pelicula){
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
    
//Appendeamos todas las tarjetas ya construidas en el container de tarjetas
tempData.forEach(renderPeliculas)



//Cambiar fondo cuando se pasa el mouse por la imagen de las peliculas
window.onload = function() {
  const cards = document.querySelectorAll('.card');
  const body = document.querySelector('body');
  const article = document.querySelector('article');
  
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          const imageUrl = this.querySelector('img').src;
          body.style.backgroundImage = `url(${imageUrl})`;
          article.style.opacity = 0; //Oculto el titulo
      });

      card.addEventListener('mouseleave', function() {
          body.style.backgroundImage = 'none';
          article.style.opacity = 1; //Muestro titulo
      });
  });

};


