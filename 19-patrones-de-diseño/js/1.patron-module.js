"use strict";

//********************************
//*** Patron Modulo

var MiModulo = (function() {
    // Variables privadas
    var variablePrivada = "Soy privada";
  
    // Función privada
    function funcionPrivada() {
      console.log("Esta es una función privada");
    }
  
    // Función pública
    function funcionPublica() {
      console.log("Esta es una función pública");
    }
  
    // Exponer funciones y variables públicas
    return {
      funcionPublica: funcionPublica,
      variablePublica: "Soy pública"
    };
  })();
  
  // Uso del módulo
  MiModulo.funcionPublica(); // Salida: "Esta es una función pública"
  console.log(MiModulo.variablePublica); // Salida: "Soy pública"
  console.log(MiModulo.variablePrivada); // Salida: undefined
  MiModulo.funcionPrivada(); // Salida: Uncaught TypeError: MiModulo.funcionPrivada is not a function
  