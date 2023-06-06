"use strict"

// Declaro una variable global nombre con el tipo de dato string
let nombre = 'variable global';

// Creo una funcion saludo con dos variables locales dentro 
function saludo() {
  let nombre = 'variable local';
  console.log(nombre)   
  let edad = 34; 
  console.log(edad)
}

// console.log(edad) // Lanza un error ya que edad no se encuentra definido de manera global

saludo(); // Imprime el valor de la variable local nombre, y edad