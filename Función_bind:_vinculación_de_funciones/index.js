
/**Función bind: vinculación de funciones */

/**Al pasar métodos de objeto como devoluciones de llamada, por ejemplo a setTimeout, se genera un problema conocido: la "pérdida de this".
 * 
 * Pérdida de “this”:
 * 
 * Ya hemos visto ejemplos de pérdida de this. Una vez que se pasa hacia algún lugar un método separado de su objeto, this se pierde.
 * 
 * 
 */

// un ejemplo de perdida del "this":

let user2 = {
    firstName : "Marcus",
    sayHi2(){
        alert(`Hello mi amado: ${this.firstName}`);
    }
};


//setTimeout(user2.sayHi2,1000); // aqui este resiltado va a ser "Hello mi amado: undefined", por que !!!! esto se da debido que esta intentando acceder al metodo del objeto user2, bien en este punto accede, pero en el metodo sayHi2 se accede a una propiedad de objeto mediente el this, pero al momento de pasar "user2.sayHi2" al setTimaout, este pierdeel contecto por lo emplicado en el comiento del tema "Función bind: vinculación de funciones ".

/**esto anterior que pasa con el setTimeout, se puede ver como un simil de lo que pasa con este codigo:
 * 
 * let f = user2.sayHi2
 * setTimeout(f,1000)
 * 
 * aqui user2 pierde el contexto del this.
 */


/**Nota importente del setTimeout: este metodo en el navegador el this = windows para la llamada a la funcion , entonces!! cunado hacemos la llamda a  la funcion sayHi2() dento del setTimeout, este le da el this =windows y entonces la propuede  firstName no esta en ese contexto por que? por que windos no tiewne definida esa propiedad!!! */


/**La tarea es bastante típica: queremos pasar un método de objeto a otro lugar (aquí, al planificador) donde se llamará. ¿Cómo asegurarse de que se llamará en el contexto correcto?
 * 
 * Para esto en la documentacion de https://es.javascript.info/bind hay unas cuantas soluciones veamoslas:
 */


/**Solución 1: un contenedor (wrapper en inglés) */

//La solución más simple es usar una función contenedora que la envuelva:

setTimeout(function(){
    //user2.sayHi2();
},100)  
// lo anterior funciona por que recibe a user el entermo lexico externo donde si esta user2 y le da el contexto del this

// aqui otra forma mas corta, mediente funcion de flecha:

//setTimeout(()=>{user2.sayHi2()},100);  // funciona!!!!! por eso es bueno siempre pasar una funcion sea anonima o fechla al setTimeout para evitar errores del contexto.

/**
 * Se ve bien, pero aparece una ligera vulnerabilidad en nuestra estructura de código…

¿Qué pasa si antes de que se dispare setTimeout (¡hay un segundo retraso!) user cambia el valor? Entonces, de repente, ¡llamará al objeto equivocado!
 * 
 */


// ...el valor de user cambia en 1 segundo
user2={
    //sayHi2(){alert("otro user en setTimeout!!")}
}

// con esta linea se motifica el objeto user2 y el metodo sayHi2 del mismo, y cuando el los setTimeout de arribe quieren ejecutar el metodo y no encuentranla propiedad firstName: esto generara un error , para esto se plantea otra solucion:



/**Solución 2: bind (vincular) */


/**
 * 
 * todas las funciones incorporan un metodo bind, la cual permite fijar el this
 * 
    La sintaxis básica es:

    let boundFunc = func.bind(context);

    el resultado de func.bind(context); es un objero exotico,de vuelve una funcion similar a una funcion regular, que se puede llamar como fuci0ns (boundFunc ()) este ultima pasa la llamada de forma transparente a func estableciendo this como el contexto.

    idea principal:  En otras palabras, llamar a boundFunc es como llamar a func pero con un this fijo.
 * 
 * vems un ejemplo de codigo donde un ¿a funcion exotica funcUser  pasa a una llamada a func con this= user:
*/




let user3 = {
    firstName1 : "Marcus",
};

function func(){
    alert(this.firstName1);
};



let funcUser = func.bind(user3);
funcUser();



//Todos los argumentos se pasan al func original “tal cual”, por ejemplo:




function func1(phrase){
    alert(`${phrase}: ${this.firstName1}`);
};

let funcUser1 = func1.bind(user3);
funcUser1("Hello");

//Ahora intentemos con un método de objeto:



let user4 = {
    firstName2 : "Manuel Bru",
    sayHi3(phrase){
        alert(` ${phrase}, ${this.firstName2}`);
    }
};


