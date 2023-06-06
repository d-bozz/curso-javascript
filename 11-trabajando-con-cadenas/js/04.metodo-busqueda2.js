"use strict"

//********************************
//*** Métodos búsqueda | Parte 2

var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

// match me devuelve los valores que coniciden con lo ingresado
var resultadoMatch = mensaje.match(/aprendiendo/gi);
console.log("resultadoMatch",resultadoMatch);


// substring me devuelve lo que hay entre el valor inicial y el final que le mando
var resultadoSubstring = mensaje.substring(6,28);
console.log("resultadoSubstring",resultadoSubstring);


// charAt me devuelve el char que hay en la posicion que le indico
var resultadocharAt = mensaje.charAt(0);
console.log("resultadocharAt",resultadocharAt);