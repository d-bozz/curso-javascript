"use strict"

//************************************************
//*** Alternativa a usar condicionales con objetos

// sin usar if-else, switch. Solo objetos
var dia = 6;

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}
// si lo de la izquierda no es null lo imprime, de lo contrario imprime lo de la derecha
console.log( diasLetras[dia] || 'Dia no definido');


// Si quisiera ejecutar funciones podria hacerlo de la siguiente manera:
var dia2 = 6;

const diasLetras2 = {
    0: ()=> 'domingo - 0',
    1: ()=> 'lunes - 1',
    2: ()=> 'martes - 2',
    3: ()=> 'miercoles - 3',
    4: ()=> 'jueves - 4',
    5: ()=> 'viernes - 5',
    6: ()=> 'sabado - 6',
}
// Ejecuto la funcion que quiero pasandole el dia
console.log( diasLetras2[dia]() );