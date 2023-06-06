"use strict";

// JSON => JavaScript Object Notation

var persona = { nombre: "Sergio", twitter: "yacafx" };

var personas = [
  { nombre: "Hugo", twitter: "dcHugo" },
  { nombre: "Paco", twitter: "dcPaco" },
  { nombre: "Luis", twitter: "dcLuis" },
  persona,
];

//Pasar JSON a String
var personaJSON = JSON.stringify(persona);

//Pasar String a JSON
var nuevaPersona = JSON.parse(personaJSON);



/***************  Obtener un JSON de una web externa ***************/
var url =
  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Santo%20Domingo%2C%20DO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
$.getJSON(url, function (productos) {
  console.log(productos);
});


/*************** Obtener un JSON de un documento local ***************/

$.getJSON("productos.json", function (productos) {
  var totalProductos = productos.length;

  for (var i = 0; i < totalProductos; i++) {
    console.log(productos[i].nombre);
  }
});
