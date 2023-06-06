var expresion1 = new RegExp('abc');
console.log(expresion1.test('abcdef'));

var expresion2 = /Hola Mundo/;

//devuelve true o false dependiendo si encuentra el patron
console.log(expresion2.test('El primer programa es Hola Mundo'));