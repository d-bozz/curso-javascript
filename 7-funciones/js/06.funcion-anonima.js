"use strict"

//********************************
//*** Función Anonima

/*(
    function(){
        var mensaje = "Hola de nuevo";
        console.log(mensaje);
    }
)()*/

// las funciones anonimas son funciones que se definen sin nombre
// la funcion es almacenada en una variable, es creada en tiempo de ejecucion y se guarda en memoria
var saludar = function(nombre){
    var mensaje = "Hola " + nombre;
    return mensaje;
}