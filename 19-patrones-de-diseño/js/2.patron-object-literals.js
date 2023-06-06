"use strict";

//********************************
//*** Patron objetos literales

// Se inicia la declaracion del patron ObjectLiteral
var MyObjectLiteral = {
	suma: function(valor_a, valor_b) {
		let resultado = valor_a + valor_b;
		console.log("EL resultado de "+ valor_a +"+"+ valor_b +" = "+ resultado);
	},
	resta: function(valor_a, valor_b) {
		let resultado = valor_a - valor_b;
		console.log("EL resultado de"+ valor_a +"-"+ valor_b +" = "+ resultado);
	},
};

// invocando a la funcion suma
MyObjectLiteral.suma(10, 90);
// invocando a la funcion resta
MyObjectLiteral.resta(90, 30);