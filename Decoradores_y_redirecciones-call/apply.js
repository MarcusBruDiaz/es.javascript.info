/**
 * JavaScript ofrece una flexibilidad excepcional cuando se trata de funciones. Se pueden pasar, usar como objetos, y ahora veremos cómo redirigir las llamadas entre ellas y decorarlas.
 * 
 * Digamos que tenemos una función slow(x), que es pesada para la CPU, pero cuyos resultados son “estables”: es decir que con la misma x siempre devuelve el mismo resultado.

** Si la función se llama con frecuencia, es posible que queramos almacenar en caché (recordar) los resultados obtenidos para evitar perder tiempo en calcularlos de nuevo.
 * 
 * 
 */

 function slow(x){

    // puede haber un trabajo pesado de CPU aquí
    alert(`Called with ${x}`);
    return x
 }


 function cachingDecorator(func){
    let cache = new Map();
    // en esta funcion lo que hace es recibir una funcion que retorna resultado(slow), pero ahora en este decorador se va a utilizar un obbeto map para guardar los resultados obtenidos por esa funcion, para que cada vez que sea utilizada no tenga que ejecutarse, si no mas bien busque en la memoria, y si esta el resultado lo devuelva.

    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }

        let result= func(x);

        cache.set(x,result);
        return result;
    };
}

slow= cachingDecorator(slow);

//alert(slow(1));  quitar si quieroi ejecutar la funcion anterior
//alert("Again: " + slow(1));

//alert(slow(2));
//alert("Again: "+ slow(2));

/**
 * Desde un código externo, la función slow envuelta sigue haciendo lo mismo. Simplemente se agregó un aspecto de almacenamiento en caché a su comportamiento.
 * 
 */



/**Usando “func.call” para el contexto */

/**
 * El decorador de caché mencionado anteriormente no es adecuado para trabajar con métodos de objetos.

 *Por ejemplo, en el siguiente código, worker.slow() deja de funcionar después de la decoración:

 // // haremos el trabajo en caché de .slow
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // una aterradora tarea muy pesada para la CPU
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// el mismo código de antes
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}

alert( worker.slow(1) ); // el método original funciona

worker.slow = cachingDecorator(worker.slow); // ahora hazlo en caché

alert( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined

 *   lo que pasas es que siendo slow un metodo del objeto worker, al momento de ser llamda el metodo eb el contenedor (**), ahi se pierde el conecto del this y this es utiloizadpo en slow para referirce a someMethod(),

para solciopnar esto hay un metodo especial "func.call(context, …args)" que permite llamar a una función que establece explícitamente this.

La sintaxis es:

func.call(context, arg1, arg2, ...)

Ejecuta func proporcionando el primer argumento como this, y el siguiente como los argumentos.

En pocas palabras, estas dos llamadas hacen casi lo mismo:

func(1, 2, 3);
func.call(obj, 1, 2, 3)

Ambos llaman func con argumentos 1, 2 y 3. La única diferencia es que func.call también establece this en obj.

Como ejemplo, en el siguiente código llamamos a sayHi en el contexto de diferentes objetos: sayHi.call(user) ejecuta sayHi estableciendo this = user, y la siguiente línea establece this = admin:
 */


function sayHi(){
    alert(this.name); // aqui daria un error por que en el contecto de sayHi no hay na variable declarada llamda name.
}

let user = {name: "Marcus"};
let admin = {name : "Admin"};

//sayHi.call(user); // en esta parte del conido con el metodo especial call lo que hacemos es pasarle como contexto un objeto, el cual si tiene la propieda name que necesita la funcion sayHi() para funcionar bien

//sayHi.call(admin);

function say(phrase){
    alert(this.name + ': ' + phrase);  
}

let user1= {name:'Manuel'};
say.call(user1, "Hello");  // aqui lo que hacemos es lo mismo de arriba  pero le pasamos parametros.


//En nuestro caso, podemos usar call en el contenedor para pasar el contexto a la función original:

let worker ={
    someMethod(){
        return 1;
    },
    slow(x){
        alert(`Called with + ${x}`);
        return x * this.someMethod();
    }
}


function cachingDecorator(func){
    let cache = new Map();

    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }
        let result = func.call(this,x);
        cache.set(x,result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow);
//alert(worker.slow(2));
//alert(worker.slow(2));

/**
 *  Ahora todo está bien.

    Para aclararlo todo, veamos más profundamente cómo se transmite this:

    Después del decorador worker.slow, ahora el contenedor es function(x) { ... }.
    Entonces, cuando worker.slow(2) se ejecuta, el contenedor toma 2 como un argumento y a this=worker (objeto antes del punto).
    Dentro del contenedor, suponiendo que el resultado aún no se haya almacenado en caché, func.call(this, x) pasa el this actual (=worker) y el argumento actual (=2) al método original.
 * 
 */


/**Veamos los multi-argumentos
 * 
 * Ahora hagamos que cachingDecorator sea aún más universal. Hasta ahora solo funcionaba con funciones de un sólo argumento.

    Ahora, ¿cómo almacenar en caché el método multi-argumento worker.slow?


 * 
 * 
 */



// Esta funcion por expresion recibe un spread arguments.

function hash(...args) {
    return args[0] + ',' + args[1];
}


console.log(hash(1,2));



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
































