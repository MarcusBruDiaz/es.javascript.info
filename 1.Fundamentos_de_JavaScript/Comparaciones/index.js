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

console.log("" == false); // true



// esto  sucede debido que el string vacio con el operados nde comparacion == se convierte a 0 y false es 0 entonces esto es true.


// pero entonces como hacemos si queremos diferecncias 0 de false ?

/**La solucion seria la igualdad estricta  que comprueba la igualdad son conversion de tipo  */

// Ej:

console.log(0===false);// el resultado es false por que aqui se compara los tipos y no hace una conversiuon de los mismos.


// existe tamnien un operador de diferencia estroicta : !== analofo de != , EJ:
console.log( 0!== false); // aqui se pregunta si 0 es estrictamente disticto que false, la respuesta seria TRUE obvio!!



/**Comparación con nulos e indefinidos */

// Hay uno comprtamienrto no intuitivo cunado se compara null o undefined con otros valores. por ejempo

// con control de igualdad estricto:

console.log(null === undefined); // el resultado es false por quye casa uno es de tipo diferente.


//Para comparcion con igualdad no estricta:

console.log(null == undefined);// el resultado es true, estos don son iguales en el sentiodo de igualdad no estricta pero no a ninfun otro valo;

// Para matematicas y otras comparaciones:

// null/undefined se convierten en numero: null se cionvierte a 0 mientras que undefined se convierte a NaN;


/**Ahora veamos algunos hechos graciosos que suceden cuando aplicamos estas reglas. Y, lo que es más importante, cómo no caer en una trampa con ellas. */

//null vs 0:


console.log(`comparacion entre null > 0:  ${ null>0}`);  // aqui la cimperobracionb > convierte a null en 0 entomnces 0>0 esto es false
console.log(`comparacion entre null == 0:  ${ null==0}`);  //   
console.log(`comparacion entre null >= 0:  ${ null>=0}`);  // aqio pasa igual la comprobracion >= converte a null en 0 entomnvces 0>= 0 estop es true;


// en la ultima expresion diice en True entomves quiere decir que null es mayor o igual a 0 , pero entonces por que con la comparacion == y > da false?

// la raozn es que la comprobrcion de igualdad == y las comprobraciones > < >= <= funcionand e manera diferencte. las comprobraciones conviernen a null a numero tarando como 0;
// Por otro lado utilizando la comprobarcion de igualdad == para null se define de tak manera que no hace ninguna conversion, por que solo son iguales con esa igualdad no estricta undefiden y null y no iugual con ningun otro dato,


//Un indefinido incomparable

//El valor undefined no debe compararse con otros valores:

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

/***
 * 
 * ¿Por qué le desagrada tanto el cero? ¡Siempre falso!

Obtenemos estos resultados porque:

Las comparaciones (1) y (2) retornan falso porque no definido se convierte en NaN y NaN es un valor numérico especial que retorna falso para todas las comparaciones.
La comparación de igualdad (3) retorna falso porque undefined sólo equivale a null y a ningún otro valor.

 */

/**TAREAS */


/* Comparaciones
importancia: 5
¿Cuál será el resultado de las siguientes expresiones? */

console.log("¡RESULTADOS TAREAS TEMA COMPERACIONES!"); // True
console.log(5>4); // True

console.log("apple" > "pineapple"); // Comparación lexicográfica, por lo tanto false. "a" es menor que "p". 
console.log("2">"12"); // False, por que el operadr de comparacion conerve los string a numeros enronces 2>12 es falso  // me quivoque en mi apresiacion: revisemos : Una vez más, la comparación lexicográfica, el primer carácter de "2" es mayor que el primer carácter de "1". no se convierte annumero toda vez que los dos son string
console.log(undefined == null); //true solo para el operador de igualdad no estrictuad undefined y null son iguales, perop no son ioguales con ningun otro valor
console.log(null == "\n0\n");// false siepre en false cuando se compara con == con otro valor distinto a undefined.
console.log(null === +"\n0\n" ); // true¿, por que mirandio en detalle null es 0 mientras que el en string se convierte a "0" por que tiene estacion con /n se quitan u queda "0" pero con el + se converte en numero 0 entomnces al comparr  0===0 esto es true  ; me quivoque igualdad estricta son de diferentes tipos.
