/**Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.

Hay ocho tipos de datos básicos en JavaScript. En este capítulo los cubriremos en general y en los próximos hablaremos de cada uno de ellos en detalle. */

//1.Number

let n = 123;
n = 12.345;

//Además de los números comunes, existen los llamados “valores numéricos especiales” que también pertenecen a este tipo de datos: Infinity, -Infinity y NaN.


//Por lo tanto, si hay un NaN en alguna parte de una expresión matemática, se propaga a todo el resultado (con una única excepción: NaN ** 0 es 1).

//2.BigInt

//En JavaScript, el tipo “number” no puede representar de forma segura valores enteros mayores que (253-1) (eso es 9007199254740991), o menor que -(253-1) para negativos.

//3.String


/**
 * En JavaScript, hay 3 tipos de comillas.

Comillas dobles: "Hola".
Comillas simples: 'Hola'.
Backticks (comillas invertidas): `Hola`.
 */


//4.Boolean (tipo lógico)

/**
 * El tipo boolean tiene sólo dos valores posibles: true y false.

Este tipo se utiliza comúnmente para almacenar valores de sí/no: true significa “sí, correcto, verdadero”, y false significa “no, incorrecto, falso”.
 */

//5.El valor “null” (nulo)

/**
 * El valor especial null no pertenece a ninguno de los tipos descritos anteriormente.

Forma un tipo propio separado que contiene sólo el valor null:

let age = null;
 */

//6.El valor “undefined” (indefinido)

/**
 * 
 * El valor especial undefined también se distingue. Hace un tipo propio, igual que null.

El significado de undefined es “valor no asignado”.

Si una variable es declarada, pero no asignada, entonces su valor es undefined:
 */

let age;

alert(age); // muestra "undefined"

//7.Object y Symbol

/**
 * Todos los demás tipos se llaman “primitivos” porque sus valores pueden contener una sola cosa (ya sea una cadena, un número o lo que sea). Por el contrario, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas.
 */

//8.El operador typeof