"use strict"

//********************************
//*** Buscando en un arreglo

// declaro un arreglo platillos
var platillos = ["ceviche", "tacos", "pasta"];

// buscar el indice del elemento del arreglo 'tacos'
var indice = menu.indexOf( "tacos" );
console.log(indice) 

// creo un arreglo menu
var menu = [
	{nombre: 'Ceviche', precio: 20, pais: 'Perú'},
	{nombre: 'Tacos', precio: 10 , pais: 'México'},
	{nombre: 'Pasta', precio: 50, pais: 'Italia'}
];

// busco el elemento cuyo nombre es Tacos
var pElegido1 = menu.find( platillo => platillo.nombre == 'Tacos');
console.log(pElegido1)