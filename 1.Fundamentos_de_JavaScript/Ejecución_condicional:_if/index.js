/**A veces necesitamos que, bajo condiciones diferentes, se ejecuten acciones diferentes.

Para esto podemos usar la sentencia if y el “operador condicional” ?. */

//La sentencia “if”:

//la senciencia if, evalua la condicion que esta dentro de los parentesis y si esta condicion es true, ejecutara el bloquue de codigo:  EJ:

let year = +prompt('En que año fue publicada la espicificacion ECMAScript-2015','');


while(year){  
    console.log(year)
    if(year===2015){
        alert('Felicitaciones!! la respuesta es correcta');
        break ;
    }else{
        alert('incorrecto vuelve a intentarlo');
        year = +prompt('En que año fue publicada la espicificacion ECMAScript-2015','');
    }
}


//Conversión Booleana:

//La sentencia if (…) evalúa la expresión dentro de sus paréntesis y convierte el resultado en booleano.

//recordems las reglas de conversion:

//1. El numero 0 es un string "vacio", null, undefined y NaN, se conviernen en false. Por esto son llamados valores "Falsos".
//2. El resto de los numeros se convierten a tru, asi las cosas son llamados valores verdaderos.

//Ej:

if (0){
    console.log("Esto nunca se ejecutaria!!");
}

// ejemplo

if (1){
    console.log("esto se ejecutaria!!");
}

//También podemos pasar un valor booleano pre-evaluado al if, así:

let cond = (year ==2015);

if(cond) console.log("Otras felicitaciones desde consola.")



//Operador ternario ‘?’:


//La Sintaxis es:
//let result = condition ? value1 : value2;

//Se evalúa condition: si es verdadera entonces devuelve value1 , de lo contrario value2.


//El operador está representado por el signo de cierre de interrogación ?. A veces es llamado “ternario” porque el operador tiene tres operandos, es el único operador de JavaScript que tiene esa cantidad.

let accessAllowed;
let accessAllowed1;
let age = +prompt('Que edad tienes','');

accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);

// esta ultima linea se puede simplificar quitando los parentesis, esto se puede hacer toda vez que el operados ? tiene baja precedencia, por lo que sin importar los parentesis se eqcutara primero la condicion por ejemplo:

accessAllowed1 = age > 18 ? true : false;
console.log(accessAllowed1);

// para sinplificarf mas podemos omitir los signos ? : toda vez que de por si la condicion age>18 devuelve true o false;

accessAllowed2 = age > 18 
console.log(accessAllowed2);

//Múltiples ‘?’:

//la sintaxis es:

let age1= +prompt("Dime tu edad nuevamente",'');

let message = (age1<3) ? 'tal si es verdadeo'
    : (age1<18) ? 'tal si es verdadero' 
    : (age1<100)? 'tal si es verdadero'
    : 'Dime realmente tu edad';


alert(message);


// una nota propia es que cuando encuentra una condicion que se cumpla ahi finaliza la sentencia, aun asi que hayan otras adelanten que tambein la cumplan, y cunado finaliza en este caso el resultado se guarsa en message. Mira que no fue necesario escribir la sentencia if, solo con los parentecis y la condicion basta  esto es prosible con el operador ternario.


//Uso no tradicional de ‘?’:


// el uso del iterrogante se utiliza muhcas veces para remplazar el if, por ejemlo

let company = prompt('¿Qué compañía creó JavaScript?', '');

(company == 'Netscape') ?
   alert('¡Correcto!') : alert('Equivocado.');
// esto aqui funcionaria por el operador ternario y  mira que no fue necesario la sentencia if.  Pero No recomendamos el uso del operador de signo de interrogación de esta forma.




/**TAREAS!! */

/* if (un string con cero)
importancia: 5
Se mostrará el alert?
 */
if ("0") {
    alert( 'Hello' );
}//MI REPUESTA ES QUE SI LO MOSTRARA, cualquier string menos los vacias en las entencia if seran convertidos a true.



/* El nombre de JavaScript
importancia: 2
Usando el constructor if..else, escribe el código que pregunta: ‘¿Cuál es el nombre “oficial” de JavaScript?’

Si el visitante escribe “ECMAScript”, entonces muestra: “¡Correcto!”, de lo contrario muestra: “¿No lo sabes? ¡ECMAScript!” */

let pregunta = prompt('What is the oficla name of javaScript','');

if (pregunta==='ECMAScript'){
    alert('Correcto');
}else{
    alert('No lo sabes? ps "ECMAScript!"')
}

/* 
Muestra el signo
importancia: 2
Usando el constructor if..else, escribe un código que obtenga a través de un prompt un número y entonces muestre en un alert:

1, si el valor es mayor que cero,
-1, si es menor que cero,
0, si es igual a cero.
En la tarea asumimos que siempre el usuario introduce un número. */

let num=+prompt('Digita un numero',0);

if(num>0){
    alert(1);
} else if(num<0){
    alert(-1);
}else{
    alert(0);
}



/* Reescribe el 'if' como '?'
importancia: 5
Reescriba esta condición if usando el operador ternario '?': 

let result;

if (a + b < 4) {
  result = 'Debajo';
} else {
  result = 'Encima';
}
*/

let result;

(a+b<4 ) ? result='Debajo': result= 'Encima' // mi soliciion

//corregida 
let result1 = (a+b<4) ? 'Debajo' : 'Encima';

/* 
Reescriba el 'if..else' con '?'
importancia: 5
Reescriba el if..else utilizando operadores ternarios múltiples'?'.

Para legibilidad, es recomendad dividirlo en múltiples lineas de código.


let message;

if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}
 */


let message1 = (login=='Empleado') ? 'Hola' 
  : (login == 'Director') ? 'Felicidades' 
  : (login == '') ? 'Sin sesión' 
  : '';


