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



// Esta funcion por expresion recibe 

function hash(...args) {
    return args[0] + ',' + args[1];
}


console.log(hash(1,2));













