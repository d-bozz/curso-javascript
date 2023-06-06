"use strict"

//********************************
//*** Parámetros SPREAD

// creo una funcion con 4 parametros
function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log('Ingrediente1: ', ingrediente1); // imprime Ingrediente1: Pollo
    console.log('Ingrediente2: ', ingrediente2); // imprime Ingrediente2: Tomate
    console.log('Ingrediente3: ', ingrediente3); // imprime Ingrediente3: Arroz
    console.log('Otros: ', otros) // imprime un array con ["Pescado", "Chile"]
}

var ingredientesBase = ["Pollo", "Tomate"]; // ingrediente1 e ingrediente2
cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");


// ejemplo 2 de spread
const miNombre = ["Sofela", "es", "mi"];
const sobreMi = ["Oluwatobi", ...miNombre, "nombre."];

console.log(sobreMi); // imprime el array [ "Oluwatobi", "Sofela", "es", "mi", "nombre." ]