const express = require ('express'); // requerimos express (nos da una funcion)

const app = express(); // Invocamos la funcion que nos entrega express y la guardo en server. Nuestro servidor "vive" dentro de server

/* 
    Es server quien recibe la solicitud en primer lugar, y sera server quien conduce esa solicitud hacia el enrutador
    Entonces mi enrutador y server tienen que conocerse, para que server pueda decir "cuando reciba una solicitud quiero que vaya hacia
    este enrutador".
    Entonces:
*/

const router = require('./routes/index');

app.use(router);

/*
    ¿Que hace app.use(router)?
    Esto significa que cuando server recibe la solicitud (es el primero que recibe la solicitud) que la envie.
    use es un metodo que me permite decir "quiero que la solicitud tome este camino". Entonces en este caso decimos que quiero que la 
    solicitud tome el camino de este enrutador (el router que requerimos).
    Entonces la solicitud va a continuar su viaje hacia el enrutador, donde se encuentra con un endpoint de tipo GET a '/movies' para 
    que se ejecute el controlador.
*/

module.exports = app; //Exportamos para que index (el entry point) conozca al servidor para ponerlo a funcionar.
