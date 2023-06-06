"use strict"

//********************************
//*** Ordenando un arreglo

// creo un arreglo
var platillos = ["Ceviche", "Tacos", "Pasta"];

console.log('Antes: ', platillos);

// ordeno los elementos de forma alfabetica A-Z
platillos.sort(); 

console.log('Ordenado: ', platillos);

// invierto el arreglo (no lo ordena)
//Si queremos ordenar Z-A tenemos que hacer primero el .sort() y luego el .reverse()
platillos.reverse(); 

console.log('Después: ', platillos);