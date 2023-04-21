/* Objetos */

// los objetos es un tipo de dato, pero no primitivo.

// Los objetos son utilizados para almacenar colecciones de datos, de diferentes tipos de datos primitivos puede verse asi!! o es mi cosmovision.

// Las colecciones de datos se almacenan utilizando un copceto clave:valor

// Podemos crear un objeto utilizadno {}, y dento una lista de propiedade, estas propiedades es la convinaciond e cada clave:valor, donde clave: es un string , y valor es cualquier valor.

//tambien podemos crear un objeto instanciando la clase objeto asi let obj = new Objet();

//creemos dos opjetos vacios de las dos formas que tenemos para crear un objetro tipo objet:

let obj= new Object();
let obj1= {};

console.log(obj,obj1);


// crear objero solo con {} se le denomina  "Objeto literal"



/* Literales y propiedades */


//Podemos poner inmediatamente algunas propiedades dentro de {...} como pares “clave:valor”:

let user={
    name:"Marcus",
    age: 32
};

// las propiedades, se pueden eliminar y leer y modificar en cualquier momento, asi como tambien agregar. para leer una propiedad podemos hacerlo con .  asi:


console.log(user.name);

// para eliminar una propiedad lo hacenmos con la directiva delete, de la siguiente manera:

delete user.age;  // aqui eliminamos la edad

console.log(user);// la salida seria el objero sin la propieda con clave age.

// Tambien podriamos nestablecer claves de propiedades que esten compuestas por mas de una palabra, pero en esos casos la calve debe ponerse entre comillas ""; ejemplo:


let user1={
    name:"Marcus",
    age: 32,
    "likes birds": true,
};

console.log(user1);

//la ultima propiedad de a lista puede terminar en coma , 


/* Corchetes */

// la notacion de punto no funciona para acceder a propiedades con claves de mas de una palabra, por ejemplo:

//console.log(user1.like birds);// esto generaria un error.

//por que el erroe?

//javaScript no enrtiende esa notacion, debido que el busca la clave user1.like y nos da un error de sintaxos cunado aparace birds.

// para acceder con punto a una clave de una propiedad, esta ultima no puede ser con palabras separadas, no comiende por digitos, y no incluya carasteres especiales.($, _ si se permiten)

// Para que esto puede funcionan y acceder a las claves de propiedades que sean de varias palabras o tengas digitos, o tengan carasteres especiales, se puiede acceder con la notacion de corchetes, de la siguiente manera:

console.log(user1["likes birds"]);

// con los corchetes tambien nos da una forma de obetener la clave de la propiedad como resultado de una expresion como por ejemplo una variable, en lugar de una cadena literal, por ejemplo:


let key = "likes birds";

console.log(user1[key]);// salida: true

//podemos vernos tentados a acceder a la propiedad con notacion de punto, pero NO LO HAGAS!! eso daria un error.

//aqui la variavle key puede calcularse en tiempo de ejecucion o depender de la entrada de un usuario, la cual utilizaremos para acceder a una propiedad, por ejemplo:


let user2={
    name:"Marcus",
    age: 32,
    "likes birds": true,
};


let key1 = prompt('¿que te gustaria saber acerca del usuario?', 'name');

alert(user2[key1]);


/* Propiedades calculadas */


//podemos utilizar corchetes en un obteto literal para la creacion de un objeto. Esto se denomina propieda calculada. Por ejemplo:


let fruit = prompt("¿Que fruta comprar?", "Manzana");

let bag ={
    [fruit]: 5,
}

console.log(bag[fruit]);

//Podemos usar expresiones más complejas dentro de los corchetes:


let fruit1="Apple";

let bag1={
    [fruit1 + "Computer"] : 5,
}

console.log(bag1.appleComputers);

//entonces cuando utilizar nptaciopn de puntos o corchetes, puntos: cuando los nombres son cortos y facil de recordar, y corchetes para casos mas complejos 


/* Atajo para valores de propiedad */




// muchas veces en codigfo real utilizamos nombre de variabvles para nobrar las propiedades de los objetos. ej:

function makeUser(name,age){

    return {
        name:name,
        age:age,
    };
}


let user3 = makeUser('Marcus',30);

console.log(user3.name);

// aqui estamos en la funcion makeUser devolviendo un objeto que tiene unas propiedades nombradas, el nombre de esas propbiene de las variables, esto es un casio muy comun.

// pero podemos utilziar un atajo, en lugar de poner por ejemplo name:name, podemos hacerlo de la siguinte manera:

function makeUser1(name,age){
    return{
        name,
        age,
    };
}



let user4= makeUser1('Manuel',32);

console.log(user4.age);

//podemos combianr el atajo con la asigancion de noombres por medio de las variavles ej:

function makeUser2(name,age){
    return{
        name,
        age:age,
    };
}


let user5= makeUser2('Bru',32);
console.log(user5.name, user5.age);





/* Limitaciones de nombres de propiedad */

//Sabemos que una variable no puede tener como nombre alguna palabra reservada por el lenguaje de programacion, como  por ejemplo (for,let, retur).

// pero para las propiedades de un objeto no existe esta limitacion, veamos:

let obj2= {
    for:2,
    let:1,
    return :3,
};

console.log(obj2.for + obj2.let + obj2.return);

// en resumen no hay limitacione en los nombnres de las propiedades.

// Otros tipos se convierten automaticamente en cadenas.

// por ejemplo un numero 0 se convierte en "0" cunadao se utilzia 0 como nombre de una propiedad.

