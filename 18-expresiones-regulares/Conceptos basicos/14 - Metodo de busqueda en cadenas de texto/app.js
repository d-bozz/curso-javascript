var mensaje = '  Esta historia continuara...'
var mensaje2 = 'Estahistoriacontinuara...'

//  \W Cualquier caracter que no sea alfanumerico
//  \S Cualquier caracter que no sea espacio en blanco

//Devuelve 0, ya que es el primer caracter que coincide
console.log(mensaje.search(/\W/));

//Devuelve 2, ya que es cuando comienzan los caracteres
console.log(mensaje.search(/\S/));

//Devuelve /1, ya que no encuentra valores coincidentes
console.log(mensaje2.search(/\W/));