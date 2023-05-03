/**Como usaremos el navegador como nuestro entorno de demostración, veamos un par de funciones para interactuar con el usuario: alert, prompt, y confirm.

 */

/**
 * alert
Ya la hemos visto. Muestra un mensaje y espera a que el usuario presione “Aceptar”.


La mini ventana con el mensaje se llama * ventana modal *. La palabra “modal” significa que el visitante no puede interactuar con el resto de la página, presionar otros botones, etc., hasta que se haya ocupado de la ventana. En este caso, hasta que presionen “OK”.
 * 
 */


//prompt


//La función prompt acepta dos argumentos:

//result = prompt(title, [default]);

/**Muestra una ventana modal con un mensaje de texto, un campo de entrada para el visitante y los botones OK/CANCELAR.

title
El texto a mostrar al usuario.
default
Un segundo parámetro opcional, es el valor inicial del campo de entrada.
 */

//let result = prompt("Escriba su nombre", 'Marcus');  // aqui se le pasa un valor por defecto que muestra en la caja de texto de la ventada modal.
//console.log(result);

//Corchetes en la sintaxis [...]
//Los corchetes alrededor de default en la sintaxis de arriba denotan que el parámetro es opcional, no requerido.

//confirm


//La sintaxis:

//let result = confirm("Eres mayor de edad");


//La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR.

//El resultado es true si se pulsa OK y false en caso contrario.

/**TAREAS */

/* Una página simple
importancia: 4
Crea una página web que pida un nombre y lo muestre. */

let userName = prompt("Por favor digite su nombre");
alert(`Bienvenido, ${userName}`)