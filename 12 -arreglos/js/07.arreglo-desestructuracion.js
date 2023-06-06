"use strict"

//********************************
//*** Desestructuración de arreglos

// creo una arreglo de platillos
var platillos = ["ceviche", "tacos", "pasta", "tostadas"];

// quiero guardar los valores del arreglo individualmente
var platillo1 = platillos[0];
var platillo2 = platillos[1];
var platillo3 = platillos[2];

// Una forma mas efectiva es utilizando desestructuracion de arreglos
var [platillo1, platillo2, platillo3, platillo4] = platillos;

// imprimo el valor de las variables
console.log(platillo1, platillo2, platillo3, platillo4)