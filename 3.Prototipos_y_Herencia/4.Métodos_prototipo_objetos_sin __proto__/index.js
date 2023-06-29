/* Métodos prototipo, objetos sin __proto__ */

// En el primer capitulo de esta seccion mencionamos que existen metodos moderenos para configurar un prototipo.


//Leer  y escribir en __proto__ se considera desactualizado.

//En cambio hay unos metodos modernos para obtener y estblecer (get/set) un prototipo, son:

//Object.getPrototypeOf(obj)// devuelve el [[prototype]] de obj

//Object.setPrototypeOf(obj,proto) // establece el [[prototype]] de obj a proto.


// El unioco uso de __proto__ que npo esta mal visto, es como una propiedad cauando se crea un objeto :{ __proto__:.....}

//Aunque hay una propiedad para hacer esto mismo sin utulizar el __proto__ literalmente en el objeto literal jeje


//Object.create(proto,[descriptors])

//Ejemplo:

let animal={
    eats:true
};

let rabbit = Object.create(animal);// Aqui se es como si hicieramos {__proto__:animal}

console.log( rabbit.eats );// output: true


console.log( Object.getPrototypeOf(rabbit) == animal ); //output: true

Object.setPrototypeOf(rabbit,{});


console.log( Object.getPrototypeOf(rabbit) )



// El metodo Object.create es muy potente, tambien podemos agregarles otras propiedades o metodos al nuevo objeto creado.


let rabbit1= Object.create(animal,{
    jumps:{
        value:true
    },
    otra:{
        value:"Hola"
    }
});

console.log( rabbit1.jumps )
console.log( rabbit1.otra )

//Posmos crear una copia mas profunda de un objeto con el metodo create de la siguiente manera:


let clone= Object.create(Object.getPrototypeOf(animal),Object.getOwnPropertyDescriptor(animal));

console.log( clone )

//esto hve una copia excata con propiedaes enumerables y nop enumerables. propiedades de datos (getters y setters)