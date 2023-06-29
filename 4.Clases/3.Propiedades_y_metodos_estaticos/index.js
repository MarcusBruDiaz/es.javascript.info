//Se puede asignar metodos a clases como un todo. son los denominados estaticos.

//Estos metodos se caracterizan por que en la declaracion de la clase, son creados con la palabra static antes del nombre del metodo.


//Los metodos estaticos son utilizados para implementar funciones que pertenecen a la clase com un noto y no aun objeto particular de la misma clase.


//relicemos un ejemplo , donde tenemos una clase Article y necesitamos una funcion patra comperar los articos por fecha.



class Article{

    constructor(name, date){
        this.name= name;
        this.date= date;
    }

    static compare(articleA,articleB){
        return articleA.date - articleB.date;
    }

}

let articles= [
    new Article('HTML',new Date(2019,1,1)),
    new Article('CSS', new Date(2019,0,1)),
    new Article('JavaScript',new Date(2019,11,1))
];


//Aqui lo que hace la fucnion sort es ordenar, como le pasamos una funcion compare que lo que hace es restar a - b en este caso articuloA-articuloB, si el resultado es mayor 0 entonces situa a "a" un un indice menor  a "b" eb este caso el resultado en mayor a 0 entonces situa a "b" con un indice menor, y despues en la segunda iteracion  hace lo mismo con el "a" que en este caso "html" seria  y "b" se ria "JavaScript", como el resultado es menor a 0 entonces sirua a "a":"html" con un indice menor y pasa deja de ultimo a "b":"Javascript"
articles.sort(Article.compare);

console.log(articles[0].name)


//entonces el metodo Article.compare esta por encima de los objetos artioculos, como un metdio para comparlos.

///vemos que Article.compara, es la clase en si mas no un metodo de casa objeto articles.

//si no se hiciera de esta manera, tocaria crear un metodo en la calse Articles, y para ordenar por fecha en los articulos, tocarta llamar al mismo objeto creado  a parit de la clase Articles para que haga dicho ordenamiento.

// digamos que necesitamos multiples formas de creear un articulo:


/* 
1.Crearlo por parámetros dados (title,date etc.).
2.Crear un artículo vacío con la fecha de hoy.
3.… o cualquier otra manera. 

*/



// La primera forma seria en el constructor(creando con  new Clase([param1],[param2]....)  ), y la seunda serioa creando un metrodo statico de la clase. 


class Article1{

    constructor(tittle,date){
        this.tittle=tittle;
        this.date=date;
    }


    static createTodays(){
        return new this('Resumen de hoy', new Date());
    }

}


// aui estamos creando un objeto con la clase Article1 con el cual mas adelante podemos utilizar lampropiedad que necesitemos
let article= Article1.createTodays();

//aqui estamos utilizando la propiedad tittle  de article
console.log( article.tittle )
//aqui la estamos motidiccando  la propiedad title de article mas no de la del la clase Article1
console.log( article.tittle="Hola" )


let article1= Article1.createTodays();

console.log( article1.tittle );// esta sigue siendo la original de la clase.

// los metodos estativcos son solo para las clases, si intentamos llamar el metodo en un objeto dericvadio de la clase este daria un error.


//Propiedades estaticas:


// se ven como una propiea de clase regular, pero la distingue que la antecede la palabra static.

/* 
class Article {
    static publisher = "Ilya Kantor";
  }
  
alert( Article.publisher ); // Ilya Kantor

*/

//Herencia de propiedades y metodos estaticos:

//Las propiedades y motodos estaticos son heredados. Veamos con uin ejemplo:

class Animal2{
    static planet ="Tierra";

    constructor(name,speed){
        this.name=name;
        this.speed=speed;
    }

    run(speed=0){
        this.speed+=speed;
        console.log(`${this.name} corre a una velocidad de ${this.speed}`);
    }

    static compare(animalA, animalB){
        return animalA - animalB;
    }
}


class Rabbit extends Animal2{
    hide(){
        console.log(`${this.name} se esconde!`);
    }
}


let rabbits= [new Rabbit("Conejo blanco",10),
              new Rabbit("Conejo Negro",5)
];

rabbits.sort(Rabbit.compare);
rabbits[0].run();


console.log( Rabbit.planet)

console.log( Rabbit.__proto__ == Animal2 )


class Rabbit6 extends Object {
    constructor(name) {
      super();
      this.name = name;
    }
}
  
let rabbit4 = new Rabbit6("Rab");

console.log( rabbit4.hasOwnProperty('name') ); 