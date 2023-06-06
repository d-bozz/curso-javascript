"use strict"

//********************************
//*** funcion con parametros predeterminados

// se crea una funcion con el parametro cantidad predeterminado
function contar(cantidad = 20) {
	console.log('Total: ', cantidad);
}

// Si llamo a la funcion y le mando un valor, esta toma el valor enviado
contar(100);

// Si llamo a la funcion sin mandar valores me toma el valor predeterminado
contar();