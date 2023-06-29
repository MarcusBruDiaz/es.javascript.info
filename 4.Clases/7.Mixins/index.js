//Los Mixins:

//En JS se puede heredar de un solo objeto. Solo puede haver un [[prototype]] por un objeto. y una calse puede extender unicamente otra clase.


//Mixin es una calse que contiene metodos que pueden ser utilizados por otras clases sin necesidad de heredarf de ella.

//En otras palabras, un mixin proporciona metodos que implementan cierto comportamiento, pero su uso no es exclusivo, lo usamos para agragar el comportamiento a otras clases.

//Ejemplo de mixin:


//La forma de utilizar mixini en JS es hacer un objeto con metodos utilesm, para que podamos combinarlos facilmente al prototipo de una clase.

//Ej:


//aqio creamos el mixin
let sayHiMixin={
    sayHi(){
        console.log(`Hola ${this.name}`);
    },

    sayBye(){
        console.log(`Adios ${this.name}`);
    }
};

//POr aqui lo usamos:

class User{

    constructor(name){
        this.name=name;
    }
}

//Copiamos los metodos que queremos pasarle a user:

Object.assign(User.prototype, sayHiMixin);

new User('Marcos').sayHi();

//Aqui no hay herencia, solo hay una copia, entocmes User peude hacer heredar de otras clases al tiempo tambien.

// Los mixins pueden hacer uso de herencia dentro de si mismos:

//Por ejemplo, aqui sayHiMixin1 hereda de sayMixin:


let sayMixin={
    sayHi(phrase){
        console.log(phrase);
    }
};



let sayHiMixin1 ={
    __proto__: sayMixin,
    sayHi(){
        super.sayHi(`Hola ${this.name}`)
    },

    sayBye(){
        super.sayHi(`Adios ${this.name}`);
    }
};

class User1{
    constructor(name){
        this.name=name
    }
};


Object.assign(User1.prototype, sayHiMixin1);


new User1('Marcus Bru').sayBye()


//EventMixin:

//Ahora hagamnos un mexin para la vida real:

//UNa caracteristicas de los navegadores son los eventos.. Los eventos son una excelente manera de transmitir informaicon, asi que hagamos un mixin que nos permita agrgar faculmente funciones relacioanadas con evenbtos a cualquioer clase/objeto.



//1. El mixin prporciona un metodo .trigger(name,[...data]) para generar un evento cuando le ocurra algo importante. el argumento "name" es una nombre del evento, opcionalmente de argumentos adicionales con datos del evento.

//2.El metodo .on(name, handler), que agrega una funcion "handler" como listener a evenbtos con el nombre dado "name",. Se desencadenara cuando un evenbto con ese nombre, y obtenga los argumentos dew la llamada .tigger

//3. metodo .off(name., handler), que elimina el listener handler

//Despues de agrgar el mixin, un objeto user podra generar un evento "login", cuando el visitante inicio sesion. Y otro objeto, por ejemplo, calendar pueda querer escuchar dichos eventos para cargar el calentadario para la persona registrada,


