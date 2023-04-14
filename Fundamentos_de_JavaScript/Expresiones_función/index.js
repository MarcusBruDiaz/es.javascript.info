/* Expresiones de función */

// En javaScript, las funciones no es una "estructira magica del lenguaje" es mas bien un valor especial.

//El el capitulo de funciones "carpeta buscala!  <--"  trabajamos con la sintaxis de "declaracion de funciones", que se ve de la siguiente manera:

function sayHi(){
    console.log('Hello Marcus Bru');
}

sayHi();

// Pero existen otra sintaxis para crear una funcion, la cual es por expresion.

//esto nos permite crear una funcion en el medio de cualquier expresion. Por ejemplo:


let sayHi1 = function(){
    
    alert('Hello from expresion function');
};

sayHi1();

// aqui lo que podemos ver es que hay una variable sayHi1 que recibe un valor - una funcion-.

//Como  la creacion de una funcion ocurre dentro del contexto de una expesion de asignacion,(el lado derecho de = ), esto es una expresion de funcion.

// Es partocular que despues de la palabra function no hay un nombre, esto es permitido en las funciones por expresion.

// Aqui la asigamos diectamenyte a la variable, seria lo mismo que: crear una funcion y ponerla en una variable sayHi2 ejemplo:

function sayHi2(){
    console.log('Hello combining declaration function and expresion function');
}


let sayHi3= sayHi2(); 

console.log(sayHi3);

//nota personal: esta opcion es buena cuando queremos pasar una funcion como parametro de otra funcion, asi se vuelve mas legible.


/* La función es un valor */



//Es de recordar , no importa como es creada una funcion, una funcion es un valor, en los ejemplos antariores todas las funciones se almacenen en (sayHi,sayHi1,sayHi2).

// es decir si se crea una funcion por declaracion la funcion  se va a almacenar en el nombre de la funcion
// si se crea como expresion function la funcion al lado derecho despues de = se almacenara en la variable.

//vemos que contiene ese nombre en una declarion de funcion:

function showName(){

    console.log('Marcus Manuel Bru Diaz TE AMO!! LO VAS A LOGRAR');
}

console.log( showName );

// en esta ultima liena va a mostrar el contenido de la funcion, mas no la va a ejecutar debido que se llamo sin los parentecis.

// entonces con lo anterior confirmamos que una funcion es un valor especial por que tambien se puede ejecutar conb ().

// siendo un valor pues podemos tratarlo como cualquier tipo de valor.

// por ejemplo, podemos copiar una funcion a otra variable, veamos:

function sayLove(){ // aqui el valo y la funcion misma se guarda en la variable sayLove, que es igual al nomnre de la funcion 
    console.log('TE AMO!!');
}


let func = sayLove;  // aqui copiamos el valor mas no la ejecucion de la funcion.

func();  // aqui como func tiene el valor de la funcion, podemos ejecutarlo de forma especial con ()
sayLove(); // y la funcion orificar sigue teniendo el valor original, por que que al momento de llamarla con () se ejecutara tal cual es.


// para replicar los mismo se puede hacer tamnbien con una expresion function, veamos:



let sayLove1 = function(){  // aqui el valo de la funcion y ella en si se guarda en la variable sayLove1
    console.log('I love you from expresion');
};



let func1= sayLove1;  // aqui copiamos a sayLove1 a otra variable func1.


func1(); //aqui llamamos y ejecutamos a func1




/* ¿Por qué hay un punto y coma al final de la expresion function? */

//La explicacion es por que cunado estamos creando una funcion medienye expresion funtion, esta es como si estuvieramos creando una variable con cualquier otro valor por ejemplo let num=5;  en estas sentencias o declarion de variables siembre el final deben ponerse los ; , entonves no es la excepcion hacerlo cuando se le asigana a una varioable una funcion.



/* Funciones Callback */


// Para ambientarnos y romper el hielo, vamos  crear una funcion ask(question, yes, no) como se ve la fucnion ask tiene res argumentos.

//1. question: texto de la pregunta
//2. yes: funcion que se ejecuta si la respuesta es SI
//3. no: funcion que se ejecuta si la respuesta es NO


//la funcion debera preguntar question y, dependiendo de la repuesta llamr a yes() or no()

function ask(question,yes,no){
    if(confirm(question)) return yes()
    
    return no()
    
}

function showOk(){
    alert( "Estas de acuerdo!! :)" );
}

function showCancel(){
    alert( "Cancelaste la ejecucion :(" );
}

ask("Estas de acuerdo?", showOk,showCancel);


// aqui los argumento de la funcion ask se les llama callbacks

// La idea es que pasamos es que pasemos una funcion y se devuelva la llamada de la misma, mas tarde si es necesario o cuando quieran llamarla: en cuentro caso pasamos la funcion showOk como argumento y solo es llamada cuuando en ask la respuesta es posiiva con yes(), y en caso de showCancel se pasa la funcion como argumento y solo es llamda cunado se cancela la ejecuin y se ejecuta no() en ask ().


// Bonus: podemos usar una expresion function para redactar de forma mas corta lo echo anteiormente  y seria equivalente:

function ask1(question,yes,no){
    if(confirm(question)) yes()
    else no();
}


ask1("Estas de acuerdo?",
    function(){alert("Estas de acuerdo!! :)")},
    function(){alert( "Cancelaste la ejecucion :(" )}
);

// aqui esto funciona por que se pasa como argumento funciones anonimas directamete com argumento, las cuales se copian es los parametros de ask yes and no.

// las funciones anonimas no se pueden acceder fuera del contexto donde son declaradas. esto es precisamente lo qye buscamos, que no pueden ser modificadas desde afuera.


/* 
aclaracion: 

una funcion es un valor representando una "accion"

una funion puede ser persibida como una accion

la podemos psar entre variables y ejecutarla cuando nosotros queramos.

 */
