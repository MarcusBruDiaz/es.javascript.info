//Las funciones de flecha no son solo una “taquigrafía” para escribir pequeñas cosas. Tienen algunas características muy específicas y útiles.


//Está en el espíritu de JavaScript crear una función y pasarla a algún otro lugar.


//Y en tales funciones, por lo general, no queremos abandonar el contexto actual. Ahí es donde las funciones de flecha son útiles.


/***Las funciones de flecha no tienen “this” */

//las funciones flechas no tienen this , pero si se accediera al this se tomaria el contexto exterior, por ejemplo:

let group = {
    title: "Our group",
    students : ["Marcus","Manuel","Lina"],
    showList(){
        this.students.forEach((student)=>{
            alert(`${this.title} : ${student}`);
        });
    }
};


group.showList();

// an las lienas anteriores  en forEach se utiliza la funcion felcha, por lo que this.title es exactamente igual que en el metododo externo showList, es decir group.title

/**
 *   Si usáramos una función “regular”, habría un error:
    *  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(function(student) {
        // Error: Cannot read property 'title' of undefined
        alert(this.title + ': ' + student);
        });
    }
    };

    group.showList();

    El error se produce porque forEach ejecuta funciones con this = undefined de forma predeterminada, por lo que se intenta acceder a undefined.title.

    Eso no afecta las funciones de flecha, porque simplemente no tienen this
 * 

*/



/**
 * 
 * 
 * Funciones de flecha VS bind
Hay una sutil diferencia entre una función de flecha => y una función regular llamada con .bind(this):

.bind(this) crea una “versión enlazada” de la función.
La flecha => no crea ningún enlace. La función simplemente no tiene this. La búsqueda de ‘this’ se realiza exactamente de la misma manera que una búsqueda de variable regular: en el entorno léxico externo.
 */


/**Las flechas no tienen “arguments” */



/**
 * Las funciones de flecha tampoco tienen variable arguments.

Eso es genial para los decoradores, cuando necesitamos reenviar una llamada con this y arguments actuales.

Por ejemplo, defer (f, ms) obtiene una función y devuelve un contenedor que retrasa la llamada en ms milisegundos:
 */



function defer(f,ms){
    return  function(){
        setTimeout(()=>{f.apply(this,arguments),ms});
    };
}

function sayHi(who){
    alert(`Hello, ${who}`);
}

let sayHiDeferred = defer(sayHi,2000);
sayHiDeferred('Marcus');

//Lo mismo sin una función de flecha se vería así:

function defer1(f,ms){
    return function(...args){

        setTimeout(function(){
            return f.apply(this,args)
        },ms);
    };
}

let sayHiDeferred1 = defer1(sayHi,2000);
sayHiDeferred1('Manuel');


/**
 * Resumen
Funciones de flecha:

No tienen this
No tienen arguments
No se pueden llamar con new
Tampoco tienen super, que aún no hemos estudiado. Lo veremos en el capítulo Herencia de clase
Esto se debe a que están diseñadas para piezas cortas de código que no tienen su propio “contexto”, sino que funcionan en el actual. Y realmente brillan en ese caso de uso.
 */


