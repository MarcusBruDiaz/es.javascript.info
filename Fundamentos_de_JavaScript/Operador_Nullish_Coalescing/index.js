// el operador "nullish coalescing"(fusión de null) se escribe con doble signo de cierre de interrogracion ??


//Como este trata a null y a undefined de forma similar, usaremos un término especial para este artículo. Diremos que una expresión es “definida” cuando no es null ni undefined. por ejemplo:

/**el resultado de a ?? b:
 *  si a esta "definida" sera a,
 *  si a no esta "definida" sera b.
 *  
 */


// en pocas palabras, seria que devuelve el primer arumuento si no es null o undefined, y dado el caso que sea null o undefines devolvera el segundo argumento.

//pdem,os pensar el operador nullish con la sintaxis de los opereadores de comperacion vistos en el capitulo anterior por ejemplo nulisg hace lo mismo que la siguiente liena:

let a;
let b;
let result = (a !== null && a !== undefined) ? a : b ;  //  la explocaciopn es la siguente si a es diferente de null y undefined, si esto es verdaderto devuelve a pero dado el caso que a sea igual a null y a undefined  devolvera b.

let user;


console.log(user)

console.log( user ?? 'Marcus');// esta liena devolveria Marcus, debido que user esta declarado masn no esta definido un valor a esa variable.


//También podemos usar una secuencia de ?? para seleccionar el primer valor que no sea null/undefined de una lista.


// ?? nulish  devolvera el primer valor que no sea null/ undefined ej:

/* Digamos que tenemos los datos de un usuario en las variables firstName, lastName y nickName. Todos ellos podrían ser indefinidos si el usuario decide no ingresar los valores correspondientes.

Queremos mostrar un nombre usando una de estas variables, o mostrar “anónimo” si todas ellas son null/undefined.
 */

let firstName= null;
let lastName = null;
let nickName;

console.log(firstName ?? lastName ?? nickName ?? 'Anonimo');



//Comparación con ||

//El operador or o || alguna de las dos como te guste, funciona de la misma manera que ?? nulish.
// por ejemplo del ultimo ejemplo de nulish, podemis remplazar ?? por || y seria el resultado igual veamos:

let firstName1= null;
let lastName1 = null;
let nickName1;

console.log(firstName1 || lastName1 || nickName1 || 'Anonimo');// si ves!! la salida es exactamente la misma que con nulish ??

// Pero como todo, debe haber una diferencia entre estos dos o su no para que fue creado el uno o el otro. en fin hay dos fiferencias notables que son:

//1. con nulish ?? este devuelve el primer valos distinto a null/undefines;
//2. mientras que or o || devuelve el primer valor verdadero.



//El || no distingue entre false, 0, un string vacío "", y null/undefined. Todos son lo mismo: valores “falsos”. Si cualquiera de ellos es el primer argumento de ||, obtendremos el segundo argumento como resultado.

//hagamos un ejemplo para ver las diferencias :

let heigth = 0;

console.log(`${heigth ?? 100}`  );// devuelve 0 debido que no es null ni undefined
console.log(heigth || 100); // devulve 100 debido que heigth es 0 lo quye se tradiuce a false. y or devuelve el primer valor verdadero siedo 100.


//height || 100 verifica si height es “falso”, y 0 lo es. - así el resultado de || es el segundo argumento, 100. height ?? 100 verifica si height es null/undefined, y no lo es. - así el resultado es height como está, que es 0.


//Precedencia:

//La precedencia del operador ?? es la misma de ||. Ambos son iguales a 3 en la Tabla MDN.

//esto singnifica que ambos oéradores ?? y || son evaluados antes que  = o ?, pero despuyes que + y * ;

//por lo anterior en el siguiente codigfo es necesario añadir parentecis:

let height =null;
let width = null;

let result1 = (height ?? 100) * (width ?? 50);  

console.log(result1);

// en el caso que no establescamos los parentecis el 100 se multiplicaria por width por ejemplo:

let result2 = height ?? 100 * width ?? 50; // que pasaria aqui  height ?? 0 ?? 50; como height es null devuelve el 0. pero por que 100 * width = 0, debido que width en null y al momneto de poner un operador de multiplicaion y multiplicarlo por un numero este se converte el 0 asi ps 100 *0 = 0
console.log(result2)



//Uso de ?? con && y ||:

// por motivos de seguridad javaScript no permite el uso de ?? junto con los operadores && y  ||, salvo que la presedencia se haya establecido con parentecis:

//El siguiente código desencadena un error de sintaxis:

//let x = 1 && 2 ?? 3; // esto genera un syntaxError.

//Usa paréntesis explícitos para solucionarlo:


let x1 = (1 && 2) ?? 3;// aqui evalua primero el parentecis y devuelve 2 la ultima, y cunado entra al operador nulish como el 2 no es null ni undefinen entonmces devuelve 2

console.log(x1);


