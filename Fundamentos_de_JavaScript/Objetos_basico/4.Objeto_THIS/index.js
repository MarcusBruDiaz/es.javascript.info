/* Métodos del objeto, "this" */


//Los objetos son creanos normalmente para representar entidades del mundo real, como usuarios,ordenes..etc.

let user ={  // este es un objeto que representa a un usuario en el mundo real,.. le faltan algunos cuatos atributos pero para el ejemplo esta bien.jejej
    name:'Marcos Bru',
    age: 32
};

// pero en el mundo real, los usuarios pueden realizar acciones: como por ejempplo: coer algo del carrito de compra, hacer login..etc.

/// estas acciones son representadas en Javascript por funciones en las propiedades. del objeto.

//Vemos ejemplos de estas acciones que se llaman funciones, pero en el ambito de un objeto se denominan metodos.

//para empezar enseñemos al usur a decir Hola... osea enseñarle a marcos que tiene .32 años a decir hola, se habia demorado muhco para aprender a decir hola.. pero bueno ..

user.sayHi = function(){
    console.log("Hello");
};

user.sayHi(); // aqui llamamos a marcos y le decimos que ejecute le accion  de decir hola.


// Tamnien prodriamos  usar una funcion pre-declarada para un metodo, veamos como:


// primero declaramos la funcion, recuerda las buenas practicas de declara las funciones primero, aunque el motor de javaScript las busque en el script y las tenga en memoria.
function sayHi1(){
    console.log("Hola");
}

// aqui le pasamos la referencia de la funcion sayHi1 al metodo sayHi del objeto user.
user.sayHi = sayHi1;

//aqui ya nos encargamos de llamr al usuario y de llamar a la funcion de saludar.
user.sayHi();



/* Programación orientada a objetos */

//Cuando escribimos objetos que representan endidades.eso es llamado Programacion orientada a Objetos: POO.

/// la POO es una ciencia muy amplia,la cual nos hace preguntarnos: ¿ COmo elegir las entidades correctas?: osea que podemos llevar a un objeto y que no. Tambien como organizar la interaccion entre las distintas entidades(objetos), todo esto es arquitectura entre otras cosas. Hay muchos libros que me pueden ayudar a mejorar esa arquitectura:


//Libros:
//1.Patrones de diseño: Elementos de software orientado a objetos reutilizable” de E. Gamma, R. Helm, R. Johnson, J. Vissides 
//2.“Análisis y Diseño Orientado a Objetos” de G. Booch, y otros.



/* Formas abreviadas para los métodos */


//Existen formas mas abrebiadas de escribis metodos en objetos literales.

//Ejemplo:


// esta es la forma tradicional y me gusta por lo compacta.
user={
    sayHi: function(){
        console.log("Hello otra vez");
    }
};

//veamos otra forma mas costa, tambien interesante:

user={
    sayHi(){
        console.log("Hello de otra manera");// muy importante algo que veo, es que la declaracion de este metodo devuelve una referencia de la fucnion, cuando sea llamada tiene que ser con los ()
    }
};

console.log(user.sayHi()); // aqui es llamado el metodo con los ()


//la gran diferenia entre las dos formas de declara un metodo es que con la segunda nos evitamos crar una clave y asiganarle un valor. COn la segunda solo es declarar el metodo son clave y tambien sin l apalabra function.


/* “this” en métodos */

// es comun que un metodo de un objeto necesite acceder a otra informacion del objeto para cumplis su tarea.

// por ejemppli en el codigo dentro de user.sayhi()  puede necesitar informacion almacenada en el objeto user.

// para acceder al objeto, un metodo puede usar la palabra clave "this".

//el valor de this es el objeto "antes del punto", el usuado para llamar al metodo.

//POr ejemplo:

let user1={
    name:'Marcus',
    age: 32,
    sayHi(){
        console.log(this.name);
    }
};

console.log(user1);


user1.sayHi();// salida: Marcus


//aqui durante la ejecucion de user.sayhi(), el valor de this sera user.

// tecnicamente tambien es posible acceder al objeto this, haciendo referencia a él por medio de la variable externa.

//ejemplo:

let user2={
    name:'Marcus',
    age: 32,
    sayHi(){
        console.log(user2.name);
    }
};

user2.sayHi();


//pero este codigfo no es confiable, Si decidimos copiar user2 a otra variable, por ejemplo admin= user2 y sobrescribir user2 con otro valor, entonces admin accedera al objeto incorrecto, veamos con ejemplo:

