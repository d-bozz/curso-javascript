//********************************
//*** Entendiendo el DOM y el BOM

// guardo el boton identificando por el id
var boton = document.getElementById("boton");

// detecto el evento click
boton.addEventListener('click', function () {
    console.log(window.location.href);

    window.location.href = 'http://github.com/yacafx';
})