let sayHi5 = user4.sayHi3.bind(user4); // aqui lo que se hace es: el objeto exotico sayHi5() en la llamada sayHi5(); le pasaal metodo user4.sayHi3() mediente el bind el conbtexto user4.  En esta liena  tomamos el método user.sayHi3 y lo vinculamos a user4. sayHi5 es una función “vinculada”. No importa si se llama sola o se pasa en setTimeout, el contexto será el correcto.()lo comprobamos abajo)



sayHi5("Bienvenido");

setTimeout(()=>{sayHi5("Hola mi amor");},1000);


user4={
    sayHi3(){alert("Cambie el metodo sayHi3 y quite la propiedad firstName2 ")}  // normalmente esto cambiaria el sayHi5 llamado en el setTimeout y daria undefined debido que no encuentra la propiedad firstName2 , pero como lo hemos fijado el contexto con bind esto no pasaria debido que sayHi5 tomaria el valor pre-enlazado.
}

/**
 * 
    * Convenience method:bindAll
    Si un objeto tiene muchos métodos y planeamos pasarlo activamente, podríamos vincularlos a todos en un bucle:


    for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
    }

    Las bibliotecas de JavaScript también proporcionan funciones para un enlace masivo, ej. _.bindAll(object, methodNames) en lodash.
*/



/**Funciones parciales */

/**
 * 
 * Podemos vincular no solo this, sino también argumentos. Es algo que no suele hacerse, pero a veces puede ser útil.

    Sintaxis completa de bind:


    let bound = func.bind(context, [arg1], [arg2], ...);


    Por ejemplo, tenemos una función de multiplicación mul(a, b):

    function mul(a, b) {
    return a * b;
    }

 * 
*/



//Usemos bind para crear, en su base, una función double para duplicar:


function mul(a,b){
    return a * b;
}

let double = mul.bind(null,2);  // aqui se crea una nueva funcion llamada double, que pasa las llamadas a mul, fijando como contexto null y 2 como primer argumento, esto hace que ese primer argumento sea fijo, esto se le llama aplicacion parciial: creamos una nueva funcion fijanod algunos parametros existentes.

// tambien es importente aclara por que en el contexto se le pasa null, en este caso por que no requetimos del this, pero el bing requiere que le pasemos algun contexto, y lo que se nos ocurre es pasar null 


console.log(double(3));


// Beneficios de una funcion parcial:

//1. prodemos creair funciones independientes con nombres legibles, en este casi podemos usarla sin necesidad de pasar el primer argumento, esto nos ahorraria trabajo.
//2. En otros casos, la aplicación parcial es útil cuando tenemos una función muy genérica y queremos una variante menos universal para mayor comodidad.

//Por ejemplo, tenemos una función send(from, to, text). Luego, dentro de un objeto user podemos querer usar una variante parcial del mismo: sendTo(to, text) que envía desde el usuario actual.


/**Parcial sin contexto */


//¿Que pasa si queremos fijar argumetos pero sin el contexto this? por ejemplo,para un metodo de un objeto.

// el metodo bind nativo no permite eso. no podemos omitir el contexto y pasar solo los argumentos.

//pero se puede hacer con una funcion parcial para vincular solo los argumentos:

function parcial(func,...argsBound){
    return function(...args){
        return func.call(this,...argsBound,...args);
    }
}


//uso:
let user5={
    firstName3:'Marcus',
    sayHi4(time,phrase){
        alert(`[${time}] ${this.firstName3}: ${phrase}!`);
    }
};

user5.sayNow = parcial(user5.sayHi4, new Date().getHours() + ':' + new Date().getMinutes());


console.log(Object.keys(user5).length)
user5.sayNow("Hello");



/**
 * 
 * El resultado de la llamada parcial(func [, arg1, arg2 ...]) es un contenedor o “wrapper” (*) que llama a func con:

   . El mismo this (para la llamada a user.sayNow es user)
   . Luego le da ...argsBound: argumentos desde la llamada a partial ("10:00")
   . Luego le da ...args: argumentos dados desde la envoltura ("Hello")
 * 
*/


/**
            * Resumen
        El método func.bind(context, ... args) devuelve una “variante vinculada” de la función func; fijando el contexto this y, si se proporcionan, fijando también los primeros argumentos.

        Por lo general, aplicamos bind para fijar this a un método de objeto, de modo que podamos pasarlo en otro lugar. Por ejemplo, en setTimeout.

        Cuando fijamos algunos argumentos de una función existente, la función resultante (menos universal) se llama aplicación parcial o parcial.

        Los parciales son convenientes cuando no queremos repetir el mismo argumento una y otra vez. Al igual que si tenemos una función send(from, to), y from siempre debe ser igual para nuestra tarea, entonces, podemos obtener un parcial y continuar la tarea con él.
*/

