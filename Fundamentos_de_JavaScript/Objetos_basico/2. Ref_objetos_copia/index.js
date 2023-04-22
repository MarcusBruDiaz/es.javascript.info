// una diferencia fundamental entre tipos de datos objetos y primitivos, es que los objetos son almacenados y copiados "Por referencia".
/// en cambio los primitivos son asignados y copiados "COmo un valor completo" (valo textual).


//vamos a mirarlo por debajo, como funciona la asignacio  y la copia de tipos de datos primitivos, en este caso string:

let message ="Hola";
let phrase = message;

// en este caso tenemos dos variabvles independientes, el camnio de una no afecta la otra.


// Pero los objetos no funcionan de esta manera.

// Una variable almacena almancesa no el objeto mismo, si no una Direccion en Memoria, en otras palabras la referencia al objeto.

//Vemos un ejemplo de estasvariables que referencian un objeto literal:

let user ={
    name:'Marcus'
};


// aqui el objeto {name:'Marcus'} se almacena en un lugar en memoria, mientras que la variable user, hace referencia a esa direccion de memoria.

//podemos pensar que la variable objeto "user", es una hoja de papel donde tiene escribo la ubicacion donde esta el objeto.

// cunado ejecutamos una consulta de alguna propieda de un objeto ej: user.name, e motor de javaScript busca aquella direcccion y ejecuta la operacion en el objeto mismo.

// Ya sabiendo lo anterior, cuando una variable de objeto es copiada, se copia solo la referencia al objeto. No quiere decir que el objeto sea duplicado. Por ejemplo:


let user1={
    name:'Marcus'
};

let admin = user1;// aqui se hace una copia de la referencia de ubicacion en memoria del objeto. la referencia se asigna a admin.

// ya en este punto tenemos dos variables que hacen referencia al mismo objto  user1 y admin. cualquier cambia que se haga en alguna de ellas se vera reflejadaen la otra.

// podemos utilizar cualquiera de ella para modificar el objeto, veamos un ejemplo:


admin.name = "Manuel";

console.log(user1.name);// Manuel, debido que admin.name = "Manuel" modifico el nombre.



/* Comparación por referencia */

//Dos objetos son iguales solamente si ellos son el mismo objeto.

//Por ejmplo, a y b tiene referencia al mismo objeto, por tanto son iguales


let user2={
    name:'Marcos',
};

let user3={
    name:'Marcos',
};

console.log(user2==user3); // false

console.log(user2===user3); // ambos son false, aunque tiene las mismas propiedades, son objetos con diferentes referencias.


// en cambio se hacemos que un objeto tenga la misma referencia que otro, al momento de preguntar si son iguales la salida seria true, vamos:

let a={};
let b=a;

console.log(a==b);// true
console.log(a===b);// ambos son true por que hacen referencia al mismo objeto. misma direccion de memoria.

// para comparaiones como obj1>obj2, o comparaciones con datos primitivos como obj1==5, los objetos son convertidos a primitivos, pero esto es muy raro que suceda.



//Nota:


//una particularidad de los objetos es que como son almacenadpos como referencia, no importa si la variable es delarada con CONST , el objeto puede ser modificado, veamos:

const obj3 = {
    name:"MarcosBru"
};

obj3.name= "ManuelBruDiaz";//esta mnodificacion se realiza con exito.

console.log(obj3);

// solo daria un error si intentamos cambiar el valor de obj3 COMO UN TODO por ejempo obj3 = 23213; u otro valor.



/* Clonación y mezcla, Object.assign
 */


//pero si en realidad quiero clonar un objeto y sea independiente de otras referencias. ¿COMo puede hacerlo?

//1. opcion, hacerlko de manera primitiva iterando el objeto que cntiene los datos y crear propieades con esos datos en un objeto vacio. Ejemplo:


let user4 = {
    name: "John",
    age: 30
};


let user5={};

for(let key in user4){
    user5[key]= user4[key];
}

console.log(user5)
console.log(user4)
console.log(user5==user4);// false, son referencia de moria a objeto distintas.

// si cambio algiuna propiedad de algun objetro no se modifica el otro, veamos:


user5.name="Marcos";
console.log(user5);//Marcos
console.log(user4);// John

