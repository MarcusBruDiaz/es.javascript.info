//Como ya sabemos, una función en JavaScript es un valor.

//En JavaScript, las funciones son objetos.

//Una buena manera de imaginar funciones es como “objetos de acción” invocables. No solo podemos llamarlos, sino también tratarlos como objetos: agregar/eliminar propiedades, pasar por referencia, etc.

/*La propiedad “name”**/

//Por ejemplo, el nombre de una función es accesible mediante la propiedad “name”:

function sayHi(){
    alert(sayHi.name);
}

// tambien podemos crear funciones sin un nombre,  pero al momento de accedr al nombre buscaria el nombre de la variable a la cual se le asigno dicha funcion, ejemplo:

let sayHi1 = function(){
    alert(sayHi1.name);
};


/*La propiedad “length”*/

// “length” incorporada que devuelve el número de parámetros de una función, por ejemplo:


function f1(a){  alert(f1.length)};
function f2(a,b){};

// el param spread no cuenta para lenght asi que no lo tiene en cuenta para contar el numero de parametros en una funcion:
function many (a,b,...more){alert(many.length)}


//La propiedad length a veces se usa para introspección en funciones que operan en otras funciones.

//introspección: En informática, la introspección de tipos es la capacidad de algunos lenguaje de programación orientado a objetos de determinar el tipo de un objeto en tiempo de ejecución. 

function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
}
  
// para una respuesta positiva, se llaman ambos controladores
// para respuesta negativa, solo el segundo
//ask("Question?", () => alert('You said yes'), result => alert(result));



/**Propiedades personalizadas */

//También podemos agregar nuestras propias propiedades.
//Aquí agregamos la propiedad counter para registrar el recuento total de llamadas:

function sayHipersonalizada(){
    alert("HI");
    sayHipersonalizada.counter++
}
sayHipersonalizada.counter =0;

//sayHipersonalizada();
//sayHipersonalizada();

//alert(`Called ${sayHipersonalizada.counter} times`);



/**Las propiedades de la función a veces pueden reemplazar las clausuras o closures. Por ejemplo, podemos reescribir el ejemplo de la función de contador del capítulo Ámbito de Variable y el concepto "closure" para usar una propiedad de función:

 */


function makeCounter(){

    function counter(){
        return counter.count++;
    }

    counter.count = 0;

    return counter;

}


let counter = makeCounter();
//alert(counter());
//alert(counter());

//count ahora se almacena en la función directamente, no en su entorno léxico externo.

//¿Es mejor o peor que usar una clausura (closure)?

//La principal diferencia es que si el valor de count vive en una variable externa, entonces el código externo no puede acceder a él. Solo las funciones anidadas pueden modificarlo. Y si está vinculado a una función, entonces tal cosa es posible:

function makeCounter1(){

    function counter1(){
        return counter1.count++;
    }

    counter1.count = 0;

    return counter1;

}

let counter1= makeCounter1();

//alert(counter1());

counter1.count=10;
//alert(counter1());



/**Expresión de Función con Nombre */

//Named Function Expression, o NFE, es un término para Expresiones de funciones que tienen un nombre.

//Por ejemplo, tomemos una expresión de función ordinaria:

let sayHiwithoutName = function(who) {
    //alert(`Hello, ${who}`);
};

//Y agrégale un nombre:

let sayHiWithName = function func(who){
    alert(`Hello, ${who}`);
};

//sayHiWithName('Marcus');


//Hay dos cosas especiales sobre el nombre func, que le hacen útil:

//1.Permite que la función se haga referencia internamente.
//2.No es visible fuera de la función…



let sayHiCondicional = function f(who){
    if(who){
        alert(`Hello ,${who}`);
    }else{
        f("Manuel");
    }
}




//sayHiCondicional('Marcos');
//sayHiCondicional();



/*¿Por qué usamos func? ¿Quizás solo usa sayHi para la llamada anidada?

En realidad, en la mayoría de los casos podemos:*/


/*let sayHi = function(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      sayHi("Guest"); // Aquí
    }
};*/


//El problema con ese código es que sayHi puede cambiar en el código externo. Si la función se asigna a otra variable, el código comenzará a dar errores:

let sayHi6 = function(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      sayHi6("Guest"); // Error: sayHi no es una función
    }
};
  
let welcome = sayHi6;
sayHi6 = null;
  
//welcome(); // Error, ¡la llamada sayHi anidada ya no funciona!


/**Eso sucede porque la función toma sayHi de su entorno léxico externo. No hay sayHi local, por lo que se utiliza la variable externa. Y en el momento de la llamada, ese sayHi externo es nulo.

El nombre opcional que podemos poner en la Expresión de función está destinado a resolver exactamente este tipo de problemas.

Usémoslo para arreglar nuestro código: */


let sayHi7 = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // Ahora todo va bien
    }
  };
  
let welcome7 = sayHi7;
sayHi7 = null;
  
welcome7(); // Hello, Guest (la llamada anidada funciona)

/*Ahora funciona, porque el nombre "func" es una función local. No se toma desde el exterior (y no es visible allí). La especificación garantiza que siempre hará referencia a la función actual.

El código externo todavía tiene su variable sayHi o welcome. Y func es el “nombre de función interna” con el que la función puede llamarse a sí misma de manera confiable.*/