//Propiedades y meodos protegidos y privados


//Unos de los principios de la POO es: Delimitar la interfaz interna de la externa.


// Para cubrir el codigo in¿terno no utilizaremos una cobierta si no mas bien una sintaxis especiales y unas conceciones.

//Interfaz interna y externa.

//en la POO las propiedades y los metodos se dividen en dos grupo:

//Interfaz interna: Metodos y propiedades, accesibles desde otros metodos de la clase, pero no desde el exterior.

//Interfaz externa:  Metodos y propiedades, accesibles tambien desde afuera.


// En JS hay dos tipos de campos de objetos(propiedades y metodos):

//Publico: accedeible desde cualquier parte.
//Privados: Accesible solo desde dentro de la clase

// Para ver en detalle los tipos de metodos, veamoslos co u ejemplo de crear una cafetera:


class CoffeMachine{
    WaterAmount=0;

    constructor(power){
        this.power=power;
        console.log(`Se creao una maquina de cafe, poder: ${this.power}`);
    }

}

//Creamos una maquina de cafe
let coffeMachine= new CoffeMachine(100);


//we added water:


coffeMachine.WaterAmount=200;


// hasta este punto las propiedades waterAmount y power son publicas, poemos obtenerlas y configurarlas facilmente desde el exterior.


/// Vamos a proteger la propiedad waterAmount, cojn el find e que nadie le ponga 0 agua.

// las propiedades protegidas generalmente tiene el prefijo de subrayado  "_."

// es una covencion que indica que estas propiedades no puedes ser accedidas desde el exterior.

// agregremos la propiedad protegida: esta protecion en js nonexiste pero se puede simular:


class CoffeMachine1{
    _waterAmount=0;

    set waterAmount(value){
        if(value<0){
            value=0
        }
        this._waterAmount=value
    }


    get waterAmount(){
        return this._waterAmount;
    }

    constructor(power){
        this.power=power;
    }
}


let coffeMachine1= new CoffeMachine1(100);

coffeMachine1.waterAmount=-10;

console.log(coffeMachine1.waterAmount);



//podemos crear la propieda power solo lectutra en este caso solo hacemos get:

class CoffeMachine2{

    constructor(power){
        this.power=power;
    }


    getpower(){
        return this.power;
    }

}


console.log(new CoffeMachine2("100W").getpower());


// los campos protegidos identidicados con "_." son heredables, a diferencia de los privados, veamoslo.




//“#waterLimit” Privada


// las propiedades y metodos privados empiezan por #

//Vemos una clase que tiene una propieda privada #waterLimit y u metodo privado #fixWaterAmount:

class CoffeMachine3{
    #waterLimit= 200;

    #fixWaterAmount(value){
        if(value<0) return 0;
        if(value >0) return this.#waterLimit;
    }

    setWaterAmount(value){
        this.#waterLimit= this.#fixWaterAmount(value);
    }


}


let coffeMachine4= new CoffeMachine3();

//CoffeMachine3.#fixWaterAmount(123);// esto genera un error debido que es privada y no puede hacerce fuera de la clase.

// los compos privados no entran en conflicto con los publicos, podriams tener #waterLimit y waterLimit en la misma clase y no tendria conflicto.

// Pero si intentamos acceder directamente al #waterAmount. no funcionaria , seria hacerlo por medio de un get/ set de waterAmount:

// en la POO esta delimitacion entre lo interno y lo externo se denomina encapsulamiento.,