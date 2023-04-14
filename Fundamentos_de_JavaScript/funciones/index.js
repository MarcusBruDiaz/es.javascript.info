/* Funciones */

// Las funciones son los principales "Bloques que construccion", que permiten que el codifo se llame muchas veces sin necesitar de repetirlo.

//Ya hemos visto funciones integradas, como: alert(message), confirm(question), prompt(message,default);



//Declaración de funciones:

function showMessage(){
    console.log( '¡Hola  todos!' )
};


//las funciones por declaracion va primero la palabra function seguido del nombre de la funcion y los parentecis,donde van los parametros separados por coma, en nuestro caso esta vacia.y dentro de las llaves el codigo, tambien llamado cuerpo de la funcion.


showMessage();


//Variables locales:

//las variables declaradas dentro del cuerpo de la funcion solo es visible dentro de la misma. por ejemplo:


function showMessage1(){
    let message = '¡Hola  todos desde variable!';

    console.log(message);
}

showMessage1();

//console.log(`Ayy di un error por acceder a una variable de una funcion por fuera de ella ${message}`);



//Variables externas:



//las funciones tambien pueden acceder a variables externas, por ejemplo:

let userName = 'Marcus';


function showMessage2(){
    let message = `Hola ${userName}`;

    console.log(message);
}


showMessage2();

//COn las variables externas las funciones tienen  acceso completo a la misma, hasta el punto de poder modificarla. EJ

function showMessage3(){
    userName= 'Manuel'
    console.log(`Hola ${userName}`);
}

showMessage3();


// es de anotar que la funcion solo utiloiza la variable externa  si no hay una variable locar declarada.

//Si una variable con el mismo nombre se declara dentro de una funcion , le hace sombre a la externa, por ejemplo en el siguiente codigo, la funcion utuliza la variable userName local e ignora a la exterior

function showMessage4(){
    let userName ='MarcusBruDiaz';

    console.log(`Hello! ${userName}`);
}

showMessage4();

// toda variable fuera de una funcion o clase, se le denominan globales.

// las varaibles globales son visibles desde cualquier funcion(a menos de que dentro de la funcion haya una variable local.)

//Una buena practica es reducir el uso de variables globales. El codigo moderno tiene poca o nulas variables globales, la mayoria de variables se declaran dentro de las funciones. A veces son utiles para declara variables a nivel de proyecto.



/**Parámetros */

//podemos pasar datos arbitrariosa funsiones utilizando parametros.

//Ejemplo:

function showMessage5(from,text){
    console.log(`${from} ${text}`);
}

showMessage5('Marcus','Bru'); // aqui cuando la funcion se llama, se le pasan varibles que son copiados en la variables locales de la funcion (from,text);
showMessage5('Manuel','Diaz');

// aqui vamos a ver un ejemplo mas: tenemos una variables from y la pasamos a la funcion. Es de tener en cuenta ue la fucion cambia a from, pero el cambia no modifica la variable externa dado que la funcion siempre optiene una copia del valor:

function showMessage6(from,text){
    from = `* ${from} *`;
    console.log(`${from} : ${text}`);
}

let from= "Marcus";

showMessage6(from,"Hola");

console.log(from)


// para acalrar los terminos de parametros y argumentos, podemos definirlo de esta manera: cunado se declara la funcion y se ponen variables dentro de los parentecis esto se le llama parametros, al momento de llamar a la funcion de pasarle valores, estos se le llaman argumentos.




/* Valores predeterminado */


// wow!! cunado una funcion se llama pero no se le proporcianan argumentos, su valor correspondiente se convierten en undefined.


// por ejemplo la siguiente funcion se declara con 2 parametros pero al momento de llamarla solo se le pasa el armumento de from,entomces text seraia undefined.

function showMessage7(from,text){
    from = `* ${from} *`;
    console.log( `${from} : ${text}` );
}

let from1 = "Manuel";

showMessage7(from1);// la salida aqui seria Manuel : undefinded

