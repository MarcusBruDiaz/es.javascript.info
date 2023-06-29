/* Prototipos nativos */


//Object.prototype

//Digamos que tenemos un objeto vacio y lo mostramos:

let obj={};
//alert( obj ); //output: [object Object]

//¿Dónde está el código que genera la cadena "[objetc Objetc]"? Ese es un método integrado toString, pero ¿dónde está? ¡El obj está vacío!


//La notacion corta obj={...} es la misma que let obj = new Object(), donde  Object es una funcion constructota, con su prototype que hace referencia a un objeto enorme con toString y otros metodos.



// lo que pasa aqui es que Object hace referenta a Object.prototype el cual tiene propiedades comoi el constructor y ortos metods como toString, entonces cuando se llama al objeto con new Object, este va a buscar en Object.protoype el metedo que se intenta llamar.


//Vemos unas comprobaciones:


console.log( obj.__proto__ == Object.prototype )// output: true

console.log( obj.toString == obj.__proto__.toString )// output:true

console.log( obj.toString== Object.prototype.toString );//output: true


/* Otros prototipos integrados */


// Otros objetos integrados, comoo Array, Date, Function y otros tambien tienen  metodos en prototipo.

//Por ejemplo cuando creamos un arreay con [1,2,3], el constructor predeterminado new Array() se usa internamente . cyandoi esto pasa entonces Array.prototype se convierto en su prototipo con sus respectivos metodos y poropiedades.


// por especificacion todos los prototipos integrados tienen Object.prototype en la parte suoperior, Espor eso que se dice que "todo hereda de los objetos".


//Verifiquemos los prototipos manuales:


let arr=[1,2,3];

console.log( arr.__proto__ == Array.prototype );//output: true

console.log( arr.__proto__.__proto__ == Object.prototype ) // output: true

console.log( arr.__proto__.__proto__.__proto__ == null );// output: true

// Algunos metodos en proyotipo tienden a superponerse, por ejemplo Array.prototype, tiene su propio metodo tostring que lo que hace es delimitar los elememntos del array con comas, es por eso que utiliza el toString que esta en  Array.prototype  y no el que esta en Object.prototype. 


//Otros objetos integrados funcoinand e la misma manera, asi como las funciones: son objetos de un constructir Function integrado  y sus metodos (call/apply y otros) se toman de Functionc.prototype. Las funciones tambien tiene su propio metodo toString:

function f(){

}

console.log( f.__proto__.toString == Function.prototype.toString)// output: true.

console.log( f.__proto__ == Function.prototype )// output: true

console.log( f.__proto__.__proto__ == Object.prototype )//output: true



/* PRIMITIVOS */


//Lo mas delicado sucede con cadenas de string, numetros y booleanos.

// Estos datos no son objetos. pero si tratamos de acceder a sus propieades, se crean unos ubjetos temporales utilizando los constructores integrados String, Number y Boolean, estos proporcian los metodos y luego desaparecen.

//Estos objetos se crean de manera transparentes para nosotros.Los metodos de estos objetos tambien residen en protoripos Strin.prototype, Number.prototype y Boolean.prototype.


/* Cambiando prototipos nativos */

//Los prototipos nativos pueden ser motificados.Por ejemplo si agregamos un metodo a String.prototype, este metodo estara disponible en todoas las cadenas, vemos:


String.prototype.show= function(){
    alert( this );
}


"BOOM!".show();// BOOM!









/* TAREAS */

/* 

Agregue el método "f.defer(ms)" a las funciones
importancia: 5
Agregue al prototipo de todas las funciones el método defer(ms), que ejecuta la función después de ms milisegundos.

Después de hacerlo, dicho código debería funcionar: 

*/

/* function f() {
    alert("Hola!");
}

if(!Function.prototype.defer){

    Function.prototype.defer=function(ms){

        setTimeout(()=>{
            return this();
        },ms)
    }
}

f.defer(1000);
 */


function f() {
    alert("Hola!");
}

if(!Function.prototype.defer){

    Function.prototype.defer=function(ms){

        return function contenedora(a,b){
            //console.log(a,b)
            setTimeout(()=>{alert(a+b)},ms)
            
        }

    }
}

//console.log(f.defer(1000)(1,5));