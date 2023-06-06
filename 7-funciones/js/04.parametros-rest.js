"use strict"

//********************************
//*** Parámetros REST

// crea un arreglo con todos los elementos que se le envian utilizando ... en el parametro
function cocinar(...masIngredientes) {
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2);
    console.log("masIngredientes", masIngredientes);
}

// mando multiples elementos para convertir en array
cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "Chile");


// quiero que me devuelva la edad como un valor y un array
const imprimeArgumentos = (edad, ...args) => {
    console.log({ edad, args });
}

// imprime la edad y un array con el resto de los parametros
imprimeArgumentos(10, true, false, 'Damian', 'Boz');