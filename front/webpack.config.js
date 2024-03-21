module.exports = {

    entry:{

        ind: './scripts/index.js',
        recom: './scripts/recomendaciones.js',
        crear: './scripts/crearPelicula.js'

    },    //Es el entry point, por donde quiero webpack arranque a recorrer.
    
    output: { //Archivo de salida, donde va a estar y como se va a llamar

        path: __dirname + "/public", //Nombre de la carpeta donde estamos trabajando
        filename:"[name].bundle.js"         // Al archivo donde quedará el resultado del recorrido
    },


};