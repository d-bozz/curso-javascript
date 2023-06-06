// Imprimo mensaje en la consola
console.log('Hola consola');

// Creo variables de tipo let
let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;

// Imprime una variable con los colores que especifico
console.log('%c Mis variables', 'color:blue; font-weight: bold');

// Imprime las variables y sus valores
console.log({ a });
console.log({ b });
console.log({ c });

// Imprime un tabla con el index y los valores que contiene
console.table({a, b, c, d, x });