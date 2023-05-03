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
console.log(sumBinarioObjetos);// entonces aqui deja en default el tipo de datos de cada argumento y se concadenarian seria entonces: NaN[object Object].

// lo anterior tamnbien pasa con la compareacion de igualdad ==


// Una anotacion muy importante, por que no pasa esto mismo con los operadores mayor o menos que (< >), estos utilzian la sugerencia "Number" mas no "default", esto es por razones hisytoricas.



/* Para realizar la conversión, JavaScript intenta buscar y llamar a tres métodos del objeto: */



//1. Busca y llama, si el metodo existe, a obj[Symbol.toPrimitive](hints): El metodo con la clave simbolica Symbol.toPrimitive(sumbolo del sistema).

//2. Si no lo encuentra y "hints" es "strings":
    //- intenta llamar a obj.toString() y obj.valueOf(), lo que exista.

//3. si no lo encuentra y "hinst" es "number" o "default":
    //- intebta llamar obj.valueOf() y obj.toString(), lo que exista.





/* Symbol.toPrimitive */




//Empecemos por el primer metodo. Hay un simbolo incorporado llamado. Symbol.toPrimitive que debe utilizarce para nombrar el metodo de conversion asi:

/* 
obj[Symbol.toPrimitive]= function(){
    // aqu va el codigo quie convertira el objeto a un valor primitivo.
    // debe devolover unb valor primitivo.
    // hint = "sugerencia", uno de: "string","number", "default"

}

 */


//Si el metodo Symbol.toPrimitive existe, es usado para todos los hints y no seran necesarios mas metodos.


//Vamos implentar el metodo [Symbol.toPrimitive] dentro de un objeto user:

let user={
    name:"Marcus",
    modey:1000,
    [Symbol.toPrimitive](hint){
        console.log(`Sugerencia: ${hint}`);
        return hint == "string" ? `name: ${this.name}`: this.modey;
    }
};




console.log(user[user]=1)// bueno miremos que pasa, aler convierte el objeto a un string, entonces el metodo [Symbol.toPrimitive](hint) sabe que el hindt es un string y returnara name:"Marcus"
console.log(+user);// aqui como se hace una conversion a numerico con +user, entonces el hint sera un numbes y el metodo [Symbol.toPrimitive](hint)  debolbera  modey:1000,c
console.log(user+500);// aqui como el hint se converte a defaul por utukuzar + binario el cual utiuliza el hint default, entonces el metodo [Symbol.toPrimitive] devuelve modey:1000, y se le suma 500


/* toString/valueOf*/

// Si no existe el metodo Symbol.toPrimitive entoncesd javaScript trata de encontrar los metodos toString() y valueOf.

//* - Para una suferencia "sting": trata de llamar a toString primero; pero si no existe, o si devuelve un objeto en lugar de un valor primitivo, llama a valueOf(asi, toString() tiene prioridad en conversion string).

//* - Para otras sugerencias: trata de llamar a valueOf primet; y si no existe, o si devuelve un objeto en lugar de un valor primitivo, llama a toString(asi, valurOf tiene prioridad para matematicas)


//Estos metodos toString y valueOf, debe devolver un valor primitivo. Si por algun motivo devuelve un objeto, entonces se ignora.

//de forma predeterminada,un objeto tiene los siguientes metodos  toString() y valueOf:

//* El metodo toString devuelve un string "[object Object]" .
//* El metodo valueOf devuelve el objeto en si.

//Vemos una demostracion:


let user1 ={name:"Marcus Bru"};


console.log(user1.toString());// develve el primitivo strig
console.log(user1.valueOf()== user1);  // outut: true debido que valueOf devuelve el objeto en si.


// vamos impplementar estos dos metodos toString() y valueOf():


let user2={
    name:'Marcus Bru Diaz',
    money: 1000,

    toString : function(){
        return `name : ${this.name}`;
    },
    valueOf : function(){
        return this.money;
    }
};

alert(user);
alert(+user);
alert(user + 500);

//Podemos querer que todas las conversiones de un objeto sean string, para eso, podemos  implepmentar solo el metodo toString():


let user3 = {
    name: "Marcus",
    money:1000,
    toString(){
        return this.name;
    }
};

alert(user3); // Marcus
console.log(+user3); // Nan
console.log(user3+500);//Marcus500 , debido que user3 devuelve un string "Marcus" + 500: esto se concadena "Marcos500"


/* Más conversiones */

// El operador de multiplicacion * convierte operandos en numeros.

//Si pasamos un objeto como argumento, entonces suceden dos etapas en el computo:

//1. El obeto se converte a u valor primitivo 
//2. Si es necesario el valor orimitivo resultante tambien se convierte.

//Ejemplo:


let obj1={

    toString(){
        return "4";
    }

};

alert(obj1*4);// aqui primero el objeto se convierte a primitivo devolviendo "4" , pero en el segundo paso el "4" se convierte a numero 4 y se multiplica con 4 : 4*4=16

// igual pasa con + binbario concatenara los strings en la misma situacion 


let obj2 ={

    toString(){
        return "2";
    }
};



console.log(obj2+ "2");  // 22 se concadena 2 con 2 


