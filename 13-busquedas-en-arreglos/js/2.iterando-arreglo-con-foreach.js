"use strict"

//********************************
//*** Iterando arreglos con forEach

// creo el arreglo platillos
var platillos = ["ceviche", "tacos", "pasta"];

// imprimo cada elemento del arreglo platillos
platillos.forEach( platillo => console.log(platillo) )

// imprimo cada elemento del arreglo platillo y su indice
platillos.forEach( (platillo, index) => console.log(index, platillo) )