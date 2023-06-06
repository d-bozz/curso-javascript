//controla la repeticion de patron
// el patron se repite 1 o mas veces
var expresion1 = /\d+/;

//se repite 1 o mas veces y tamien acepta que no este presente
var expresion2 = /\d*/;

console.log(expresion1.test('1997'));
console.log(expresion2.test('2008'));


//  +   *