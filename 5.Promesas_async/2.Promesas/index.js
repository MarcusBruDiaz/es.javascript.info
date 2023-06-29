//Promesas


//Cosas que havemos en la programacion:

//1. UN codigo productor que hace algo y toma un tiempo (cantante)

//2. "codigo consumidor"  que quiere el resultado del codigo productor, muchas funciones pueden necesitar del resultado de este codigo productor. (fans)

//3. Uba promesa es un objeto JS especial que une el "codigo productor" y el "codigo consumidor", el codifgo priductor toma el tiempo que se necesario para producir un resultado prometido y la promesa  hace que ese resultado este disponible para todo el codigo suscrito cuando este listo.

//La sictaxis del constructor para un objeto promesa es :

/* let promise= new Promise(function(resulve, reject){
    //Ejecutor el codigo productor.
}); */


//La funcion pasada a new Promise se llama "ejecutor". este constiene el codigo productor que la larga deberia producir un resultado.

//Sus argumentos resolve y reject son callbacks proporcionados por JS. Nuesytro codigo solo esta dentro del ejecutior.

//Cuando el ejecutor mas tarde o mas temprano, obtiene el resultado, debe llamar a unos de estos callbacks:

// resolve(value): si el trabajo finalizo con exito, con el resultadio value.

// reject(error): si ocurrio un error, error es el objeto de error.


//El objeto "promise" devuelto por el constructor new Promise tiene estas propiedades internas:

//1. state : inicialmente "pendiente"; luego cambia a "cumplido" cuando se llama a "resolve" o a "rechazado" cuando se llama a reject

//2.result inicialmente undefined; luego cambia a valor cuando se llama a resolve(valor) o a error cuando se lalma a reject(error)


// Una promera que se resuelve o se rechaza se denomina "resuelta", en oposicion a una promesa iniciamnete pendiente


//DATOS IMPORTENTES:


//1. El ejecutror debe llamr solo a un "resolve" o un "reject", Cualquier cambio de estado es definitivo. Se ignoran todas  las llamadas adicionales a resolve y a  reject


/*

 let promise = new Promise(function(resolve, reject) {
    resolve("hecho");
  
    reject(new Error("…")); // ignorado
    setTimeout(() => resolve("…")); // ignorado
});

 */


//resolve/reject espra solo un argumento (o ninguno) e ignora argumentos adicionales,


//2. rechazar con objeto Error

//En la practica, un ejecutror generalmente hace algo de forma asincrona y llama a resolve/reject despues de un tiempo, pero no esta obligado a hacerklo asi. Tamnbien podemos llamr a resolve/reject inmediatamente :


/* 
let promise = new Promise(function(resolve, reject) {
    // sin que nos quite tiempo para hacer la tarea
    resolve(123); // dar inmediatamente el resultado: 123
});
 */

//las propioedades state y result del objeto "Promise" sonb internas. NO podemos acceder a ellas directamente. Podemos usar metodos .then/ .catch/ .finallt para eso.


//Consumidores: then y catch

//Un objeto Promise sirve como enlkace entre el ejecutor(codigo productor,"cantante"), y el codigo consumidor "fanaticos", que reciben un resultado o un error.Las funciones de consumo puedes registratse("suscribirse") utilziando los metodos .then y .catch


//Then 

//Es el mas importente , la sintanxis es :

/* 
promise.then(
       // function(result){//resultado exitoto}
    //function(error){resultado error}
)
*/


//El primer argumento de .then es una funcion que ejecuta cuando se resuelve la promesa y recibe el resultado.

//El segundo argumento de .then es una funcion que se eejcuta cuando se rechaza la promesa y recibe el error.

//Vemos una reaccion a una promesa resuelta con exito:


let promise1 = new Promise(function(resolve,reject){

    setTimeout(()=>{resolve("hecho!!")},1000)

});

promise1.then(
    result=> console.log(result),
    error=> console.log(error)
);



//vemos si hay un error:




let promise2 = new Promise(function(resolve,reject){

    setTimeout(()=>reject(new Error("Vaya un error!")),1000)

});

promise2.then(
    result=> console.log(result),
    error=> console.log(error)
);


//Ahora si solo nos interesa las promesas con resultado exitoso, pdoemos hacer lo siguiente:

promise1.then(console.log) // aqui lo que estamos haciendo es pasandole a console.log(result).


//catch:

//Si solo nos interesan los errores. entomces podemos user null como primer argumento de then: .then(null,errorHandlingFunction). o POdemos usar .cathc(errorHandlingFunction), que seria exatamente los mismo:

promise2.catch(console.log)


//La llamada a .catch(f) es analogo completo de .then(null,f), es solo una abreviatura.

//Limpieza:Finally

//La llamada .finally(f) es similar a .then(f,f) en nel sentido de que f siembre se ejecuta cuando se resuelve la promesa: ya sea que se resuelva o se rechace.

//La idea de .finally es establecer un manejador para realizar limpieza y finalizacion despues de que las operaciones se hubieran completado.

//Por ejemplo, detener indicadores de carga, cerrar conexiones que ya no son necesarias, etc.

//Puedo poensando como el finalizador de la fiesta . No importa si la fiesta fue buena o mala, deberiamos necsitar alguien que limpie.,


//el codigo puede verse mas  o menos asi:

new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('Wow!')});
})
    .finally(()=>console.log("stop loading indicator"))
    .then(result=>console.log(result));

//Finallu:

//1.Un manejador finally no tiene argumentos no sabvemos si la promesa es exitosa o no Esto esta bien ya que usualmente nuestra tarea es realizar procdedimientos de finalizacion "generales"

//2. resultados y errores pasan a traves del manejador finally . estos pasan al siguiente manejador que se adecue.

//Por ejemplo, aqui el resultado se pasa a traves de finally a then:

new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('Valor'),1000})
})
    .finally(()=>console.log('Proimis it is ready'))
    .then(result=>console.log(result));//valor

//Como se puede ver  el "valor" devuelto por la primera promesa es pasado a traves de finally al siguiente then.

//Esto es muy conveniento, toda vez que la funcion de finally no es procesar resultados de una promesa. Es  el lugar pára hacer la limpieza general sin importar cual haya sido el resultadio.

//Lo anterior pasa igual con los errores


new Promise((resolve,reject)=>{
    setTimeout(()=>{reject(new Error("Vaya Error!")),1000})
})
    .finally(()=>console.log('Proimis it is  ready'))
    .catch(error=>console.log(error));//Vaya Error!


//Ejemplo: loadScript:

///En el capitulo anterior cremaos una funcion loadScript para cargar una etiqueta <script>  y estabklecerle un src, esto lo hiciemos utilizando callback.

//En este caso vamos a reescribirlo utiliando promesas:


function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        script.src=src;


        script.onload = ()=> resolve(script);
        script.onerror =()=> reject(new Error('Error al cargar script'));

        document.head.append(script);
    })
}

let promise3 = loadScript('./index1.js');


promise3.then(  
    script=>console.log(`${script.src} esta cargado!`),
    error=>console.log(`Error ${error.message}`)
)


/* Demora con una promesa
La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en promesas.

La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse después de ms milisegundos, para que podamos agregarle .then, así: */



function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),ms);
    })
}


//delay(3000).then(() => alert('se ejecuta después de 3 segundos'));