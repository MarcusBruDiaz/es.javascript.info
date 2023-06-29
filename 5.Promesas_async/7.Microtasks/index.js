//Microtareas (Microtasks)

//Los manejadores o controladores( en adelante contronladores) de promesas .then/ .catch/ .finally son siempre asincronos.

// Incluso si la promesa es inmediatamente resuelta, el codigo en las lienas de abajo de .then/ .catch/ .finally se enecutaran antes que estos cntronladores.

///Vamos un ejemplo]:

let promise = Promise.resolve();

promise.then(result => console.log("Promesa resuelta."));


console.log('Se ejecuta primero que el controlador de la promesa, aun estando debajo de la misma.')

// Pero por que .then se disporo despues, veamos:

//Cola de microtareas (Microtasks queue)

//Las taras asincronas necesitan nuna gestion adecuada. Para ello, el estandar ECMA especifica una cola interna "PromiseJobs", en ocaciones mas conocida como "cola de microtareas"

// Cunado una promesa esta lista, sus controladores .then/ .catch/ .finally  se ponen en la cola; ellos aun no se ejecutan. Cuando el motos de JavaScript se libera del codigo actual, toma una tarea de la cola y la ejecuta.

// LOs controladores de promesas siempre pasan por esa cola interna.

// Pero si el orden es para nosotros importante y queremos que el rfespto del script se ejecuto justo despues del controlador de la promnesa ? como lo hacemos.

//Facil solo se pode en la cola con .then


Promise.resolve()
    .then(()=>console.log('Promesa realizada'))
    .then(()=>console.log('Codigo finalizado'))

//RECHAZO NO CONTROLADO.

