// son como metodos que ayudan a leer o modifcar una propieda de un objeto, pero que el codifo externo lo ve como una propieda mas del objeto.

let user={
    name:'Marcus',
    surname: 'Bru'
};

//por ejemplo tenemos este objeto, pero queremos una  propiedad que sea el fullname, entonces podemo valernos de get para objenet los valores de la propiedad existente y armar la propieda fullname:


let user1={
    name:'Marcus',
    surname: 'Bru',

    get fullname(){
        return `${this.name} ${this.surname}`;
    }
};

console.log(user1.fullname);// miren qye aqui no leemos la pripiedad fullname como una funcion, si no como una propiedad mas del objeto.,

// hasta aqui lo que hemops echo es solo crear un receptor, si quisieramos darle un valor distinto a la propiedad fullname, daria un error, para solucionarlo implementamos la propeudad set fullname:




let user2={
    name:'Marcus',
    surname: 'Bru',

    get fullname(){
        return `${this.name} ${this.surname}`;
    },

    set fullname(value){
        [this.name, this.surname]= value.split(" ");  // aqui secrea la seudo propiedad que permite modificar las otras prpiedades.
    }
};

user2.fullname= "Manuel Diaz";

console.log(user2.fullname);
console.log(user2.name);


// hagamos a getter y setter mas inteligentes:

//Podemos utilizar estas funciones para poner algo de restricciones en los valores de una propiedad de un objeto, por ejemplo que la longitud de un texto no sea menor a sierto valor


let user3={

    get name(){
        return this._name;
    },

    set name(value){
        if(value.length<4){
            console.log("the name is very short, it need at least four characters");
            return;
        }

        this._name=value;
    }

};

user3.name="pete";

// aqui el el nombre se almacena en la proieda _name, y el acceso se puede hacer mediente get y set 

// nota: hay un acuerdo que las popiedades que comienzan con guin bajo _ son internas y no deberian ser modificadas desde el exterior.

// imaginemos que tenemos un codigo, mas precisamente u objeto donde almanecamos la informacion de un usuario nombre y edad:

function User(name,age){
    this.name=name;
    this.age=age;
}


let marcos= new User("Marcus",32);

console.log(marcos.age);

// pero despues queremos cambiar el codigo para almanecar el cumpleaños:

function User1(name,birtday){
    this.name= name;
    this.birtday= birtday;
}

let manuel= new User1('Manuel', new Date(1990,04,11));
console.log(manuel.birtday);

// y ahora que hacemos con el viejo codigo cuando guardabamos la edad, igual la edad tambien es un dato que es importateb tenerlo guardado.


function User2(name,birtday){
    this.name= name;
    this.birtday= birtday;

    Object.defineProperty(this,"age",{
        get(){
            let todayYear= new Date().getFullYear();
            return todayYear - this.birtday.getFullYear();
        }
    });
}


let john = new User("John", new Date(1992, 6, 1));

console.log(john.age);
console.log(john.birtday);
