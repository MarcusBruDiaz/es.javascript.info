let worker={
    someMethod(){
        return 1;
    },
    slow(x){
        console.log(`Called with + ${x}`);
        return x * this.someMethod();  // aqui se esta ejecutando el metodo someMethod() devilviendo 1 y multiplicandoce por el x
    }
};

function cachingDecorator(func){
    let cache= new Map();
    return function(x){
        if(cache.has(x)){
            return cache.get(x);  // si x esta en el map entonces lo rescata y lo devuelve
        }

        let result = func.call(this,x); // si no esta entonces ejecuta la funcion original en worker.slow(x), devolviendo el resultado en result, si esto lo hacemos son call daria un error debido que al momento fde la llamda no encontrata el contextpo del this, almenos aqui le estamos dando el contexto.
        cache.set(x,result); // se guarda en el map con la clave que es el valor de x y el resultado devuelto de la multiplicacion de x* someMethod(); descuiro arriba
        return result;
    };
}

worker.slow= cachingDecorator(worker.slow); // aqui se le esta diciendo al metrodo ortiginal worker.slow que lo haca en el cache 

console.log(worker.slow(2));// aqui se llama al metodo originar pero ahora con el decorador;  en la ejecucion es cuando toma el contexto this.





function sayHi(){
    console.log(`Hello ${this.name}`);// this hace referencia al objeto antes del punto
}

let user= {name:"Marcus"};

sayHi.call(user);// aqui se llama a la funcion pasandole como contexto el objeto user, el cual sera el this de kla funcion sayHi;


//COmo almacenamos en cache un metodo o una funcion con multiuples argumentos.

//Por que deberiamos guardar en cache la clave que identifique estos mismos argumentos.

//multi-argumentos

//una de la suluciones seria implementar unba funcion que una los dos parametros y los conbvierta a string y ese resultado sera pasado como clave el map.

//veamos:


let worker1={
    slow(min,max){
        return min +max;
    }

};



function cachingDecorator1(func,hash){
    let cache= new Map();
    return function(){
        let key = hash(arguments);
        if(cache.has(key)){
            return cache.get(key);
        }

        let result= func.call(this,...arguments);
        cache.set(key,result);
        return result;
    }

}

function hash(arg){
    return arg[0] + "," + arg[1];
}


worker1.slow= cachingDecorator1(worker1.slow,hash);

console.log(worker1.slow(3,5));





//PRESTAMO DE METODOS:

//Hagamos una pequeña mejora a la funcion hash, para que pueda recibir cualquier cantidad de argumentos.


// si unimos los arhumentos con arr.join(), esto daria un error debido que arguments es un semi-array mas no un array real. asi que no cuenta con este metodo join()

// una forma facil seria prestarle este metodo a un array real y pasarle el contexto de los argumentos.



function hash1(){
    //console.log(arguments)// arguments es un semi-array o un interable que contiene los argumentos pasados a la funcion
    console.log( [].join.call(arguments) );// aqui utilizamos call para pasarle el contexto de los arguymentos.
}

hash1(1,2);



/* TAREAS */

/* 
Decorador espía
importancia: 5
Cree un decorador spy(func) que devuelva un contenedor el cual guarde todas las llamadas a la función en su propiedad calls

Cada llamada se guarda como un array de argumentos.

Por ejemplo
 */


function work(a,b){
    console.log(a+b);
}


function spy(func){
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this,args);
    }

    wrapper.calls=[];
    return wrapper;
}

work= spy(work);

console.log(work(1,2));
console.log(work(4,5));
for( arg of work.calls){
    console.log(`Called: ${arg.join()}`);
}


/* 
Decorador de retraso
importancia: 5
Cree un decorador delay(f, ms) que retrase cada llamada de f en ms milisegundos.

Por ejempl

function f(x) {
  alert(x);
}

// crear contenedores
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // mostrar "test" después de 1000ms
f1500("test"); // mostrar "test" después de 1500ms

*/

function f(x){
    console.log(x);
}


function delay(func,ms){

    function retraso(arguments){
        setTimeout(()=>{
            //func.call(this,arguments);
            func(arguments);
        },ms);
    }

    return retraso;

}

let f1000= delay(f,1000);
let f1500= delay(f,1500);

console.log(f1000("test"));
console.log(f1500("test1"));
//-------------------------------------------------------------//


function f1(x){
    console.log(x);
}


function throttle(func,ms){
    function retraso(x){
        func.call(this,x);1|
        setTimeout(()=>{
            func.call(this,x);
        },ms);
    }

    return retraso;
}

let ff1000 = throttle(f, 1000);

ff1000(1);
ff1000(2);
ff1000(3);