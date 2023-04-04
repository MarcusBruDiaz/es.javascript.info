//Distinto. En matemáticas la notación es ≠, pero en JavaScript se escribe como una asignación con un signo de exclamación delante: a != b.

//En este artículo, aprenderemos más sobre los diferentes tipos de comparaciones y de cómo las realiza JavaScript, incluidas las peculiaridades importantes.

//Booleano es el resultado

/**
 * Como todos los demás operadores, una comparación retorna un valor. En este caso, el valor es un booleano.

true – significa “sí”, “correcto” o “verdad”.
false – significa “no”, “equivocado” o " no verdad".
 * 
 */

//El resultado de una comparación puede asignarse a una variable, igual que cualquier valor:
let result = 5 > 4; // asignar el resultado de la comparación
console.log( result ); // true


/**Comparación de cadenas */

/**
 *   Para ver si una cadena es “mayor” que otra, JavaScript utiliza el llamado orden “de diccionario” o “lexicográfico”.

En otras palabras, las cadenas se comparan letra por letra.

Por ejemplo:
 * 
 */

console.log( 'a' < 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

//El algoritmo para comparar dos cadenas es simple:

//1. compara el primer caracter de ambas cadenas 
//2. si el primer caracter de la primera cadena es mayor o menor que el de la segunda cadena,entonces la primera cadena es mayor o menor que la segunda.
//3.de lo contratrio de el primer caracter de ambas cadenas son iguales compara el segundpo caracter 
//4. esto se repite hasta el final de la cadena.
//5. si ambas cadenas tienen  las misma longitud entonces son iguales, de lo contratrio, la cadena mas larga es la mayor.



/**
 
 * No es un diccionario real, sino un orden Unicode
El algoritmo de comparación dado arriba es aproximadamente equivalente al utilizado en los diccionarios o guías telefónicas, pero no es exactamente el mismo.

Por ejemplo, las mayúsculas importan. Una letra mayúscula "A" no es igual a la minúscula "a". ¿Cuál es mayor? La "a" minúscula. ¿Por qué? Porque el carácter en minúsculas tiene un mayor índice en la tabla de codificación interna que utiliza JavaScript (Unicode). Volveremos a los detalles específicos y las consecuencias de esto en el capítulo Strings.
 */


/**Comparación de diferentes tipos */

//Al comparar valores de diferentes tipos, JavaScript convierte los valores a números.

//Por ejemplo:




console.log("2">1);// true la candela '2' se convierte a numero 2 por el operados de comparacion.
console.log('01'== 1);// true la cadena '01' se convierne al numero 1



//Para valores booleanos, true se convierte en 1 y false en 0.

console.log(true == 1); //true se converte en 1
console.log(false ==0);// true false se convierte a 0

/***
 * 
 * Una consecuencia graciosa
Es posible que al mismo tiempo:

Dos valores sean iguales.
Uno de ellos sea true como booleano y el otro sea false como booleano.
Por ejemplo:


 * 
 */

let a = 0;
// alert( Boolean(a) ); // false

let b = "0";
// alert( Boolean(b) ); // true

//alert( a == b ); // true!

/***
 * Desde el punto de vista de JavaScript, este resultado es bastante normal. Una comparación de igualdad convierte valores utilizando la conversión numérica (de ahí que "0" se convierta en 0), mientras que la conversión explícita Boolean utiliza otro conjunto de reglas.
 */


//Igualdad estricta ===

//Una comparación regular de igualdad == tiene un problema. No puede diferenciar 0 de `falso’:

console.log(0 == false);

//Lo mismo sucede con una cadena vacía:

console.log("" == false);

// esto 