const validacion  = () => {

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
}

module.exports = validacion;
