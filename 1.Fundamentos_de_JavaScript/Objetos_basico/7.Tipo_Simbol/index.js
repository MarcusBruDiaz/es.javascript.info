/* Tipo Symbol */

//Segun la especificacion de javaScript, solo los datros tipos primitivos pueden server como calve de propiedades de objetos:

//-string
//-symbol

//Si se usa otro tipo, este se convertira automaticamente a string, asi: obj[1] es lo mismpo que obj["1"], y obj[true] es igual a obj["true"].

// hasta el momento hemos utulziado solo string para crear propiedades.

// Vamos a ver de que forma y en que nos benefica crear propiedades con Symbol.


/* Symbols */

// El valor symbol representa un identificador unico.

// un valor de este tipo se puede crear de la siguiente manera:

let id= Symbol();  // aqui se crea un identificados unico en id.

// el crear este identificador tambien podemosm agregarle una descripcion, que nos ayudara a depurar el codigo, por ejemplo_

let id1= Symbol("Crea un id unico");

// con symbol se garantiza que se crean identificadoreds distintos, aun si se crear otro identificador con la misma descripcion. vemos esto con un ejemplo:


let id2=Symbol("id");
let id3= Symbol("id");

console.log(id2 == id3);  // false, aun tengan la misma descricion el identificador interno es diferente.

//Para ir resumiento lo que hemos visto. un symbol , es un tipo de dato primitico, que genera un identificador unico, y que aunque tengan descripciones iguales, el valor genereado siempre sera diferente.



/* Symbols no se autoconvierten a String */


//La mayoria de valores en javaScript soportan la conversion implicita a string. Por ejemplo, podemos hacer alert a cualquier tipo de datos y funcionara, pero si intentamos hacer un alert a un symbol esto generara un error. (alert converte a string lo que se pase como argumentos.)

//veamos un ejemplo de alert pasandole un symbol:


let id4=Symbol("id");
//alert(id4);// this show an error: cannot convert a Symbol to a string.

// si realmente queremos mostrar un simbol tendriamos que convertir el valor a un string con toString(), ej:

let id5= Symbol("id");
alert(id5.toString());// output : Symbol(id)


// para obtener la descripcion seria con la propiedad .description, ejemplo:
console.log(id5.description);



/* Claves “Ocultas” */

// los symbols non permiten crear propiedades ocultas en un objeto. a las cuales ninguna otra parte del script puede acceder y menos sobrescribir.

// por ejemplo si hay un objeto user, el cual es parte del codigo de otra persona, podemos crear una propiedad en ese objetpo que no afecte el funcionamiento de ese obheto:

// para klo anterior se utiliza Symbol();

let user = {
    name:"Marcus"
};

let id6= Symbol("id");// se crea un identificador unico



user[id6]=1;// se utiliza el identificado creado para crear una propiedad en el ubjeto user.

console.log(user[id6]);// con esto podemos acceder a la propiedad 



//Ademas imaginemos que otra paersona en otra parte del codigo quiere crear ptra propieda id6 en el objeto para los fines que estime, puede hacerlo de la siguiente manera:


let id7= Symbol("id");


user[id7]=2;
console.log(user);

//en este caso no pudimos crear con la misma variable debido que estamos en el mismo script pero desde potro cgido el dev puede crear la variable con el mismo nombre y darle la misma descripcion a symbol y esto funcionaria.


/// pero si utilizamos un string para el mismo proposito esto si generaria problemas, veamoslo con un ejemplo:




let user1= {name:"Marcos Manurl Bru Diaz"};

// nosotros agregamos un screipt en nuestro codigfo
user1.ids=1;

// otro dev agrega otra propieda con la misma clave 
user1.ids=2;

console.log(user1)

// wow se sobrescribio el valor del primer codigo.


/* Symbols en objetos literales */

//Si queremos crear un symbol directamente en el objeto literal tenemos que utilizar [], veamos:


let id8 = Symbol("id");

let user2={
    name:"Marcus",
    [id8]: 1
};

console.log(user2);

// se hace de esta manera por que queremos que el valor de la clave id8 sea la calve , mas no un string.("id8").



/* Los Symbols son omitidos en for…in */

//las claves de Symbol no se leen dentro de los ciclos for..in.

//por ejemplo:


let id9= Symbol("id");


let user3={
    name:"Bru Dia",
    age:30,
    [id9]: 1
};


for(let a in user3){
    console.log(a);
}

// la salida del for.. in seria solo name y age.

// para acceder a la propiedad symbol tendria que ser de la siguinte manera:

console.log("Direct : " + user3[id9]);


// tambien Object.keys(user3) ingera las propieaddes con symbol

// Object.assign copia todo el objeto asi como tambien los symbol:


let clone = Object.assign({},user3);

console.log(clone);// copia exacta de user3 con las propiedades symbol.



/* Symbols Globales */

// Como hemos visto, todos los symbol son distintos aun tengan las los miamos nombres(descripciones). Pero algunas veces necesitamos que symbols con el mismo nombre sean los mismos con la misma entidad.

// Para lograr esto, existe un global symbol registry  Ahi podemos crear symbol y accederlos despuues, lo cual nos garantoza que cada vez que se acceda  a la clave con el mismo nombre esta devuelve el mismo symbol.

//Para crear u accesar a un symbol en el registro global se hace con : symbol.for(key).


//esta llamadda lo que hace es que accede al registrio global y si existe una propieda con el mismo key la devuelve, pero si no existe la crea. y lo almacean en el registro con el key suministrado.

//por ejemplo:

// cllamamos la symbol con for, como no hay una propedad en el registro global con la descripcion "id", entoces la crea en el registro y la devuelve en id10. dandole un identificador
let id10 = Symbol.for("id");

// aqui como ya existe la propieda id, entones devuelve el valor guardado en el registro global con el identificador dado cuando se cro
let againId10 = Symbol.for("id");

console.log(id10 == againId10);// true , debido que es el mismo identificador.




/* Symbol.keyFor */

//Esta  metodo de simbol devuelve la descripcion de un symbol.for(key ) guardado en el registro global.  ej:

let sym= Symbol.for("nombre");
let sym2= Symbol.for("id");

console.log(Symbol.keyFor(sym)); // devuelve nombre
console.log(Symbol.keyFor(sym2)); //devuelve id.

// Symbol.keyFor, internamente busca los registros guardados en global, creamos con Symbol.for(key), pero si un symbol no fue creeado en el registro global (symbol()), entonces Symbol.keyFor  no podera acceder a el y devolvena undefined.


// dicho esto todao symbol tiene una propieda llamada description.


//ej:

let globalSymbol = Symbol.for("Nombre");
let localSymbol = Symbol("id");


console.log(Symbol.keyFor(globalSymbol));//output Nombre
console.log(Symbol.keyFor(localSymbol));// output undefined

//para accceder a la decripcion de un symbol que no este en el registro global seria con descreiption

console.log(localSymbol.description);


