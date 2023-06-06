//contabilizo los patrones
//d{1,2} = 1 digito como minimo, 2 como maximo
//d{4} = 4 digitos minimo
//d{2,} = 2 digitos minimo
var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/;


console.log(expresion1.test('27-06-2007 11:45'));