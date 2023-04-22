/* Constructor, operador "new" */


//Normalmente creamos objetos literales con {...}, pero, a menudo necesitamos crear varios objetos similares, como multiples usuarios, elementos de menu etc.


//Pero esto se puede realziar utilizando el constructor de funciones y el operador "new".



/* Función constructora */


//las funciones costructuras en esencia con funciones normales. Aunque donde dos conveciones particulares, veamos:

//1. SOn nombradas con la primera letra mayuscula.
//2. Solo deben ejecutarse con el operador "new".

//Por ejemplo:


function User(name){
    this.name=name;
    this.isAdmin = true;
}

let user = new User('Marcos');

console.log(user.name);
console.log(user.isAdmin);

// Cuando una funcion se enejuta con new, realiza los siguientes pasos.

function User1(name) {
    // this = {};  (implícitamente)  // crea objeto vacio llamado this
  
    // agrega propiedades a this  // al objeto vacio le agrega propiedades
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implícitamente) // devuele el objeto this.
}

//entonces cuando hacemos  let user= new User('marcos'), da los mismo que tener:

let user1={
    name:'Marcos',
    isAdmin:true
};

// ahor si queremos crear otros usuario lo que podemos hacer es:

let user2= new User('Marcus');
let  user3= new User('Bru');
let user4= new User('Manuel');

// si fue con objetos literales seria por verbose, ejemplo


/* 
let user5={
    name:'Marcus',
    isAdmin:true
}

let user6={
    name:'Bru',
    isAdmin:true
}

let user7={
    name:'Manuel',
    isAdmin:true
}
 */


//Este es el principal propósito del constructor – implementar código de creación de objetos re-utilizables.



// notas: tecnicamenyte cualqiuoer funcion execto las de flechas pueden ser utilizdas como funciones constructoras. Puede ser llamada con new, y ejecutra el codigo que describiumos anteriomente. La primera letra mayurcula es un convenio para dejar claro que la funcion debe ser ejecutada con new.




/* new function() { … } */

//Si tenemos mcuahs lienas de codigo todas sobre la creacion de un unico objeto complejo, podemos agrupar el codigo en un constructor de funcion , que es llamado y ejecutado al tiempo

// crea una función e inmediatamente la llama con new
let user5 = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ...otro código para creación de usuario
    // tal vez lógica compleja y sentencias
    // variables locales etc
};


/* El constructror :

function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ...otro código para creación de usuario
    // tal vez lógica compleja y sentencias
    // variables locales etc
}; 



//este constructor no puede ser reutilizado ni llamado en cualquier otra parte de codigo, el solo es creado y llamado. Por lo tando este codigo apunta a crear el objeto individual sin reutilizcion futura.
*/



/* Constructor modo test: new.target */

//Temas avanzados


//La sintaxis de esta sección es raramente utilizada, puedes omitirla a menos que quieras saber todo.


//Destro de una funcion costructora podemos poner un control para saber si fue llamada con o sin el "new", esto se realiza colomando dentro de la funcion constructora la popieedad especial new.target

// entonces cuado se lalma la funcion sin el "new" (normal) esta propieda especial devuelve undefined, pero si se llmada con "new" devuelve la funcion

function User8(){
    console.log(new.target);
}


User8();// undefined.
new User8(); // devuelve la funcion.. ojo no la ejecucion de la funcion.


//Esto puede ser utilizado dentro de la función para conocer si ha sido llamada con new, "en modo constructor "; o sin él, “en modo regular”.

//tamnien podemos hacer que no importa en que forma se llamen se va a ejecutar como si tubiera el new, veamos:


function User9(name){
    if(!new.target){
        return new User9(name);
    }

    this.name=name;
}


let marcos= User9('Marcos');
console.log(marcos.name);




/* Return desde constructores */


// NOrmalmente las funciones constructoras no tienen return. Su tarea es escribir todo al this, y automaticamente este se convierte en el resultado.

// Pero si hay una sentecnia return, entonces hay dos reglas:

//1.si el retur es llamado con un objeto, entonces el this es remplazado por ese objeto.
//2. si el retun es llamado con cualquier otro dato primitivo es ignorado.

//Vemos ejempplos:

function BigUser(){
    this.name='Marcus';

    return{name:"Marcos Manuel Bru Diaz"};
}

console.log(new BigUser().name);// salida:Marcos Manuel Bru Diaz

//veamos ahora  un ejemplo con un return vacío (o podemos colocar un primitivo después de él, no importa):

function BigUser1(){
    
    this.name= 'Bru Diaz';

    return "Hola";
}

console.log(new BigUser1().name)

//Normalmente las funciones constructoras no manejan return.

/* Omitir paréntesis */

//Por cierto, podemos omitir paréntesis después de new:

let user10 = new User; // <-- sin paréntesis
// lo mismo que
let user11 = new User();

// omitir los parentecis no se considera bien estilo.



/* Métodos en constructor */


//Utilizar funciones construcrtotas para crear objetos, nos da mucha flexibilidad. La funcion constructora puede tener argumentos que definan como construir el objetpo y que colocar dentro.

// pero por supuesto que podemos agregar tambien al objeto this metodos.

//Por ejemplo, new User(name) de abajo, crea un objeto con el name dado y el método sayHi:


function User12(name){

    this.name=name;

    this.sayHi=function(){
        console.log(`My name is ${this.name}`);
    };
}

let sayHi1 = new User12('Marcos Bru');
sayHi1.sayHi();