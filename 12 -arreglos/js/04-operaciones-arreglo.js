"use strict"

//********************************
//*** Operaciones básicas de un arreglo

// declaro un arreglo
var platillos = ["ceviche", "tacos", "pasta"];

console.log('Antes:', platillos);

// agregar elemento al final del arreglo
platillos.push("Tostadas");

// agrega un elemento al comienzo del arreglo
platillos.unshift("Queso");

// elimino un elemento del arreglo
platillos.pop();

// elimino multiples elementos de un arreglo, recibe posicion y elementos a eliminar
platillos.splice(1,1);

// transformo elementos del arreglo en texto
var mensaje = platillos.join();
console.log( mensaje);