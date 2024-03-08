//Cambiar fondo cuando se pasa el mouse por la imagen de las peliculas
const ocultar = $('.containerCards').on('mouseenter', '.card', function() {
    
    const imageUrl = $(this).find('img').attr('src');
    $('body').css('background-image', `url(${imageUrl})`);
    $('article').css('opacity', 0); // Ocultar el título

  });
  

  

module.exports = ocultar;

  /* 
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

  */