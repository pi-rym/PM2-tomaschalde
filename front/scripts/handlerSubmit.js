const axios = require('axios');
const {validateCheckboxes,valuesCheckboxes} = require('./checkboxes');

//enviar formulario
async function handlerSubmit(event){

    event.preventDefault();
    const inputTitle = document.getElementById('title');
    const inputYear = document.getElementById('year');
    const inputDirector = document.getElementById('director');
    const inputDuracion = document.getElementById('duration');
    const inputRate = document.getElementById('rate');
    const inputPoster = document.getElementById('poster');

    const title = inputTitle.value;
    const year = inputYear.value;
    const director = inputDirector.value;
    const duration = inputDuracion.value;
    const rate = inputRate.value;
    const poster = inputPoster.value;

    const genresValidates = validateCheckboxes();
    const genresValues = valuesCheckboxes();

    //Validado por HTML Y Javascript
    if(![title, year, director, duration, rate, poster,genresValidates].every(Boolean)) return alert ("Faltan llenar campos");

    //CREAR OBJETO que representa el body
        // Crear el objeto que representa el body de la petición
        const bodyData = {
            title,
            year,
            director,
            duration,
            genre: genresValues,
            rate,
            poster,
            
        };
        
        console.log(bodyData);
        try {
            // Realizar la solicitud POST utilizando Axios
            const response = await axios.post('http://localhost:3000/movies', bodyData);
    
            // Si la solicitud se realiza correctamente, mostrar un mensaje de éxito
            alert("Película creada exitosamente");
    
            // Puedes hacer algo más con la respuesta del backend si es necesario
            console.log(response.data);
        } catch (error) {
            // Manejar cualquier error que pueda ocurrir durante la solicitud
            console.error("Error al crear la película:", error);
            alert("Error al crear la película. Por favor, intenta de nuevo más tarde.");
        }




}

module.exports = handlerSubmit;