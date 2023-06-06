//********************************
//*** Propiedades y métodos del DOM

//***   Buscar por Id   ***/
// guardo el boton buscando por el id del html
var boton = document.getElementById("boton");

// para buscar por querySelector tengo que usar un #
var boton2 = document.querySelector("#boton");


//********************************
//***   Buscar por Class   ***/

// guardo el parrafo buscando por la classname
var parrafoPorClase = document.getElementsByClassName('principal')[0].textContent;

// para buscar por querySelector por clase uso el .
var parrafoPorClase2 = document.querySelector('.principal');


//********************************
//***   Buscar por TagName   ***/

// guardo el parrafo buscando por el tag name 
var todosLosParrafos = document.getElementsByTagName('p');


//********************************
//***   Diferencia entre querySelector y querySelectorAll   ***/

// recupera el primer elemento de la condicion
var parrafo = document.querySelector('p');

// recupera todos los elementos de la condicion
var parrafos = document.querySelectorAll('p');


//********************************
//***   Diferencia entre innerText e innerHTML   ***/

// modificando parrafos en el dom usando innertext
var parrafoInnerText = document.querySelector('p').innerText = 'parrafo modificado con inner text';

// modificando parrafos en el dom usando innerHTML
var parrafoInnerText = document.querySelector('p').innerHTML = '<b>Soy un parrafo con inner HTML</b>';


//********************************
//***   Manipulo imagenes en el DOM   ***/

// creo una imagen con valores
var foto = document.createElement('img');
foto.src = "foto1.jpg";
foto.name = "foto1";
foto.width = 400;
document.body.appendChild(foto);

// creo una funcion para cambiar la imagen al hacer click
foto.addEventListener('click', function () {

    if (this.name === 'foto1') {
        this.src = 'foto2.jpg';
        this.name = 'foto2';
    } else {
        this.src = 'foto1.jpg';
        this.name = 'foto1';
    }

})


//********************************
//***   Creo un evento para botones en el DOM   ***/

// creo una funcion para cambiar el color del boton al hacer click
boton.addEventListener('click', function () {
    boton.style.backgroundColor = "green";
    boton.style.color = "white";
    boton.style.width = "200px";
})


//********************************
//***   Como acceder a nodos hijos/padres de un elemento   ***/

// acceder al nodo hijo
var parrafo2 = document.querySelectorAll('p#parrafo2');
var nodoHijo = parrafo2.childNodes;

// acceder al nodo padre
var nodoPadre = parrafo2.parentNode;


//********************************
//***   Crear nuevos elementos en el DOM   ***/

// crear el elemento
var nuevoH1 = document.createElement('h1');

// crear nodo de texto para el elemento
var textoH1 = document.createTextNode('Hola mundo!');

// añadir el texto a los elementos
nuevoH1.appendChild(textoH1);


//********************************
//***   Eliminando elementos del DOM   ***/

// Se accede al padre
nuevoH1.removeChild(textoH1);

// se elimina el elemento directamente
nuevoH1.remove();


//********************************
//***   Obtener el valor de un atributo   ***/

// Obtener el elemento del párrafo 3 por su ID
var parrafo3 = document.querySelector("#parrafo3");

// Obtener el primer elemento <p> dentro del párrafo 3
var primerP = parrafo3.getElementsByTagName("p")[0];

// Obtener el atributo "style" del primer <p>
var estilo = primerP.getAttribute("style");


//********************************
//***   Modificar el titulo de una pagina   ***/

// modificar el título de la página
document.title = "Nuevo titulo";


//********************************
//***   Redirigir al usuario a otra pagina   ***/

// llevar al usuario a otra página diferente
document.URL = "http://nueva_pagina";