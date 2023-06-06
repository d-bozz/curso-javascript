"use strict"

//********************************
//*** Ciclo WHILE | Ciclo Indefinido
// Iteración indeterminada o desconocida

var productos = 5; 

while(productos > 0) { 
   	console.log( 'Producto vendido');
   	productos--;
   debugger;
}


// ejemplo 2 recorriendo array
const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

while (i < carros.length){
	console.log(carros[i]);
	i++;
}


//  ejemplo 3 usando break y continue

while ( carros[i] ) {
	if ( i === 4 ){
		break;
	}
	else 
	{
		console.log( carros[i] );
		i++
		continue;
	}
}