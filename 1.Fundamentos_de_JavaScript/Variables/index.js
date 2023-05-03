// Todo el tiempo una aplicacion JavaScript trabaja con informacion. Para almacenar esta informacion estan las variables.

//Variable: “almacén con un nombre” 

// las variables actualmente es recomendable definirlar y asignarle datos mediente la palabra clave let, ejemplo:

let message; //en esta lienba estamos declarando o definiendo una variable.

message='Marcos, eres el mejor y vas a ser un experto en programacion' // aqui estamos asignando valos a la variable declarada antariormente.

// alert(message);

//También podemos declarar variables múltiples en una sola línea:

let user= 'Marcus', age=32, message1='Hello grande';


//La versión de líneas múltiples es un poco más larga, pero se lee más fácil:


let user1 = 'John';
let age1 = 25;
let message2 = 'Hola';


//También podemos declarar dos variables y copiar datos de una a la otra.

let hello= 'hello Marcus!!';

let message3;

message3 = hello;

//alert(hello);
//alert(message3)

/**Declarar dos veces lanza un error
Una variable debe ser declarada solamente una vez.

Una declaración repetida de la misma variable es un error: */


/**Nombramiento de variables */

/**
 * Existen dos limitaciones de nombre de variables en JavaScript:

    1.El nombre únicamente puede incluir letras, dígitos, o los símbolos $ y _.
    2.El primer carácter no puede ser un dígito.
 */


/**La Capitalización es Importante
Dos variables con nombres manzana y MANZANA son variables distintas. */


/**Constantes */

//Para declarar una variable constante (inmutable) use const en vez de let:

const myBirthday = '18.04.1982';

// Las variables declaradas utilizando const se llaman “constantes”. No pueden ser alteradas. Al intentarlo causaría un error:



//myBirthday = '01.01.2001'; // ¡error, no se puede reasignar la constante!


/***Constantes mayúsculas
Existe una práctica utilizada ampliamente de utilizar constantes como aliases de valores difíciles-de-recordar y que se conocen previo a la ejecución.

Tales constantes se nombran utilizando letras mayúsculas y guiones bajos.

Por ejemplo, creemos constantes para los colores en el formato “web” (hexadecimal):

*/


const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...cuando debemos elegir un color
let color = COLOR_ORANGE;
// alert(color); // #FF7F00


/**TAREAS */

/**Trabajando con variables.
importancia: 2
Declara dos variables: admin y name.
Asigna el valor "John" a name.
Copia el valor de name a admin.
Muestra el valor de admin usando alert (debe salir “John”). */

let admin, name;

name='John';
admin= name;
alert(admin);



/**
 * Dando el nombre correcto
importancia: 3
Crea una variable con el nombre de nuestro planeta. ¿Cómo nombrarías a dicha variable?
Crea una variable para almacenar el nombre del usuario actual de un sitio web. ¿Cómo nombrarías a dicha variable?
 */

let ourPlanetName;
let currentUserName;



/**Generalmente usamos mayúsculas para constantes que están “hard-codeadas”. En otras palabras, cuando el valor se conoce antes de la ejecución y se escribe directamente en el código.
 * 
 * 
 * En cambio, age es evaluada en ejecución. Hoy tenemos una edad, un año después tendremos otra. Es constante en el sentido que no cambia durante la ejecución del código, pero es un poco “menos constante” que birthday ya que se calcula, por lo que debemos mantenerla en minúscula.
 */