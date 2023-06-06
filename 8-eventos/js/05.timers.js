"use strict"

//*** Temporizadores o timers
//********************************

// setInterval
// setTimeout

//despues de 3 segundos se ejecuta la accion de setColor
 setTimeout(function () {
    console.log("Ejecutando un setTimeout esto se ejecuta una sola vez");
     setColor();
 }, 3000);


 //Se ejecuta cada 1 segundo y me muestra la hora en consola
setInterval(() =>{
console.log(new Date().toLocaleTimeString());
},1000)

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor() {
    clearInterval(temporizador)
}