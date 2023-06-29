//Expor e import

//estas directivas tienen varias variantes de sintaxis.

//Export abtes de las sentencias


//Podemos etiquetar cualquier sentebncia como exportada colocando export antes, ya sea una variable, una funcion o una clase.

//Ejemplos:

/* //exportamos un array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


//Exportamos una constante:

export const MODULES_BECAME_STRANDARD_YEAR = 2015;


//Exportamos una clase:

export class User{
    constructor(name){
        this.name =  name;
    }
}

 */

//Export separado de la declaracion:

//Tambien podemos hacer el export por separado de las declaraciones:
//Veamos un ejemplo, primero declaramos y luego exportamos:


/* function sayHi(user){
    console.log(`Hello , ${user}`);
}
 */

/* function sayBye(user){
    console.log(`Bye , ${user}`);
}
 */

/* export {sayHi,sayBye};
 */

// Import *


//Generalmente, colocamos una lista de lo que queremos importar en llaves import {....} de esta manera :

import { sayHi, sayBye } from "./saiHy.js";

sayHi('Marcus');
sayBye('Manuel');

///Pero si hay mucho que importar podemos utulizar un objeto utilizando import * as <obj>, ejemplo:


import * as say from './saiHy.js';

say.sayHi('Manuel');
say.sayBye('Marcus');


//Importar "as":

//Tambien podemos un importar con as como importar con nombres diferentes.

//Por ejemplo queremos imoirtar las mismas funciones sayHi pero queremos importarla como una variavkle local con un nombre diferente al original y lo mismo con sayBy, veamos como seria:

import { sayBye as bye , sayHi as hi } from "./saiHy.js";


hi('Bru');
bye('Diaz');

//Export "as"

//Ta¿mbien se puede renombar lo que exportamos con as

import * as say1 from "./saiHy.js";

say1.hi1('Marcos Manuel');
say1.bye1('Marcos Manuel Bru Diaz');


// Export Default:

//En la practica existen dos tipos de modulos:

// 1. Modulos que contienen librerias, ose aun conjunto de funciones, como sayHi.js

// 2. Modulos que declaran una entidad simple, por ejemplo un modulo user.js que exporte solo una clase user.

//Normalmente se prefiere el segundo enfoque, debido que cada cosa recida en su propio modulo.

//Pero este sgundo enfoque puede requerir muchos archivos, pero eso no es ningun problema, en realidad la navegacion  entre archivos de codifgo se vuelve mas facil si nombremoa de forma correcta los modulos.

//Este segundo enfoque tambien permite trabjarse de una forma mas facil con export default, debido que exporta una sola cosa.

//Pero como se have un export default veamos:
/* 
export default class User1{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`Hello, ${this.name}`)
    }
}
 */

//Solo puede existe un export default por archivo.

// y para importarlo se puede hacer sin las llaves , por ejemplo vamos a importar User1 en saiHy.js


import User1 from "./saiHy.js";

let user=new User1('Marcus');


user.sayHi();

// Las declaraciones ser exportadar aun sin tener nombre establecido,mdebido que se entiende que solo se esta exportando esa esa entidad¿, toda vezx que se peude un export default por archivo.

//El nombre default
