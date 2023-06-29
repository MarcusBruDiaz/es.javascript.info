// Como pudemos saber si un objeto pertenerece y viene de una onstancia de una clase???

//la foirma de verificar si unb objeto pertenece a la instancia de una clase. Seria instanceof, tamien tiene en cuenta la herencia.

//sintanxis:

//obj instanceof Class

//vemos un ejemplo_


class Rabbit{};


let obj = new Rabbit();

console.log( obj instanceof Rabbit );// vertifica que obj es un objeto resultado de la instancia de la clase Rabbit.


//Tambien funciona parfa funciones constructoras:

function Rabbit1(){}

console.log( new Rabbit1() instanceof Rabbit1 );

//Tambien funciona con clases integradas como Array:

let arr= [1,2,3,4];


console.log( arr instanceof Array ); // true

//Aui recordemos que arr pertenece a la clase Object .  esto se debe a que Array heredea prototipicamente de Objetc

