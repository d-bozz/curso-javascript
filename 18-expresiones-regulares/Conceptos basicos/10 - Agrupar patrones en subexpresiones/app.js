
//Se hace evaluacion del patron con repeticion de subexpresiones
//Woo aparece una vez
//hoo aparece mas de una vez
var expresion1 = /Woo+(hoo+)+/i;


console.log(expresion1.test('Wooohooohooohooo'));