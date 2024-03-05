document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las secciones
    const secciones = document.querySelectorAll('.seccionCines, .seccionApps, .seccionRecomendaciones');
  
    // Agregar evento de clic a cada sección
    secciones.forEach(function(seccion) {
      seccion.addEventListener("click", function() {
        // Verificar si el objetivo del clic es el formulario
        if (!event.target.closest('.form-recomendaciones textarea')) {
          // Si no es el formulario, alternar la clase "activo" para mostrar u ocultar el contenido
          this.classList.toggle("activo");
        }
      });
    });

    // Agregar evento de clic al formulario para evitar que se propague el evento
    const formulario = document.querySelector('.form-recomendaciones');
    formulario.addEventListener("click", function(event) {
      event.stopPropagation();
    });
});