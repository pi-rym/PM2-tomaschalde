const mostrarYOcultar = () => {
    // Obtener todas las secciones
    const secciones = document.querySelectorAll('.seccionCines, .seccionApps');
  
    // Agregar evento de clic a cada sección
    secciones.forEach(function(seccion) {
      seccion.addEventListener("click", function() {

          this.classList.toggle("activo");
        
      });
    });

}

module.exports = mostrarYOcultar;
