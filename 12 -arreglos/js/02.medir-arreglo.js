"use strict"

//********************************
//*** Medir y acceder a un arreglo

// declaro el arreglo
var platillos = ["ceviche", "tacos", "pasta", "tostadas"];

// imprimo el largo del arreglo
console.log("Hay "+ platillos.length + " platillos en el menú");

// obtengo el penultimo valor del arreglo
var platillo = platillos[platillos.length -1];

// lo imprimo en consola
console.log("El platillo seleccionado es: ", platillo)