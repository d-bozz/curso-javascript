
// creo el objeto personaje
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje ); // imprimo el objeto personaje

console.log('Nombre', personaje.nombre ); // imprimo el valor nombre
console.log('Nombre', personaje['nombre'] ); // otra forma de imprimir el valor nombre
console.log('Edad', personaje.edad ); // imprimo la edad del personaje


console.log('Coors', personaje.coords ); // imprimo el valor de coors, devuelve lat y lng
console.log('Lat', personaje.coords.lat ); // imprimo el valor de lat dentro de coors

console.log('No. Trajes', personaje.trajes.length ); // imprimo el numero de trajes
console.log('último traje', personaje.trajes[ personaje.trajes.length - 1 ] ); // imprimo el ultimo traje

const x = 'vivo'; // declaro una constante 'vivo'
console.log('Vivo', personaje[x] ); // js busca en el objeto personaje el valor de la constante 'vivo'. Devuelve false

console.log('Última película', personaje['ultima-pelicula'] ); // busco el valor de ultima-pelicula en el objeto personaje. Devuelve 'Infinity War'


delete personaje.edad; // elimino el campo edad
console.log( personaje );

// crear propiedad en el tiempo de ejecucion
personaje.casado =  true;

// trabajar al objeto como si fuera un arreglo de pares
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// hace que nuestro objeto no pueda modificarse en tiempo de ejecucion
Object.freeze( personaje );

personaje.dinero = 10000000000; // no agrega la propiedad debido al freeze
personaje.casado = false; // no modifica propiedades debido al freeze
personaje.direccion.ubicacion = 'Costa Rica'; // modifica la ubicacion, esto ya que es un objeto dentro de mi objeto
console.log( personaje );


const propiedades = Object.getOwnPropertyNames( personaje ); // guardo un array con el nombre de las propiedades
const valores     = Object.values( personaje ); // guardo un array con los valores de las propiedades 
console.log({ propiedades, valores }); // imprimo los array