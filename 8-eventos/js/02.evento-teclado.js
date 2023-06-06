"use strict"


//********************************
//*** Eventos del teclado


// keydown
// keypress
// keyup


//Mostrar que tecla se pulso
window.addEventListener("keydown", function (event) {
	console.log('Pulsando tecla');
	console.log(String.fromCharCode(event.keyCode))
})


window.addEventListener("keypress", function (event) {
	console.log('Tecla pulsada')
})


window.addEventListener("keyup", function (event) {
	console.log('Tecla liberada')
})