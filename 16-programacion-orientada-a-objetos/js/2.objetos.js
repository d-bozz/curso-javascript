"use strict";

//********************************
//*** Objetos, sus métodos y sus propiedades
//Javascript no tiene modificadores de acceso por lo que las propiedades se basan en como se definen para su nivel de acceso 
//propiedades estaticas, son propiedades que se asignan a la clase
//propiedades publicas
//propiedades privadas, accesibles solo desde la propia clase (no es muy usada en js)

class Pantalla {
    constructor(marca, modelo, pulgadas) {
//this.marca es la propiedad del objeto que lleva por nombre "marca"        
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }


    // getter y setter
    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

// creo dos instancias de la clase Pantalla
const tvSala = new Pantalla('Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);