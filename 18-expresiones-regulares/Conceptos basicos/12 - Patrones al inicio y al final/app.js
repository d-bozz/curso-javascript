
//indicamos un patron al inicio y al final
var expresionInicio = /^Any/;
var expresionFin = /Javascript$/;
var expIniciFin = /^Any|Javascript$/

// ^ Inicio
// $ Fin

console.log(expIniciFin.test('Any app that can be imagined can be made in Javascript'));