/* Encadenamiento opcional '?.' */


//El encadenamiento opcional ?.   es una forma a prueba de errores a para acceder a las propiedades anidadas de los objetos, incluso si no existe una propiedad intermedia.

/* El problema de la propiedad que no existe */

//Miremos el caso con un ejemplo:

//Digamos que tenemos un objeto user que contiene informacion de los usuarios.
//La mayoria de de  nuestros usuarios tienen  la direccion en la proridad user.addres:

let user ={
    addres:"Calle 16 # 59-70 ",
};
console.log(user.addres);

// con la calle en user.addres.street:

let user1={
    addres:{
        street:"16"
    },
};

console.log(user1.addres.street);


// pero com bien se sabe algunos usuarios no la proporcionan la direccion seria entonces algo asi:

let user2={};
//console.log(user2.addres.street);// aqui daria un error por que no exite tal propiedades.,

// asi funciona javaScript, cuaundo intentamos acceder a user2.addres  y como no tiene addres devuelve undefined, y cunado se accede a street esto datia un error.

// en estos casos pererimos que nos devuelva undefined en lugar de un error (dando a entender "sin calle");

// en otro ejemplo, ccuando seleccionamos un elemento del DOM usando el metodo especial document.querySelector ('.element'), de que devuelve null si el elementp no existe.

//ej:


//let html = document.querySelector('.element').innerHTML;// esto generaria un error, por que es coo si estuvieramos accediendo a null.innerHTML, debido que el elemento no existe.

// entonvces, en algunos de los casos prefeririamos que html=null que obtener un error.

// pero como podriamos solucionar los dos casos antes descritos, veamos soluciones son el operados ?. (encadenamiento opcional).

//Una solucion seria con el operados ternario:

let user3={};
              //undefined = false            // undefined
console.log(  user3.addres ? user3.addres.street : undefined);


//aqui como user3.addres se conciernew a boolenado false, entonces se cumple la ultima condicion devolviendo undefined.

// esto funcionaria pero es poco elegante,debido que se repite user3.addres dos veces en el codigo.

// tamnien podiamos hacer con el caso del elemento, miremos:


let html= document.querySelector('.element') ? document.querySelector('.element').innerHTML : undefined;
console.log(html)

// aqui como no existe el elemento devuelve undefined.


// tamnbien podemos hacerlo con el operadmos AND &&  el cual devuelve el valor del primer valor false encontrado, o si todos son verdaderos devuelve el ultimo verdadero.



let user4={
    addres:{
        street:{
            name: "Calle san Juan"
        }
    }
};

            //undefined = false
console.log(user4.addres && user4.addres.street && user4.addres.street.name);

// esto se ve mejor, pero todavia se repiten las propiedades en las validades.

// para solucionar esto se incluyo en el lenguaje el encadenamiento opcional ?.


/* Encadenamiento opcional */


// EL encadenamiento opcional ?. detiene la evaluacion y devuelve undefined si el valor antes de ?. es undefined o null.

//Diremos que algo existe cuando algo no es undefined o null.

//En otras palatbas:

//value?.prop  , funciona como value.prop su existiera value.
//de otro lado si value es undefined o null el resultado seria undefined.

//enronces veamos la forma segura de acceder user4.addres.street  usando ?.

let user5={}
console.log(user5?.addres?.street);

//aquio devuelve undefined roda vez que se devtiene un addres devido que es null y devuelove undefined.


let html1= document.querySelector('.element')?.innerHTML;
console.log(html1)

// aui devuelve undefined toda vez que el elemennto no exite y el null asi que devuelve undefined deteniendo el resto de la sentencia.


//leer la direccion con user?.address funciona incluso si user no existe:

let user6=null;

console.log(user6?.addres.name);// devuelve undefined, debido que se encuentra con user6=null deteniendola ejecucion y devolviendo undefined.

// no abusar de la utilizacion de ?. solo donde westa bien que algo no exista.

//Por ejemplo, si de acuerdo a la logica de nuestro codigo, el user debe existir  pero address, es opcional, entonces deberiamos escribir user.address?.name y no user?.address?.name.
// de esta forma sabriamos si user no esta definido debnid que genera un error y lo estariamos solucionando.

// muy importante si no hay una variable user declarada, enrtoncs user?.anything , esto provocara un error:

//console.log(user7?.algo);// esto generaea un error debuido que user7 no esta definido.




/* short-circuiting(cortocircuito.) */


// COmo ya dijimos ?. detiene inmediatamente la evaluacion si la parte de la izquierda no exite.

//Entonces, si a la derecha de ?. hay una funcion u operaciones adicionales estas no se ejecutaran por ejemplo:

let user8=null;
let x=0;


user8?.sayHi(x++);

console.log(x);


// lo que pasa aqui  no se ejecuta sayHi debido que ?. devuelve undefined user8.
//el console.log(x) muestra el valor de x sin el incremento. osea 0



/* Otros casos: ?.(), ?.[] */

//El operadmos ?. tambien funciona con funciones y coirchetes.

//Por ejemplo ?.() se usa para llar a ujna funcion aque puede no existir.

//en el siguiente codigo alguos de nuestros usuarios tienen el metodo admin y otros no.

let userAdmin={
    admin(){
        console.log("i am admin");
    }
};

let userGuest={};

userAdmin.admin?.();// i am admin,// aqui primera utilizamos el .admin para acceder al valor de la propiedad, aqui asunmimos que el objeto user existe y es seguro utilizarlo. Entonces ?. compueba a la izquierda si la funcion admin existe y si existe la ejecuta.
console.log(userGuest.admin?.()); // undefined  // aqui com no existe admin no se ejecuta y se detiene sin errores


// la sintaxis tambien funciona si queremos utilizar corchetes [] para acceder a propiedades de un objeto en lugar de . ejemplo:

let key = "firstName";

let user9={
    firstName:'Marcos',
};

let user10=null;

console.log(user9?.[key]);


//Tamnien podemos utilizarlo con detele

delete user9?.firstName

console.log(user9)
