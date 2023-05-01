/* Conversión de objeto a valor primitivo */


// En este apartado revisaremos como convertimos un objeto a un tipo de datos primitivos.


/* Reglas de conversion: */


// En el capituto conversion de tipos, ya hemos visto las reglas para la CONVERSION DE VALORES PRIMITIVOS A : string, numericos, booleanos.

//Ahora en este capoyuto revisaremos como convertiremos objetos a primitivos.

//1. No hay conversion a booleano. Todos los objetos son "true". Solo se puede conversion a tipo numericos y strings.

//2. La conversion de un objeto a numerico, ocurre cuando restamos objetos o aplicamos funciones matematicas.


//3. La conversion de un objeto a String, ocurre cuando imprimimos un objeto como ewn alert(obj) y en contextos similares.


// Tambien podemos implementar conversion de objetos  a numericos O STRINGS utilizando metodos de objeto especiales.


//Vemos algunos detalles tecnicos de con relacion a la conbversion de objetos a primitivos.





/* Hints (sugerencias) */

//¿Como decide javaScript que conversion aplicar?


//Hay tres variantes de conversion de tipos que ocurren en diferentes situaciones. estas variantes son llamadas "hints"

// Primera hints :(strings):


//Para conversion de objetos a string, hace la conversion cuando una operacion espera un strings, como por ejemplo alert y tambien coo propieeda de un objeto, vemos esto tan interesante:

let obj={
    name:'Marcus',
    age:32
};


alert(obj); //output: [object Object] , converte el objeto en string.

obj[obj]=123;  // aqui como las claves de los objetos se convierten a string, contonces el objeto se convirtio en string siendo la propiedad [object Object] =123

console.log(obj);


// Segundo hints :(number):

// Para la conversion de un objeto a number, se piuede hacer como cuando hacemos operaciones matematicas( NO funciona con suma ), vemos :

let num= Number(obj);
console.log(num);  // output: seria el numero NaN.



// matemáticas (excepto + binario) osera la suma:

let date1= Date();
let date2= Date();
console.log(date1)




let n = +obj;  // NaN
let delta = date1 - date2;
console.log(delta);  // output  NaN



//Tambien fucniona con la comparacion mayor y menos que :

setTimeout(()=>{
    date2 =Date();
    console.log(date2)
    console.log(date1<date2);  // aqui se converte a 0 y 1  y como date2 es mayor que date 1 en esta liena entoces devuelve true
}

,1000);

// la mayoria de funciones matematicas tambien incluyen la conversion de objetos a numerica.




// Tercero hints :(default):

// Esto ocurre cuando el operador no sabe que tipo esperar.

//Por ejemplo, el operador binario  + puede funcionar con strings (los concadena) o con numeros(los suma). Entonces, si el + binario obtiene un objeto como argumetno utiliza la sugerencia "default" para concertirlo. quire decir que un  objeto puede ser un string o un unmero si se ubiera echo alfuna conversion , entonces el operador biinario + para no liarse, mejor no hace ninguna conversiones de las anteriores y la deja como default.

//ej:

let sumBinarioObjetos= delta+ obj;
console.log(sumBinarioObjetos);





