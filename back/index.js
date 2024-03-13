//Este modulo es el entry point, es quien 'prende la luz' una vez que todo arranca
const app = require('./src/server');

const PORT = 3001;
/*
    Necesitamos que nuestro servidor ya creado (server.js) tenga la capacidad de recibir solicitudes (quede funcionando a la espera 
    de solicitudes).

    Para esto tenemos el metodo "listen" que le va a indicar a nuestro servidor que tiene que empezar a "escuchar" solicitudes.
    
    app.listen(puerto, callback())

    En puerto le indicamos en que puerto de nuestra computadora va a estar el servidor "escuchando" las solicitudes.
    La funcion callback se va a ejecutar luego de que el metodo listen pueda hacer su trabajo, es decir que, se pudo ejecutar el
    metodo listen, se puso a "escuchar" a nuestro servidor en el puerto indicado, entonces se ejecuta la callback.
 */

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

//El servidor ya quedo listo para recibir solicitudes