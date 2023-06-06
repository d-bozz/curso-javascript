"use strict"

//********************************
//*** Ciclo FOR | Ciclo Definido
// Repetición = iteración

// COMPONENTES DE UN CICLO FOR
// Contador
// Condición o evaluación
// Paso | incrementador o decrementador


var productos = 5;

for (let contador = 0; contador < productos; contador++) {
    console.log("Producto #"+ contador);
    debugger;
}



const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];


// ejemplo 2. Recorriendo un array con un for tradicional
console.warn('for traditional');
for ( let i=0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


// ejemplo 3. Recorriendo array con un for in
console.warn('For in');
for ( let i in heroes ) {
    console.log( heroes[i] );
}


// ejemplo 4. Recorriendo array con un for of
console.warn('For on');
for ( let heroe of heroes ) {
    console.log( heroe );
}