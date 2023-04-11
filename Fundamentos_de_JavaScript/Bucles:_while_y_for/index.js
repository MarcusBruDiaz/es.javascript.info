//Los Bucles son una forma de repetir el mismo código varias veces.



//El bucle “while”:

//sintanxis:

/* 
while(condicion){
 ..code
 llamado cuerpo de la funcion.
} 
*/

// el cuerpo de la funcion sera ejecutado mientras la condicion de la sentencia while sea true:


//Por ejemplo, el bucle debajo imprime i mientras se cumpla i < 3:

let i=0;
while(i<3){
    console.log(i);
    i++;
}

// cada ejecucion del cuepo del bluque se llama iteracion.

// cualquier expresion o variable puede ser pasado como condicion en el bucle, no solo las comprobraciones: el while evaluara y transformara la condicion en un boleano.

//Por ejemplo, una manera más corta de escribir while (i != 0) es while (i):

let f=3
while(f){  // aaa muy lindo como transforma el 3 en true y ejecuta el cuerpo de la funcion
    console.log(f);
    f--;  /// pero aqui hay algfo que impide que siempre sea 3, resta y cunado llega a 0, este es pasado al while y como 0 es = false ¿, el cuerpo de while no se ejecuta.
}

/* Las llaves no son requeridas para un cuerpo de una sola línea
Si el cuerpo del bucle tiene una sola sentencia, podemos omitir las llaves {…}: */



//El bucle “do…while”:


// la comprobracion de la condicion puede ser movida debajo del cuerpo del bucle usando la sintaxis do..while:vemos la sintaxis

/* do{

}while(condicion);  */ // aquio el wihle fue movido al final del cuperpo del bucle y al comienzo se coloco el do.

//entonces el bucle primero ejecuta lo prinmero el cuerpo de la funcion, y depdpues evalua la condicion y mientras esta condicion sea verdadera se ejecuta el cuerpo de la funcion una y otra vez.

//por ejemplo:
let g=0;
do{
    console.log(g); // aqui se ejecuta el cuperpode la funcion sin ninguna condicion
    g++  
}while(g<3); // para realizar una ejecucion del cuerpo de la funcion aqui si hay una condicion, si es verdadea se ejecuta otra vez y si no ps muere.

//Esta sintaxis solo debe ser usada cuando quieres que el cuerpo del bucle sea ejecutado al menos una vez sin importar que la condición sea verdadera. Usualmente, se prefiere la otra forma: while(…) {…}.



//El bucle “for":

//sintaxis:

/* 
for(begin;condition;step;){  // (comienzo, condición, paso)
    // cuerpo del bucle 
} 
*/

// veamos cada unas de las partes con un ejemplo:

for(let h= 0;h<3;h++){  // aqui va de 0 hasta 3 , pero  no lo incluye
    console.log(h);
}


//Vamos a examinar la declaración for parte por parte:

//1.Comienzo	let i = 0	Se ejecuta una vez al comienzo del bucle.
//2. condicion (h<3) comprobada antes de cada iteracion del bucle, si es falsa el bucle finaliza.
//3.cuerpo  console.log(h);  se ejecuta una y otra vezx mientras la condicion sea verdadera
//4. paso  h++  se ejecuta despues del curpo de cada iteracion.

//en nuestro ejemplod del bucle for la variable h es creada como uina variable en linea, dichas variables solo son visibles dentro del bucle.

for (let j =0; j<3;j++){
    console.log(j);
}

//alert(j);// aqui esto daria un erroer referencError debido que estamos intentadno acceder a una variable que vive solamente en el contexto del for.

//para solucionar esto y sea global la variable se debe definir en el scoṕe global ejempñlo:

let k=0;

for(k;k<3;k++){
    console.log(k)
}

alert(k);

//Omitiendo partes:

//podemos quitar el comienzo si no lo necesitamos por ejempl en el caso anterior quedaria asi:

let k1=0;

for(;k1<3;k1++){
    console.log(k1);
}


//También podemos eliminar la parte paso osea del inremento como asi :


let k2=0;