let user3={
    name:'Marcus',
    age: 32,
    sayHi(){
        console.log(user3.name);
    }
};

let admin= user3;

user3=null;

//admin.sayHi();// estop aqui generatria un error, que que en le cambiamos el valor a user3 a null, entonces cuando intentamos acceder al metodo objeto sayHi mediante la referencia de admin y este daria un error por que el console.log llama al objeto user3 y como no lo en cuentra da error.

// este error no sucede con this, toda vez, que se cambia el valor que se cambia va a ser referencia al objeto donde esta el metodo.




/* “this” no es vinculado */

// la palabra this  puede ser utilizada en cualquier funcion, incluso si no es el metodo de un objeto.

// miremos la siguiente sintaxis:

function sayHi1(){
    console.log(this.name);
}

// el valor de this  es evaluado durante el tiempo de ejecucion, dependiendo del contexto.

//Por ejempl, aqui la funcion es asignada a dos objetos distintos, y tiene diferentes this en su LLAMADO.


let user4={name:'Marcus Bru'};
let admin1={name: "Admin"};


// usa la misma funcion en dos objetos distintos.
user4.f = sayHi1;
admin1.f = sayHi1;

// estos llamados tiene diferentes this
// this dentro de la fucnion es el objeto "antes del punto."
user4.f(); // Marcus Bru (this== user4)
admin1.f();// Admin (this == admin1)

admin1['f'](); // interesante este llamado.



/* Llamado sin un objeto: this == undefined */


//Podemos incluso llamar la funcion sin un objeto en absoluto.


function sayHi2(){
    
    console.log(this);
}

sayHi2();

// Aqui el llamaddo de this solo, hace referencia al objewto global.



/* Las consecuencias de un this desvinculado */

// en otros lenguajes de programacion, todos los metodos vinculados a un objeto tienen this referenciando al objeto.

// en javaScript  this es "libre", su valor es evaluado al momento de su llamado, y no depende de donde fue declarado el metodo sino de cual es el objeto "delante del punto"

//Eñ concepto de this evaluado en tiempo de ejecucion tiene sus pros y contras. Por un lado una funcion puede ser reuasada por diferentes objetos. Por otro lado tanta flexibilidad puede conllrvar a aquivocacaiones.


/* Las funciones de flecha no tienen “this” */

//ellas no tienen su propio this. si nosotros havemos referencia a this desde las funciones flechas, esta sera tomada desde afuera de la funcion.

//por ejemplo, aqui arrow(), unsa this desde fuera del metodo user.sayHi().

let user5={
    firstName:'Manuel',
    sayHi(){
        let arrow= ()=>console.log(this.firstName);
        arrow();
    }
};

user5.sayHi();



/* TAREAS */

/* Usando el "this" en un objeto literal
importancia: 5
Aquí la función makeUser devuelve un objeto.

¿Cuál es el resultado de acceder a su ref? ¿Por qué? */


function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user6 = makeUser();
  
alert( user6.ref.name );  // aqui se accede al objeto user6 que fue devuelto por la llamada a la funion makeUser(), entronces cunado acedemos a user6.ref estamos accediendo al objeto global debido que el this en una funcion hace referencia a ese objeto, no importa que este dentro de un objeto literal como en este caso, y entonbces en ese objeto global hay una propiede name pero esta vacio por eso eta linea devuelve " ";

function makeUser1(){
    return this
}

console.log(makeUser1()) // aqui devuelve la referencia al objeto global.


//Aquí está el caso opuesto:

function makeUser2(){
    return{
        name:'Marcus',
        ref(){
            return this
        }
    };
}


let user7=makeUser2();
console.log(user7.ref().name);// aqui si devueve la propiedad name del objeto devuelto por makeUser2, ref() devuelve this que es == al objeto devuelto por makeUser2





/* Crea una calculadora
importancia: 5
Crea un objeto calculator con tres métodos:

read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.
 */

/*

 */
let calculadora ={
    read(){
        let valor1 = +prompt("Digite valor1",0);
        let valor2 = +prompt("Digite valor2",0);
        this.a=valor1;
        this.b=valor2;
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;

    }

}

calculadora.read();
alert( calculadora.sum() );
alert( calculadora.mul() );
  



/* Encadenamiento
importancia: 2
Hay un objeto ladder que permite subir y bajar: */


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() { // muestra el peldaño actual
        alert(this.step)
        return this;
    }
};

console.log(ladder.up().up().down().showStep().down().showStep());

