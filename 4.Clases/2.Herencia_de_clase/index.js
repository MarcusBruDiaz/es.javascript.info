//La herencia de clase es el modo que una clase se extiende a otra. Asi podemos añadir nuevas funcionabilidades a la clase que recibe la herencia,.



//Palabra clase "extends"

//Ejemplo, digamos que tenemos la clase animal:

class Animal{

    constructor(name){
        this.name=name;
        this.speed=0;
    }

    run(speed){
        this.speed=speed;
        console.log(`${this.name} corre a una velodidad de ${this.speed}`);
    }

    stop(){
        this.speed=0;
        console.log(`${this.name} se queda quieto.`);

    }
}

let animal= new Animal('Leon');


//Pero digamos que queremos crear otro Calseeen etse caso rabbit, pero queremos algunos metodos de la clase animal en esa clase y tambien los atributos o variavles del constructor. enbtonces ahi es donde aparece extends:


class Rabbit extends Animal{// nos traemos los metodos de la clase Animal

    hide(){ // creamos un metodo propio de la clase Rabbit 
        console.log(`${this.name} se esconde`);  // aqui accede a la variable de Anumal this.name
    }    

}

let rabbit= new Rabbit('Conejo');// el argumento pasado aqui es el que se le pasa al constructor 

rabbit.run(5);// el argumento pasado aqui en el que recibe el metodo de la clase.
rabbit.hide();


// Entonces cunndo hacemos un extends lo que sucede es que Rabbit en su prototipo tiene hereado Animal.prototype, y en su defecto rabbiit primero busca en Rabbit y si no encuenta algun metodo lo va a buscar en el protpripo de Rabbit que es Animal.protoype.

//Asi las ciasa cuando el metodo llamado en rabbit si se encuentra en Rabbit entonces este sera elk que se ejecute, pero muhcas veces qiuetremos ejecutar es metodo pero en el padre en este caso en Animal, para eso aparace la expresion "super":

//super.metodo(..): llama al metodo en el padre
//super(..): llama al constructor padre(solo se utiliza dentro nde nuestro constructor.)

//ejemplo:


class Animal1{

    constructor(name){
        this.name= name;
        this.speed=0;
    }

    run(speed){
        this.speed=speed;
        console.log(`${this.name} corre a una velocidad de ${this.speed}`);
    }

    stop(){
        this.speed=0;
        console.log(`${this.name} se queda quieto`);
    }

}


class Rabbit1 extends Animal1{

    hide(){
        console.log(`${this.name} se esconde!`);
    }

    stop(){
        super.stop();
        this.hide();
    }

}


let rabbit1= new Rabbit1('Conjo blanco');

rabbit1.run(5);
rabbit1.stop();

// Nota: las funciones flecha no tiene super.

// sobreescribir un constructor:

// Hasta hoara Rabbit no tiene su propio conmstructor:_

// segun la especificacion de JS, cuando una clase extiende a otra, y esa clase no tiene un constructor entonces se gerena un constyructor vacion dfe la siguiente manera

/* 

class Rabbit extends Animal {
    // es generado por extender la clase sin constructor propio
    constructor(...args) {
      super(...args);
    }
  }


*/

//Ahora supongamos que queremos crear en Rabbit su propio constructor y sarle una propiedad mas:



class Rabbit2 extends Animal{

    constructor(name, earlength){
        this.speed=0;
        this.name= name;
        this.earlength= earlength;
    }


}

//let rabbit2= new Rabbit2('Conejo azul',15);// error Must call super constructor in derived class before accessing 'this' or returning from derived 


// la respuesta al error es simple, el constructor en las clases heredadas deben llamar a super(..) y este debe pasar antes de utilizar this.


//Cuando una funcion recular se ejecuta con new crea un objeto vacio y lo asigna a this.

// pero con el constructorn derivado no pasa igual , espera a que el constructor padre haga este trabajo.


// todo esto pasa cuendo se extiende una clase, y sucede ewn la clase que extiende.


//solucionm:


class Rabbit3 extends Animal{
    constructor(name,earlength){
        super(name);
        this.earlength= earlength;
    }
}




let rabbit3= new Rabbit3('Conejo verde',10);

console.log(rabbit3.name);
rabbit3.run(15);


//Sobrescribiendo campos de clase: una nota con trampa




/* TAREAS */

class Animal3 {

    constructor(name) {
      this.name = name;
    }
  
}
  
class Rabbit5 extends Animal3 {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
}
  
let rabbit4 = new Rabbit5("Conejo Blanco"); // Error: this no está definido
console.log(rabbit4.name);




//2.Crea una nueva clase ExtendedClock que herede de Clock y agrega el parámetro precision: este es el número de milisegundos entre “tics”. Debe ser 1000 (1 segundo) por defecto.


class Clock {

    constructor({template}) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start(milisegundos) {
      this.render();
      this.timer = setInterval(() => this.render(), milisegundos);
    }
}


//let reloj = new Clock({template:'h:m:s',precision: 10000});

//reloj.start();
//reloj.stop();


class ExtendedClock extends Clock{

    constructor({template,precision}){
        super({template});
        this.precision=precision;
    }

    start(){
        super.start(this.precision)    
    }

    stop(){
        super.stop();
    }
}


let lowResolutionClock = new ExtendedClock({template: 'h:m:s',precision:1000});


lowResolutionClock.start();
lowResolutionClock.stop();