"use strict"

//********************************
//*** Estructura básica de una función

//**** Tipos de Methodos ****

// Métodos estáticos (de la clase)
// Métodos públicos
// Métodos privados, metodos creados dentro del constructor
// Métodos privilegiados,  métodos que son públicos y que a la vez pueden acceder a las propiedades privadas y manipularlas.

// No contamos con modificadores de acceso para indicar el tipo, por lo que su propio contexto los define.

// funcion sin parametros que retorna un string
function saludar() {
    var saludo = "Hola Mundo";
    //console.log(saludo);
    return saludo;
}

saludar();