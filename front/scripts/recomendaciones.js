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

//Funcion autoinvocada. Se invoca cuando en el documento html se llega a la etiqueta script. Ahorramos el hecho de poner una funcion y llamarla dentro de este codigo
(function (){

  const form = document.querySelector('#form')

  form.addEventListener('submit', (evento) => { //Cuando el usuario hace click en el boton submit, realiza esto

      if(!form.checkValidity()){ //Si el formulario no esta validado
          
          //Frenamos todo el proceso
          evento.preventDefault() 
          evento.stopPropagation()  

          //Agregamos esta clase de bootstrap para informar que el formulario no esta validado (esta clase es de bootstrap)
          form.classList.add('was-validated')
      }
      else
          alert('Formulario Enviado')
  })  
}) ()