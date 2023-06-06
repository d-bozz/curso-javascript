"use strict"

//********************************
//*** Función Arrow | Fat Arrow | Lambda

// Esto es la forma rapida de escribir la funcion arrow cuando solo tenemos el return
var saludar = nombre => "Hola " + nombre;

// Esta funcion es igual a la anterior, pero queda mas legible de esta forma
var saludar = ( nombre ) => {
    "Hola " + nombre; // Este es un return explicito
}
console.log(saludar("Susana"));


// funcion arrow que reciba un number
var sumar = ( cantidad ) => {
    cantidad + 10
}
console.log(sumar(10)); 


// funcion arrow que recibe dos parametros
var calcular = ( datoA, datoB ) => {
    datoA + datoB
}
console.log(calcular(10, 15)); 


// funcion arrow que recibe dos parametros y suma un tercero
var generar = ( datoA, datoB ) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(generar(10, 15)); 


// funcion arrow que no recibe parametros
var validar = () => {
    return 'Validación correcta';
}
console.log(validar()) 


// funcion arrow con valores aleatorios
var getAleatorio = () => Math.random();
console.log('getAleatorio: ',getAleatorio());


// funcion arrow que me devuelve los parametros definidos
const crearPersona = ( nombre, apellido ) => ({ nombre, apellido});
const persona = crearPersona ('Damian','Boz');
console.log( persona );