//ejemplo:


let obj3={
    0:"test",
}

console.log(obj3[0]);// test
console.log(obj3["0"]); // test



/* La prueba de propiedad existente, el operador “in” */

// En javaScript se puede acceer a cualquier propiedad de un objeto, aun la propiedad no exista. no habra un error

// solo si no existe devuelve undefined.

//ejempĺo:

let user6={};

console.log(user6.nombre === undefined);// true, significa que no existe.


// para comproprar si una propieda existe tambien esta el operados especial "in".

//La sintaxis es:

//"key" in object

//por ejemplo:

let user7={name:'Marcus', age:32};

console.log("Jack" in user7);// false, por que la propiedad con clave Jack no existe en el objeto user7;
console.log("name" in user7); // true por que la propiedad con clave name si existe en el objeto user7;

/* Pero… ¿Por qué existe el operador in? ¿No es suficiente comparar con undefined?

La mayoría de las veces las comparaciones con undefined funcionan bien. Pero hay un caso especial donde esto falla y aún así "in" funciona correctamente.


 */

//Es cuando existe una propiedad de objeto, pero almacena undefined:



let obj4 = {
    test: undefined
};

console.log(user.test === undefined); 

alert( obj.test ); // es undefined, entonces... ¿Quiere decir realmente existe tal propiedad?
  
alert( "test" in obj ); //es true, ¡La propiedad sí existe!


/* Situaciones como esta suceden raramente ya que undefined no debe ser explícitamente asignado. Comúnmente usamos null para valores “desconocidos” o “vacíos”. Por lo que el operador in es un invitado exótico en nuestro código. */



/* El bucle "for..in" */


//Para recorres las claves de un objeto hay una forma muy recomendable for in , es completamente difrente al for(;;) de siembre.

//sintaxis for in:

/* for (key in obl){
    //se ejecuta el cuper para cada cclave de las propiedades del objeto.
} */

//Por ejemplo mostramos todas las propiedades de user:

let user8 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user8){
    console.log( key );
    console.log( user8[key] );
}

// nota: dentro del for in podemos declara variabvles como lo inicmos con let, esta variable puede tomar cualquier valor razonable.



/* Ordenado como un objeto */

// las propiedades con nombre de numeos enteros se ordenan, por demas se muestran como fueron creadas.

//Como ejemplo, consideremos un objeto con códigos telefónicos:

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
};

for(let code in codes){
    console.log(code);
}

// aquio el resultado del for ordena de forma desendente los nombre de las propiedades [1,41,44,49];

//El objeto puede usarse para sugerir al usuario una lista de opciones. Si estamos haciendo un sitio principalmente para el público alemán, probablemente queremos que 49 sea el primero.

/* ¿Propiedades de números enteros? ¿Qué es eso? */


/* El término “propiedad de números enteros” aquí significa que una cadena se puede convertir a y desde desde un entero sin ningún cambio.

Entonces, “49” es un nombre de propiedad entero, porque cuando este se transforma a un entero y viceversa continúa siendo el mismo. Pero “+49” y “1.2” no lo son:

*/

// por otro lado si laos nombres de las propiedades no son enteras se prdenan segun la forma en que se crearon. ej:

let user9={
    name:'Marcus',
    surname: 'Bru',
};

user9.age = 32;

for(let prop  in user9){
    console.log(prop);
}


/* 
Entonces, para solucionar el problema con los códigos telefónicos, podemos “hacer trampa” haciendo que los códigos no sean enteros. Agregar un signo más "+" antes de cada código será más que suficiente.

Justo así: */

let codes1 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA"
};
// asi los numeros no cunplirian la condicion que son lo mismo si estan en stringo o en entero.

for (let code in codes1){
    console.log(codes1[code]);
}




/**TAREAS */


/*
Hola, objeto
importancia: 5
Escribe el código, una línea para cada acción:

Crea un objeto user vacío.
Agrega la propiedad name con el valor John.
Agrega la propiedad surname con el valor Smith.
Cambia el valor de name a Pete.
Remueve la propiedad name del objeto.

*/


let user10={};
user10.name='Marcus';
user10.surname = 'Bru';

user10.name= 'Pete';

delete user10.name;

console.log(user10);


/* 
Verificar los vacíos
importancia: 5
Escribe la función isEmpty(obj) que devuelva el valor true si el objeto no tiene propiedades, en caso contrario false.

Debería funcionar así:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Hora de levantarse";

alert( isEmpty(schedule) ); // false


*/

function isEmpty(obj){
    
    for (let prop in obj){
        return false;
    }

    return true;
}

let obj5={}

console.log(isEmpty(obj5));



/* 
Suma de propiedades de un objeto

importancia: 5

Tenemos un objeto que almacena los salarios de nuestro equipo:


 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Marcus: 200
}


/* Escribe el código para sumar todos los salarios y almacenar el resultado en la variable sum. En el ejemplo de arriba nos debería dar 390. 

Si salaries está vacío entonces el resultado será 0.

*/

function sumar(salariesss){
    let sum=0;
    for(let salari in salariesss){
        sum+= salariesss[salari];
    }
    return sum;
}

console.log(sumar(salaries));



/* 
Multiplicar propiedades numéricas por 2
importancia: 3
Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2.

Por ejemplo:
*/

// Antes de la llamada
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};


function multiplyNumeric(obj){
    
    for(let key in obj ){
        if(typeof obj[key] == 'number') obj[key]*=2;
    }
   
}

multiplyNumeric(menu);

console.log(menu);


