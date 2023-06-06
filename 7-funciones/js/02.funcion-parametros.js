"use strict"


//********************************
//*** Parámetros de una función

// Esta funcion recibe dos parametros
function saludar(nombre, edad) {
	console.log('Hola: ', nombre);
	console.log('Edad: ', edad);
	var resultado = nombre + " tiene " + edad + " años";
	return resultado;
}

// creo una variable y mando dos valores por parametros
var mensaje = saludar("yacaFx", 34);

console.log(mensaje)


// funcion que retorna dos valores
function dobleReturn (numero1, numero2) {
    let suma = numero1 + numero2;
    let resta = numero2 - numero1;
    return [suma, resta];
}
console.log('suma:',dobleReturn(4,8)[0], 'resta:', dobleReturn(4,8)[1])