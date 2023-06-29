
/* F.prototype */


//recuerde que se puede crear una funcion constructora conb new F()

//F.prototype, es un objeto, el operanos new lo usa para estblecerlo como [[prototype]] en el nuevo objeto.


// en viejos tiempo no habia acceso a la herencia prototipica, lo unico quye podia funcionar de manera confiable era una propriedad "prototype" de la fucnion constructora, que es la que vamos a ver en este capitulo.

// aqui prototype es una funcion regular perteneciente a la funion constructora F

//Ej:


let animal ={
    eats: true
};

function Rabbit(name) {
    this.name= name;
}



Rabbit.prototype = animal;

let rabbit = new Rabbit('Conejo Blanco');

console.log( rabbit.eats );//  output: true



//entonces aqui lo que pasa es que la propiedad Rabbit.prototype = animal establece a animal en el prototypo de la funcion, pero cuando se new Rabbit('Conejo Blanco'); lama a esta liena se establece este objeto como referencia en el [[prototype]] de rabbit.


// si en algun momento cambia el Rabbit.prototype que haga erferencia a otro objeto, entonvces solo los nuevos objetos creados con new Rabbit se verean afectados y seran ese nuevo objeto al que hagn referencia, pero los objetos creados antes de cambiar el Rabbit.prototype seguiran con el objketo conb el que fueron creados.



/* F.prototype predeterminado, propiedad del constructor */

// toda funcion tiene esta propiedad "prototype", aun si  no la suministramos.


// el "prototype" predeterminado, es un objeto con una unica propiedad llamada constructor la cual apunta de nuevo  a la misma funcion.


//Ej:

function Rabbit1(){}

///esta funcion constructora tiene un el objeto predeterminado "prototype" con una propiedad contrucrtora que aponta a la misma funcion asi: Rabbit1.prototype={ constructor:Rabbit1 }

//comprobemolos haciendo una comparacion:


console.log(Rabbit1.prototype.constructor == Rabbit1); // output: true


// en los objetos normales denominados literales como:

let user= {
    name:"Marcus",
    prototype:"Cualqioer cosa"
};

//Aqui el prototype no es nada especial.


function Obj(message){
    this.message1=message;
    alert(message1);
}


let obj2 = new Obj.constructor();
obj2()

