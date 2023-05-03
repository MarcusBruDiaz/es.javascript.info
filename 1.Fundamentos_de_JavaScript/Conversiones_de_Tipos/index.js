/* La mayoría de las veces, los operadores y funciones convierten automáticamente los valores que se les pasan al tipo correcto. Esto es llamado “conversión de tipo”.

Por ejemplo, alert convierte automáticamente cualquier valor a string para mostrarlo. Las operaciones matemáticas convierten los valores a números.

También hay casos donde necesitamos convertir de manera explícita un valor al tipo esperado.

 */

//1. ToString

/**
 * La conversión a string ocurre cuando necesitamos la representación en forma de texto de un valor.

Por ejemplo, alert(value) lo hace para mostrar el valor como texto.

También podemos llamar a la función String(value) para convertir un valor a string:
 * 
 */

let value = true;
// alert(typeof value); // boolean

value = String(value); // ahora value es el string "true"
// alert(typeof value); // string


//2.ToNumber

//las conversiones numericas ocurre automatricamenyte en funciones matematicas y expresiones.

//Por ejemplo, cunaod se dividen dos valores no numericos utilziando "/";

// alert("6"/"2"); // aqui se realizua la operacion perfectamente, debido que el operador / converte a numeros los strings.

//Podemos usar la función Number(value) para convertir de forma explícita un valor a un número:

//La conversión explícita es requerida usualmente cuando leemos un valor desde una fuente basada en texto, como lo son los campos de texto en los formularios, pero que esperamos que contengan un valor numérico.

//Si el string no es un número válido, el resultado de la conversión será NaN. Por ejemplo:

/**Adición ‘+’ concatena strings
Casi todas las operaciones matemáticas convierten valores a números. Una excepción notable es la suma +. Si uno de los valores sumados es un string, el otro valor es convertido a string.

Luego, los concatena (une): */

// alert( 1 + '2' ); // '12' (string a la derecha)
// alert( '1' + 2 ); // '12' (string a la izquierda)

//3.ToBoolean

/**
 *  Los valores que son intuitivamente “vacíos”, como 0, "", null, undefined, y NaN, se convierten en false.
    Otros valores se convierten en true.
 * 
 */
/* 
Ten en cuenta: el string con un cero "0" es true
Algunos lenguajes (como PHP) tratan "0" como false. Pero en JavaScript, un string no vacío es siempre true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // sólo espacios, también true (cualquier string no vacío es true)
    
     */


/**TAREAS */

/**
 * 
 * Las formas sufijo y prefijo
importancia: 5
¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?

 * let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
 * 
 */
let a= 1, b=1;

let c = ++a;

//alert(a);
//alert(c);


/**
 * 
 * Conversiones de tipos
importancia: 5
¿Cuáles son los resultados de estas expresiones?
 */

//"" + 1 + 0  = 1
console.log("" + 1 + 0);  //(1)
console.log("" - 1 + 0); //(2)
console.log(true+false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);// (3)
console.log("  -9  " - 5); // (4)
console.log(null+1); // (5)
console.log(undefined+1);// (6)
console.log(" \t \n" - 2);// (7)


/**
 * La suma con una cadena "" + 1 convierte 1 a un string: "" + 1 = "1", y luego tenemos "1" + 0, la misma regla se aplica.  (1)
La resta - (como la mayoría de las operaciones matemáticas) sólo funciona con números, convierte una cadena vacía "" a 0.(2)
La suma con una cadena concatena el número 5 a la cadena. // (3)
La resta siempre convierte a números, por lo tanto hace de " -9 " un número -9 (ignorando los espacios que lo rodean).  // (4)
null se convierte en 0 después de la conversión numérica.  // (5)
undefined se convierte en NaN después de la conversión numérica. // (6)
Los caracteres de espacio se recortan al inicio y al final de la cadena cuando una cadena se convierte en un número. Aquí toda la cadena consiste en caracteres de espacio, tales como \t, \n y un espacio “común” entre ellos. Por lo tanto, pasa lo mismo que a una cadena vacía, se convierte en 0. / (7)
 * 
 * 
 */




/**
 * Corregir la adición
importancia: 5
Aquí hay un código que le pide al usuario dos números y muestra su suma.

Funciona incorrectamente. El resultado en el ejemplo a continuación es 12 (para valores de captura predeterminados).

¿Por qué? Arreglalo. El resultado debería ser 3.
 * 
 */


let a1 = Number(prompt("¿Primer número?", 1));
let b1 = +prompt("¿Segundo número?", 2);

alert(a1 + b1); 