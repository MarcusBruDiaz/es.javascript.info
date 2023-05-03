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



/* Expresión de Función vs Declaración de Función */


//Vemos las principales diferencias que hay entre las funciones por declaracion y expresion

//1. La sintacxis como diferenciaslas en el codigo

    //* delaracion de funcion: una funcion, declarada coomo uns instruccion separada, en el flujo de codigo principal
    // Declaración de Función
        /* function sum(a, b) {
            return a + b;
        } */

    //* expresion de funcion: UNa funcion, creada dentro de una expresion o dentro de otra construccion sintactica.
    // aqui, la funciones creada en el lado derecho de la "expresion de asignacion" =:

        /*     // Expresión de Función
        let sum = function(a, b) {
            return a + b;
        }; */

// la direfencias mas significativa es cuando la funcion es creada por el motor de javaScript

//UNa exprsion de funcion es creada cuando la ejecucion la alcanza y es utilizable de ahi en adelante.

//UNa vex el flujo d ejecucion alcance el lado derecho de la asignacion "let sum=function.."-qui la fucnion es creada y puede ser usada(asignada, llamada ,etc ) de ahi en adelante.

//una declaracion de funcion es diferente debido que puede ser llamada antes de su declaracion.

//por ejemplo, una declaracion de funion global es visible desde todo el script, sin importar donde este.

//esto se debe a alboritmos internos, que busca la declaracion de funciones globales y crea las funciones, podemos llamr a esto etapa de inicilizacion.

// y depues de que se creen todlas las declaraciones de funciones, el resto del codigo se ejecuta. Entonces todo el script tendra accedo a todas esas funciones.

//por ejemplo:


sayHi4("Manuel");

function sayHi4(name){
    console.log(name);
}

// si fuera por expresion lo anterior no funcionaria.

// otra caracteristica de las funciones por declaraciones es su alcance de bloques.

//en modo estricto, cunado unna declaracion de funcion es definida dentro de un bloque de codifo, esta solo es visible dentro de ese bloque, mas no por fuera de el.

//Por ejemplo, imaginemos que necesitamos declarar una función welcome() dependiendo de la variable age que obtengamos durante el tiempo de ejecución. Y luego planeamos usarlo algún tiempo después.

//si utilizamos la Declaracion de funciones, no funcionara como se espera, veamos:

let age= +prompt("Que edad tienes ?",18);


if(age<18){

    function welcome(){
        console.log("Hola!");
    }

}else{
    function welcome(){
        console.log("Saludos!")
    }
}

welcome();
// aqui si intentamos llamar a la funcion por fuera del bloque del if no se ejecutara.

// vemos un ejemplo donde si funcione el llamada de la funcion¿.

let age1= +prompt("Que edad tienes ?",18);


if(age1<18){
    welcome();// esta fuciona bien debido que se llama dentro del bloque de codigo donde se crea la declaracion de funcion.

    function welcome(){
        console.log("Hola!");
    }
    
    welcome() // esta fuciona bien debido que se llama dentro del bloque de codigo donde se crea la declaracion de funcion.
}else{
    function welcome(){
        console.log("Saludos!")
    }
}

welcome();// esta no funciona por que la esta llamando fuera del bloque de codigo.


//¿Qué podemos hacer para que welcome sea visible fuera de ‘if’?



// EL enfoque, seria utilziar la expresion de funcion y asignar welcome a la variable que se declara por fuera del bloque del if y que tiene visibilidad global:

let age2= +prompt("Que edad tienes ?",18);

let welcome1;


if(age2<18){
    //welcome(); // no funcionara debido que todavia la ejecucion no ha alcanzado la funcion

    welcome1 = function(){
        console.log("Hola!");
    }
     
}else{
    welcome1=function(){
        console.log("Saludos!")
    }
}

welcome1();


// podemos simplificarla utilziando el operados ?:


let age3= +prompt("Que edad tienes ?",18);


let welcome2 = (age3<18) 
    ? function(){console.log("Hola!")}
    : function(){console.log("Saludos!")};

welcome2();


/* ¿Cuándo debo elegir la Declaración de Función frente a la Expresión de Función? 

Como regla general, cuando necesitamos declarar una función, la primera que debemos considerar es la sintaxis de la Declaración de Función. Da más libertad en cómo organizar nuestro código, porque podemos llamar a tales funciones antes de que sean declaradas.

…Pero si una Declaración de Función no nos conviene por alguna razón, o necesitamos declaración condicional (hemos visto un ejemplo), entonces se debe usar la Expresión de función.


*/