for(;k2<3;){
    console.log(k2++);  // aqui muestra el 0 primero por que esta el ++ despues quiere decir que primero lo utyiliza y lo muestra depsues lo incremente, y en la proxima iteracion lo muestra auimentado.
}

// al final se pueden quitar todas la partes del for pero darioa in bucle infinito. en todo caso los ; deben  estar siempre, si estos generaria un error de sintaxis.

//Rompiendo el bucle:

// normalmente para salir del bucle es dado que la parte de la condicion no se cunpla.

// pero podemos quere salir del bucle en algun momento especifico y en este caso forzariamos la salida con la directiva "breack".


//Por ejemplo, el bucle debajo le pide al usuario por una serie de números, “rompiéndolo” cuando un número no es ingresado:


let sum=0;

while(true){
    let value=  +prompt("Ingrese un numero ",0);

    if(!value) break;

    sum+=value
}

console.log(sum);

// al momento de detener el bucle con breack,se le pasa el control a la siguiente linea despues del bucle en este caso: console.log(sum);



//Continuar a la siguiente iteración:

// este directiva continue es mas ligera que el breack, lo que hace es que en vez de detgener por completo el bucle, lo uque hace es deneter  la iteracion actual y seguier con la siguiente.(esto si la condicion lo permite.)

//El bucle debajo usa continue para mostrar solo valores impares:

for(let i =0 ; i<10;i++){

    // dado el caso que la condicion sera falsa le pasa el control al console.log y si es verdadera sigue con la siguiente iteracion 
    if(i % 2 === 0) continue;
    console.log(i);

}



//Para los valores pares de i, la directiva continue deja de ejecutar el cuerpo y pasa el control a la siguiente iteración de for (con el siguiente número). Así que el alert solo es llamado para valores impares.


// la directiva continue ayuda a disminuir la anidacion de if 

//Un bucle que muestra valores impares podría verse así:

for (let i = 0; i < 10; i++) {

    if (i % 2) {
      console.log( i );
    }
  
}
//Pero como efecto secundario, esto crearía un nivel más de anidación (la llamada a alert dentro de las llaves). Si el código dentro de if posee varias líneas, eso podría reducir la legibilidad en general.

// las directivas breack y continue no pueden sen usuadas con los operadores ternarios, esto generaria un error de sintaxis por ejemplo esto no se puede hacer:;

//let message = (i>3) ? alert(i) : continue; //da error de sintaxis


//Etiquetas para break/continue:


//A veces necesitamos salirnos de multiples bucles anidados al miamo tiempo 

//Por ejemplo, en el código debajo usamos un bucle sobre i y j, solicitando las coordenadas (i,j) de (0,0) a (3,3):

/* for (let i=0;i<3;i++){

    for (let j=0;j<3;j++){
        let input = +prompt(`Valor de las coordenadas (${i},${j})`,'');

    }
}

alert('Listo'); */

//Necesitamos una manera de detener el proceso si el usuario cancela la entrada.

// poniendo un breack despues de input solo nos sacaria del bucle interno. esto no es suficiente debemos salirnos del bucle mayor tambien , entomces aparacen las etiquetas:

//una etiquetan es un indentificador con eun signo de dos puntos : antes del bucle:

//sintaxis
/* 
labelName: for (;;){

}
 */

//La declaración break <labelName> en el bucle debajo nos saca hacia la etiqueta: 

outer: for (let i=0;i<3;i++){

    for (let j=0;j<3;j++){
        let input = +prompt(`Valor de las coordenadas (${i},${j})`,'');
        //dado el caso que ingresen vacio o se cancelo la operacion entonmces se va a salir de los dos bucles.
        if(!input) break outer;

    }
}

alert('Listo');


// la la directiva breack pasandole la etiqueda outer mira hacie arriba que bucle tiene esa etiqueda y sale de los dos. asi es como el controil pasa ditrectamente al alert('LIsto').

//La directiva continue también puede usar usada con una etiqueta. En este caso, la ejecución del código salta a la siguiente iteración del bucle etiquetado.

/**TAREAS!! */


