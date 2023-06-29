
let animal={
    eats:true,
    walk(){
        console.log("Animal da un paseo")
    }
};

let rabbit={
    jumps: true
};

rabbit.__proto__= animal;// aqui se esta estableciendo un herencia propotipada, donde rabbit esta  heredando las propiedades de animal, pero no se esta creadno una copia de animal ni nada por el estilo. Solo que se referencia el objketo animal por si en algun momento rabbit necesita de sus propiedades.

console.log(rabbit.eats);
console.log(rabbit.jumps);

// lo anterior tambien se puede hacer con metodos.

rabbit.walk(); // aqui el metodo walk() esta definido en ani¿mal, pero animalk se lo esta passando como herencia protpotipica a rabbit, el cual puede tambie  utiulizarlo.

// otra forma de heredar los metodos y propiedades de un objeto a otro es de la siguiente manera directamente en el objeto literal:


let rabbit1={
    jumps: true,
    __proto__:animal  // aqui esta la diferencia,
};

rabbit1.walk();


// Pero podemos hacer la cadena mas larga como queramos vemaos:

//digamos que tenemos otrp objeto longEar(orejka larga):
let longEar={
    earLength:10,
    __proto__:rabbit1  // Como se puede ver hace referencia al objeto rabbit1 el cual a su vez hace referencoa a animal.
};

longEar.walk(); // entonces cuando intentamos acceder al metodo walk() prinero busca en rabbit1 y como no klo encuentra lo buca en animal
console.log(longEar.jumps);// aqui lapropiedad jumps si la hereda directamente de rabbit1



// El propotipo solo s eusa para ller propiedaes y metodos, mas no para escritura o eliminacion, vemos un ejemplo, donde hacemos un prototipo, y despues decidimos agregar el metodo directamente al metodo que hereda:


rabbit.walk=function(){
    console.log( "¡Conejo! ¡Salta, salta!" ); // aqui solo se medifica en el objeto, entonces el metdo walk en animal sigue igual.
};

rabbit.walk();
animal.walk();


//¿ Que pasa con el this con con los proptotipo ?

// la respuesta es nada, por que el this en estos casos siempra va a ser el objeto antes del .



// el bucle for..in itera tambien las propiedades heredadas:


console.log(Object.keys(rabbit1));// aqui el metodo keys solo puede acceder a las propiedes propias de rabbit1

// en cambio el for..in pyuede iterar sobre las propiedades heredadas:



for(let prop in rabbit1) {
    console.log(prop);  // aqui accederf a las propias y a las heredadas.
}


/* TAREAS */


/* 

Trabajando con prototipo
importancia: 5
Aquí está el código que crea un par de objetos, luego los modifica.

¿Qué valores se muestran en el proceso? 


*/

let animal1 = {
    jumps: null
};
  


let rabbit2 = {
    __proto__: animal1,
    jumps: true
};

console.log( rabbit2.jumps ); // ? (1)  // salida: true.

delete rabbit2.jumps;

console.log( rabbit2.jumps );// ? (2) // saluda: null

delete animal1.jumps;

console.log( rabbit2.jumps ); // ? (3) // salida: Undefined.



/* 


Algoritmo de búsqueda
importancia: 5
La tarea tiene dos partes.

Dados los siguientes objetos: 

*/

let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__:head
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
};
  
let pockets = {
    money: 2000,
    __proto__:bed
};

console.log(pockets.pen);
console.log(bed.glasses)
console.log(pockets.glasses);



/* 

Crea un objeto con el mismo constructor
importancia: 5
Imagínese, tenemos un objeto arbitrario obj, creado por una función constructora; no sabemos cuál, pero nos gustaría crear un nuevo objeto con él.

¿Podemos hacerlo así?


*/

