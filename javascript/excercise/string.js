//Ejercicio Strings

// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase)

var cadena1 = 'Esto tiene al menos 10 caracteres';

var res = cadena1.toUpperCase();

console.log('El resultado es:', res);


//  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
//  string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var cadena2 = 'nicolasmandrile';
var cadena3 = cadena2.substring(0, 5);
console.log(cadena3);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).


var cadena4 = 'nicolasmandrile';
var cadena5 = cadena4.substring(7, 10);
console.log(cadena5);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).


var cadena6 = 'nicolasmandrile';
var cadena7 = cadena6.substring(0,1).toUpperCase();
var cadena8 = cadena6.substring(1,10).toLowerCase();

var cadena9 = cadena7 + cadena8;

console.log(ej2D4);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).


var cadena10 = 'nicolas mandrile';

var cadena11 = cadena10.indexOf(' ');
console.log(cadena11);


// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).


var cadena12 = "nicolas mandrile";
var cadena13 = cadena12.indexOf(" ");
var cadena14 = cadena12.substring(0, 1).toUpperCase()
var cadena15 = cadena12.substring(1, ej2FPosit).toLowerCase();
var cadena16 = cadena12.substring(ej2FPosit + 1, ej2FPosit +2).toUpperCase();
var cadena17 = cadena12.substring(ej2FPosit + 2).toLowerCase()

var cadena18 = cadena14 + cadena15 + " " + cadena16 + cadena17;

console.log(cadena18);
