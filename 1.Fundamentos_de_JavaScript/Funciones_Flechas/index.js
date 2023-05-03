/* Funciones Flecha, lo básico */


// Hay una sintaxis de funciones simplre y concisa para crearlas, que a peuden llegar a ser mejor que las expresiones de funciones.

// Estamos hablando de las funciones flechas, se ven asi:

//sintaxis
//let func= (arg1,arg2,...,argN) => expression;

// aqui la funcion recibe argumentos dentro de los parentecis y ejecuta la expresion al lado derecho de => y devuelve su resultado.

// en otras palabras es la version corta de la fuchion de expresion siguiente:

/* let func1 = function(arg1,arg2,...,argN){
    return expression;
} */

//Vemos un ejemplo concreto:

let sum = (a,b)=> a+b;

console.log(sum(1,2));


// si solo tenemos un argumento, podemos omitir los parentecis, por ejempo:

let multi = n => n*2;

console.log(multi(2));

// y si no hay argumentos los parentecis van vacios, pero siempre tienen  que estar, ejemplo:

let sayHi= ()=> alert("Hola");

sayHi();


// las funciones de flechas se pueden utilizar de forma simnilar que las expresiones de fjunciones.

// como por ejemplo crear funcines de forma dinamica 

let age=+prompt('Que edad tienes',18);

let welcome = (age<18) 
    ?  () => console.log('Hola!')
    :  () => console.log('Saludos!');

welcome();

//las funciones flechas, son muy convenientes para acciones simples de una línea.



/* Funciones de flecha multilínea */

//A veces necesitamos una funcion mas compleja que las anyteriores, unas que tengas varias expereiones y lienas de codigo, en ese caso funciona igual que las anteriorems pero debemos encerrar el codigo entre llaves. Y utilziando las llaves es nevcesarui utilizar la directiva return. para devolver el valor, como esto:

let sum1= (a,b)=>{
    let result = a+b;
    return result;
};

console.log(sum1(2,5));


/**TAREAS!! */

/* Reescribe con funciones de flecha
Reemplace las expresiones de función con funciones de flecha en el código a continuación:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);


 */


let ask = ()=>{
    let question = confirm("Do you Agre?");

    (question) ? alert('You agreed') : alert("You canceled the execution");
};

ask();


function ask1(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask1("Do you Agre another?",
    ()=>{alert("You agreed another."); },
    ()=>{alert("You canceled the execution another.");}
)



