"use strict"

//********************************
//*** Iterando arreglos con for...in

// creo el arreglo platillos
var platillos = ["ceviche", "tacos", "pasta"];

// creo un for para recorrer el arreglo
for ( let i in platillos) {
    console.log(platillos[i])
}