// ahora, para evitar que esto suceda, podemos definir un valor predeterminado o por defecto, en los parametros(es el valor que se usa dado el caso que el valor del argumento sea omitido):




//por ejemplo:


function showMessage8(from, text="Sin texto"){
    from = ` * ${from} * `;
    console.log(`${from} : ${text}`);
}


let from2= 'Marcus Manuel Bru Diaz'

showMessage8(from2);  // aqui la salia seria  * Marcus Manuel Bru Diaz *  : Sin texto, dado que text tiene asignado por defecto "Sin texto".

// tambien se utilizaria el valor predeterminado, si el valor del parametro es undefined por ejempo:

showMessage8('Manuel', undefined); //salida:  * Manuel *  : Sin texto

// Aqui en nuestro ejemplo estamos asignado como valor predeterminado a text un simple string, pero tambien podemos pasarle una funcion, que al momento de llamr a la funcion sin ese argumen to la variable text seria el resultado de esa funcion, por ejemplo:


function anotherFunction(){
    let message= 'Valor de text dado por el return de una funcion';
    return message;
}


function showMessage9(from,text=anotherFunction()){
    console.log(`${from} : ${text}`);
}

showMessage9('Text');// salida: Text : Valor de text dado por el return de una funcio

// es de acalarfa que la funcion se pasa como valor predeterminado con los parentecis.


/***El javascript se evalua un  parametro predeterminado, solo si la funcion es llamada son el valor de ese argumento
 *** en el ejemplo antarior la funcion anotherFunction() ni sera llamda en lo absoluto, el valor del parametro es propocionado al momento de llamar a la funcion.
 * 
 * 
 */



/* Devolviendo un valor */

// Una funcion puede devolver un valor al codifo que llama la funcion. Ejemplo simple:

function suma(a,b){
    return a + b ;
}



console.log(suma(1,2));// salida: 3 , pero por que!! debido que cuando llamamos a suma(1,2) con los argumentos 1,2, y como suma esta devolviendo la suma de estos dos,m entonces ese valor se le pasa al console.log y ese valor es en que muestra.


// La directiva return, pero estar en cualquier parte de la funcion. CUando la ejecucion de la funcion lo alcanza, esta se detiene devolviendo un valor al codigo de la llamda por ejemplo:


function suma1(a,b){
    return a +b;
}


let reult= suma1(5,7);// aqui el valor que devuelve la llamada a la funcion (sum(5,7)), se guada en nla variable result.

console.log(reult);

// Tambien puede haber varias directivas return en una misma funcion, por ejemplo:


function checkAge(age){
    if(age>18){
        return true;
    }else{
        return confirm('¿Tienes permiso de tus padre?');
    }
}

let age= prompt('¿Que edad tienes?',18);




if(checkAge(age)){
    alert('Acceso otorgado');
}else{
    alert('Acceso Denegado');
}


// vamos a describir como funciona este codigo: en este ultimo if le pasamos una comprobracion que es la fucion checkAge(age), la cual devuelve true si es mayor de 18 y tendria acceso, dado el caso que no sea mayor de 18 enconces  le dice que si tie e permido de sus padres y despues le ddice que el acceso es denegao.

// tambien es posible ponder un return que no devuelva ningun valor, pero al momento de que la ejecucion de la funcion lo alcance esta saldra.

//ejemplo:




function showMovie(){
    if( !checkAge(age) ){
        return;
    }   
    alert('Mostrando contenido de peliculas');
}

showMovie();

// Nota: una funcion con retur vacion, o sin return devuelve undefined.

//si una funcion no devuelve un valor es lo mismo que devolviera undefined, miremos:

function vacio(){}

console.log(vacio()===undefined); // el resultado es true, debido que la cunfdion vacio() no tiene un return entonvces devuelve un valor undefined.


// declaraando la directina return sin un valo este tambien devolveria vacio, veamos:

function anotherVacio(){
    return;
}

console.log(anotherVacio()=== undefined); // true


// Nota importante:

//nunca agregre una liena debajo del return por ejemplo:

/**
 *   return
     (una + expresion + o + cualquier + cosa * f(a) + f(b))
 * 
 */