// pero tambien para clonar objeto podemos hacerlo con el metodo de lka clase Object el metodo assign, Object.assing.

//la sintaxis es:

//Object.assign(dest,...source);

//1. el prmer argumento es el objeto destino 
//2. los argumentos que siguen es una lista de objetos origen.

// esto copia todas las propiedades de los objetos origen en el orgeto destino y lo devuelve como resultado.


//Por ejemplo, tenemos un objeto user, al cual le vamos a dar algunos permisos que estan en otros objetos:

let user6={name:"ManuelBru"};

let permissions1 = {canView:true};
let permissions2= {canEdit:true};

Object.assign(user6,permissions1,permissions2);

console.log(user6);

// si la propieda a copiar ya exite se sobrescribe:


Object.assign(user6,{name:'Marcos'});//  aqui se sobrescribe name:"ManuelBru" por name:'Marcos'

console.log(user6);//salida:{name: 'Marcos', canView: true, canEdit: true}



//Tambien podemos user Object.assing para hacer una clonacion simple:


let user7 = {
    name: "John",
    age: 30
};


let user8 = Object.assign({},user7);  //Aqui lo que sucede es que copia todas propiedades de user7 y las pone en un pbjeto vacio y lo devuelve, guardandolo el resultado en user8

console.log(user8);

// Tambien hay otras formas de clonar que es con el spread operator. user8={...user7}


/* Clonación anidada */

// hasta ahora hemos tratado con objetos que sus propiedades son primitivas, pero tambien podemos encontratnos con objetos que tiewne propiedades las cuales hacen referencia a objetos.como esto:

let user9 ={
    name:'MarcusBru',
    sizes:{
        height:182,
        width:50
    }
};

console.log(user9.sizes.height);


// si hacemos lo siguiente user8.sizes y user9,sizes, compertiran la misma referencia al objeto sizes y cualquier cambio que se hagan en algna de las dos se vera reflejado en la otra.
user8.sizes = user9.sizes;
console.log(user8);


// por ejemplo:

let user10 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
};

let clone= Object.assign({},user10);

console.log(user10.sizes==clone.sizes);// true por que sizes comparte la misma referencia.

//user10 y clone comparten sizez.

clone.sizes.height = 10;// se cambia en clone.sizes.height y user10.sizes.height

console.log(user10.sizes.height); 

// Para que no ocurra estop debemps hacver algo para que user10 y clone sean objetos completamente separados.Para esto debemos hacer iun luqye que recorra el objeto[key] y si encuentra que hay un objeto, que replique su estructura tambien.esto es denominado "Clonacion profunda." o "Clonacion estructurada.", pero para simplficar el trabajo hay un metoro que impoementa la clonacion profunciona es : structuredClone


/* structuredClone */

// la llamada a structuredClone(obj), clona obj con todas sus propiedades anidadas.

//Podemos usarlo en nuestro ejemplo:



let user11 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
};

let clone1=structuredClone(user11);

clone1.sizes.height=10;  // aqui solo se cambia en clone

console.log(clone1.sizes.height);
console.log(user11.sizes.height);
console.log(user11.sizes==clone1.sizes);// esto es false debido que se hizo una clonacion profuncda y tiene referencias distintas.

//El método structuredClone puede clonar la mayoría de los tipos de datos, como objetos, arrays, valores primitivos.

//También soporta referencias circulares, cuando una propiedad de objeto referencia el objeto mismo (directamente o por una cadena de referencias).

//Por ejemplo:


//esto es una referencia circular
let user12= {};
user12.me= user12;

let clone2= structuredClone(user12);
console.log(clone2.me===clone2);

//Como puedes ver, clone.me hace referencia a clone, no a user! Así que la referencia circular fue clonada correctamente también.



/* Pero hay casos en que structuredClone falla.

Por ejemplo, cuando un objeto tienen una propiedad “function”: */

// error
structuredClone({f: function() {}});

//Las propiedades de función no están soportadas.

/* Para manejar estos casos complejos podemos necesitar una combinación de métodos de clonación, escribir código personalizado o, para no reinventar la rueda, tomar una implementación existente, por ejemplo _.cloneDeep(obj) de la librería JavaScript lodash. */