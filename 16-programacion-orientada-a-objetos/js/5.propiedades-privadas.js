"use strict";

//********************************
//*** Propiedades Privadas

class Rectangulo {
    // propiedad privada, no puede ser accedida desde fuera de la clase Rectangulo
    #area = 0;
    
    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    calcularArea(){
        console.log( this.#area * 2 );
    }

    // metodo privado, no puede ser accedido desde fuera de la clase Rectangulo
    #metodoPrivado(){
        console.log('Hola, soy un metodo privado');
    }
}

const rectangulo = new Rectangulo(10, 15);
rectangulo.calcularArea();

console.log(rectangulo);