// esto devolveria vacio, troda vez que el return define el ; despues de return haciendolo undefined, se veria de esta manera:

/* return;
 (una + expresion + o + cualquier + cosa * f(a) + f(b))
 */



//Nomenclatura de funciones



// las funciones son acciones.

//Dado que son acciones sus nombres suele ser un verbo. 

// ese nombre que es un verbo, debe ser breve y que describa calaramente lo que hace la funcion.

// una practiva generlizada para nombrar las funciones es comenzar sus nombre por prefihjos verbal que describa vagamente la accion 

// por ejemplo las funciones que muestran algo deben comenzar por "show".

//vemos mas ejemploos, funciones que comienzan con :

//"get..": Devuelve un valor
//"calc..": calculan algo
//"create..": crean algo
//"check..": revisal algo y devuelven un boleano etc


//ejemplos de este tipo de nombre:

//*showMessage(); // muestra un mensage
//*getAge(); // devuelve la edad, (la obtiene de alguna manera)
//*calcSum(); // calcula una suma y devuelve un resultado
//*createForm(); // crea un formulario (y usualmente lo devuelve)
//*checkPermission(); // comprueba permisos de un usuario y debuelve un boleano.


//una funcion debe hacer exactamente los mismo que su nombnre indica nada mas.

//Dos acciones independientes por lo general ameritan dos funciones distintas, incluso si se convocan juntas(en ese caso debemos hacer una tercera funcion que llame a esas dos)

//getAge – está mal que muestre una alert con la edad (solo debe obtenerla).
//createForm – está mal que modifique el documento agregándole el form (solo debe crearlo y devolverlo).
//checkPermission – está mal que muestre el mensaje acceso otorgado/denegado(solo debe realizar la verificación y devolver el resultado).



/* Funciones == Comentarios */



//las funciones deben  ser cortas, y hacer una sola cosa, si encontramos que una funcion es muy larga, podemos estar frente un caso donde debamos dividir la funcion en otras mas pequeñas 

// esto hace que el codigo sea facil de testear y depurar -¡ su existencia es un gran comentario! que significa esto, que solo con ver la funcion sea entendible y  no sea necesario comentarios explicativos.

//Por ejemplo, comparemos las dos funciones showPrimes(n) siguientes. Cada una devuelve números primos hasta n.

//La primera variante usa una etiqueta:

function showPrime(n){
    nextPrime : for ( let i=2; i<n;i++ ){

        for( let j=2;j<n;j++ ){
            if( i%j==0 ) continue nextPrime;
        }

        console.log( i )
    }
}

showPrime(10);

//la segunda variante una una funcion adicional isPrime(n) para probar la primalidad:


function showPrime1(n){
    for(let i=2;i<n;i++){
        if(!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(n){

    for( let i=2;i<n;i++){
        if( n%i ==0) return false;
    }

    return true;
}


showPrime1(20);


/**TAREAS!! */


/* 

Reescribe la función utilizando '?' o '||'
importancia: 4
La siguiente función devuelve true si el parámetro age es mayor que 18.

De lo contrario, solicita una confirmación y devuelve su resultado.

*/

/* 

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('¿Tienes permiso de tus padres?');
    }
  }

*/

function checkAge1(age){
    return (age>18) ? true : console.log('¿Tienes  permiso de tus padres?');
}

checkAge1(18);

/* 

Función min(a, b)
importancia: 1
Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.

Por ejemplo:


min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

 */

function min(a,b){
    return (a>b) ? b : a;
}

console.log(min(2,5));
console.log(min(3,-1));
console.log(min(1,1));
console.log(min(10,5));


/* 

Función pow(x,n)
importancia: 4
Escriba la función pow(x,n) que devuelva x como potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el resultado.


pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

 */

let x1 = +prompt('Valor de x',1);
let n1 = +prompt('Potencia',1);


function pow(x,n){
    let result=1; 
    for( let i=1; i<=n ;i++){
        result*=x;
    }
    return result;
}

console.log( pow(x1,n1) );