"use strict"

//********************************
//*** Generación de arreglos con split() from() y of()


//--- split()
var mensaje = "ceviche, tacos, pasta";
var platillosSplit = mensaje.split(', ');
console.log(platillosSplit);

//--- Array.from();
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'))
console.log(platillosHTML);

//--- Array.map();
var platillosFrom = platillosHTML.map( platillo => platillo.textContent )
console.log(platillosFrom);

//--- Array.of();
var platillosOf = Array.of("ceviche", "tacos", "pasta");
console.log(platillosOf);
