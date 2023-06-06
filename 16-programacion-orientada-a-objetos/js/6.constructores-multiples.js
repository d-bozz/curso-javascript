class Persona {

    static porObjeto ( nombre, apellido, pais ) {
        return new Persona ( nombre, apellido, pais)
    }

    constructor ( nombre, apellido, pais ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Melisa',
apellido1 = 'Flores',
pais1 = 'Honduras';

const fer = {
    nombre: 'Damian',
    apellido: 'Boz',
    pais: 'Uruguay'
}

const persona1 = new Persona ( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto ( fer );

persona1.getInfo();