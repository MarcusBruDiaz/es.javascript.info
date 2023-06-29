// Clases es una plantilla para la creacion de objetos de datos. se suele utilziar para representar a los sustantivos en el lenguaje.
// Cada clase definie unas variables y unos estados. y metodos o acciones para operar essos estados o variables.

//class es un costructor que tiene caracteristicas nuevas y utilies para la programacion orientada a objetos.

/* Sintaxis:


class Myclass{


    constructor(){...}

    method1(){...}
    .
    .
    .
    methodn(){...}

}
 */


//entomces usamos new Myclass para crear un nuevo objeto con todos los metodos de Myclass.

//el metodo constructor es inicializado auomaricamente. yo lo veo de la siguiente manera, cmira que la clase se crea sin parentecis osea no tiene donde pasale parametros, entonces la funcion que tiene contacto con el exterior es constructor, y a patryir de ahi se los pasa a los metodos de la clase internamente.

//Vemos ejemplos:

class User{

    constructor(name){
        this.name= name // aqui creamos una variable internta this.name que el this se relaciana al objeto en el cual se instacia la clase User.
    }


    sayHi(){
        console.log(this.name)
    }
}


let user= new User('Marcus');
user.sayHi();












