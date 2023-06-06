"use strict";

//********************************
//*** Trabajando con Clases

class Persona {

    // Propiedades static
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Hola a todos, soy un metodo estatico');
    }

    // Propiedades
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // Constructor
    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    // getter y setter
    setComidaFavorita ( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () {
        return (`La comida favorita de ${ this.nombre } es ${ this.comida }`);
    }

    // Metodos
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

// creo dos intancias de la clase Persona
const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu vecino amigable');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// llamo a los metodos del objeto spiderman
spiderman.quienSoy();
spiderman.miFrase();

// utilizo el set del objeto persona
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
console.log( spiderman.getComidaFavorita );

// llamo al conteo estatico
console.log('conteo estatico', Persona._conteo);
console.log('conteo no estatico', Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';