/* Último valor del bucle
importancia: 3
¿Cuál es el último valor mostrado en alerta por este código? ¿Por qué? */

let i1 = 3;

/* while (i1) {
  alert( i1-- );
} // L *///A RESPUESTA LA DI CORROECTA ES 1 EL ULTIMO VALOR, TODA VEZ QUE AL LLEGAR A 0 NO SE EJECUTA EL CUERPO DEL BUCLE DEBIDO QUE SE TRADUCE A FALSE.



/* 
¿Qué valores serán mostrados por el bucle while?
importancia: 4
Para cada iteración del bucle, escribe qué valor será impreso y luego compáralo con la solución.

Ambos bucles ¿alertan los mismos valores? */

//1.
let i2 = 0;
//while (++i2 < 5) alert( i2 );  // 1,2,3,4


//2.
let i3 = 0;
//while (i3++ < 5) alert( i3 ); // ,1,2,3,4  // EL PRIMER VALOR SIGUE DE i3 es 1 debido que utilizza peomro i3=0 , pero aler esta separada, en otra declaracion lo cual ejecuta luego el ingremento y la compobraxion asi que obtiene i=1 acual.


/* ¿Qué valores serán mostrados por el bucle "for"?
importancia: 4
Para cada bucle, anota qué valores mostrará y luego compara las respuestas.

Ambos bucles, ¿muestran en alert los mismos valores? */

//1.

//for (let i = 0; i < 5; i++) alert( i );  //0 , 1 , 2 , 3 , 4


//2.
//for (let i = 0; i < 5; ++i) alert( i ); //  0,1 , 2 , 3 , 4


/* El incremento i++ es separado de la comprobación de la condición (2). Es simplemente otra declaración.

El valor retornado por el incremento no es usado aquí, así que no hay diferencia entre i++ y ++i. */


/* Muestra números pares en el bucle
importancia: 5
Usa el bucle for para mostrar números pares del 2 al 10. */


console.log("Numeros pares del 2 al 10")
for(let i=2;i<=10;i++){
    if(i%2===0) console.log(i)
}




/**Reemplaza "for" por "while"
importancia: 5
Reescribe el código cambiando el bucle for a while sin alterar su comportamiento (la salida debería ser la misma).


for (let i = 0; i < 3; i++) {
  alert( `número ${i}!` );
}

*/


console.log("Reescribe el código cambiando el bucle for a while ")

let i4= 0;
while(i4 < 3){
    console.log( `número ${i4}!` );
    i4++
}


/**Repite hasta que la entrada sea correcta
importancia: 5
Escribe un bucle que solicite un número mayor que 100. Si el usuario ingresa otro número – pídele que ingrese un valor de nuevo.

El bucle debe pedir un número hasta que el usuario ingrese un número mayor que 100 o bien cancele la entrada/ingrese una linea vacía.

Aquí podemos asumir que el usuario solo ingresará números. No hay necesidad de implementar un manejo especial para entradas no numéricas en esta tarea. */



let num= +prompt('Digite numero mayor que 100');

while(true){
    
    if(num>100){
        alert(`Felicitacines su numero es: ${num}`)
        break;
    }else{
        num= +prompt('Digite numero masyor a 100');
    }
}



//solucion propuesta en la documentacion:
let num1;
do{
    num1 = +prompt('Digite numero mayor a 100',0);
}while(num1<=100 && num1);



/* Muestra números primos
importancia: 3

Un número entero mayor que 1 es llamado primo si no puede ser dividido sin un resto por ningún número excepto 1 y él mismo.

En otras palabras, n > 1 es un primo si no puede ser divido exactamente por ningún número excepto 1 y n.

Por ejemplo, 5 es un primo, porque no puede ser divido exactamente por 2, 3 y 4.

Escribe el código que muestre números primos en el intervalo de 2 a n.

Para n = 10 el resultado será 2, 3, 5, 7.

PD. El código debería funcionar para cualquier n, no debe estar programado para valores fijos. */

let n = 10;

for(let i=2;i<=n;i++){
    if(i % 2 !=0) continue;
    console.log(i);
}



