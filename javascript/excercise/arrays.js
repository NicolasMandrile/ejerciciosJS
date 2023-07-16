// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
// "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
// consola los meses 5 y 11 (utilizar console.log).

var arreglo1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Elemento 5: " + arreglo1[4] + " Elemento 11: " + arreglo1[10]); 

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var ej3B = arreglo1.sort();
console.log(ej3B);

// Agregar un elemento al principio y al final del array (utilizar unshift y push).

arreglo1.unshift("Principio");

arreglo1.push("Fin");

console.log(arreglo1);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).

arreglo1.shift();

arreglo1.pop();

console.log(arreglo1);

// Invertir el orden del array (utilizar reverse).

arreglo1.reverse();

console.log(arreglo1);

// Unir todos los elementos del array en un único string donde cada mes este
// separado por un guión - (utilizar join).

var arreglo2 = arreglo1.join(" - ");

console.log(arreglo2);

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
// (utilizar slice).

var arreglo3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Elemento 5: " + arreglo1[4] + " Elemento 11: " + arreglo1[10]); 

var arreglo4 = arreglo3.slice(4, 11);

console.log(arreglo4);