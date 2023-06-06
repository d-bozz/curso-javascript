"use strict"

//********************************
//*** Operador ternario o condicional

var datoA = 110;
var datoB = 20;
var estado = true;


// Condición ? TRUE : FALSE
var resultado = (datoA > datoB) ? "Si es mayor" : "No es mayor";

//la linea 11 es lo mismo que hacer
var resultado = ""
if (datoA > datoB)
    resultado = "Si es mayor"
else
    resultado = "No es mayor"


console.log("El resultado con el operador ternario u operador condicional es: ", resultado);


// ejemplo 2 
// si estado es true entonces asigno 'continuar' de lo contrario asigno 'detenerse'

var accion = (estado) ? 'continuar' : 'detenerse';


// ejemplo 3
//Si es dia de semana el local abre a las 11, si es fin de semana a las 9 

const dia = 1; //0: domingo, 1: lunes...
let horaApertura = ( [0,6].includes ( dia )) ? 9 : 11;


let mensaje = ( horaActual >= horaApertura) ? 'esta abierto' : 'esta cerrado, abrimos a las' + horaApertura;