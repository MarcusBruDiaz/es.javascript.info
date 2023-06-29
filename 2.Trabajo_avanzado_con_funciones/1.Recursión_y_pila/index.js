/* Recursión y pila */


//Vamos a revisar las funciones, pero esta vez mas a profundidad.

// Para lo anterior vamos a ver este primer tema denominado recursividad.

//La recursion es un patron de programacion que es util cuando tenemos tareas que se pueden dividir naturalmente en varias tareas del mismo tipo, pero mas simples.

//Tambien se puede iomplementar para simplificar alguna funcion en tareas mas simples de la misma tarea.

//Tambien se puede utukliuzar para tratar ciertas estructuras de datos.

//Sabemos que en el cuerpo de una funcion, esta puede llamar a oytras funciones para resolver lo que tiene que resolver.

// Pero cuando yba funciojn se llama asi misma, esto se denomina recursividad.

//Venos unas formas de pensar para intentar comprender el tema de recursivdiad :


//caso:

//Escribiremos una funcion pow(x,n), que eleve c a una potencia natural de n, en oytras palabras que x se multiplique a si misma n veces:

//pow(2,2) = 4
//pow(2,3) = 8
//pow(2,4) = 16

//Hay dos formas de implementarlo:

//1. Pensamiento iterativo: un bucle for:

function pow(x,n){
    let result=1;
    for(let i=0;i<n;i++){
        result*=x;
    }

    return result;
}



console.log("-----Pensamiento iterativo------");
console.log(pow(3,3));
console.log(pow(2,4));

//2. pensamiento recursivo: simplifica la tarea y se llama a si mismo:

          
function pow1(x ,n){  //  (2,4)  3 , 2 ,1 
    
    
    if(n==1) return x;// no se cunple pasa

    return x * pow(x,n-1); //   2 * pow(2,4-1=3),, 2 * pow(2,3-1=2),,2 * pow(2,2-1=1)  sale x
}


console.log("-----recursivdiad------");
console.log(pow1(2,2));
console.log(pow1(2,4));


//cuando se llama a la pow(x,n) la ejecucion se devide en dos ramas:


/*               if n==1  = x
                /
pow(x, n) =
                \
                 else     = x * pow(x, n - 1) 
 
 */


// 1. si n==1 entonvces es trivial, Esto se llama base de la recursividad. Por que reduce inmeditamente el resultado obvio pow(x,1) es igual a x.


// 2. de lo contrario, podemos representar pow(x,n) como x*pow(x,n-1). En matematicas uino escribe Xn = X* Xn-1. esto se llama paso recursivo : transpormamos la tarea en una accion mas simple (multiplicacion por x) y una llamada mas simple de la misma tarea (pow conh menor n), los siguientes passos lo simplifican ,as y mas hasta que n llegue a 1.

//Tamnien podemos decir que pow se llama a si misma recursivamente hasta que n==1.

//ver imagen pasos_recursividad.png


// POr lo tanto la recurcion reduce una llamada de funcion a una mas simple y luego a una mas simple y asi susesivamente, hasta que el resultado se vuelbva obvio.

//La recursión suele ser más corta

//rescibramos  el codigfo de arriba con ternario  ? :


function pow2(x,n){
    return (n==1) ? x : x * pow2(x,n-1);
}


console.log(pow2(2,4)); // 16

// el numero de llamadas de anidadas (incluida la primera ) se llama profundidad de recursion. En nuestro caso sera exactamente n.



/* El contexto de ejecución y pila */



//Ahora examiniemos como funciona las llamadas recursivas. Para esto vamos a mirar por debajo como funcionan las funciones.

// La informacion sobre el proceso  de ejecucion de una fucnion en ejecucion se almacena en su contexto de ejecucion.



//El contexti d ejecucion: es una estructura de datos interna que contiene detalles sobre al ejecucion de una funcion : donde esta el fljo de control ahora., las variables actuales, el valor this y algunos otros detalles internos.

//Una llamada a una funcion tiene asociado un contexto de ejecucion.

//Cuando una funcion realiza una llamada anidada, sucede lo siguiente:

/* 

1.La funcion actual se pausa.
2.el contexto de ejecucion asociado  a la funcion pausada. se recuerda en una estructura de datos espeiales llamdad pila de contexto de ejecucion 
3. la llamada anidada se ejecuta.
4.una vez finaLIZADA LA LLAMADA ANIDADA, el antiguo contexto de ejeucion recupera de la pila la funcion externa que estaba pausada, y la reanuda donde se quedo pausada.

*/


//vemos haber que sucede llamando a la funcion pow2(2,3):
/* 


1.  pow2(2,3):


Al comienzo de la llamada pow2(2,3), el contexto de ejeuccion almacenara variables : x=2 y n=3, el flujo de ejecucion esta en la liena 1 de la funcion.

podemos esbozarlo cmo:

Context: { x: 2, n: 3, at line 1 } call : pow(2, 3)

ahi es cuando al funcion comienza a ejecutarse. La condicion n==1 es falsa, por lo que el flujo continua en la segunda rama del if:

function pow(x, n) { line 1
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);  // AQUI!!! line 5
  }
}


alert( pow(2, 3) );


las variables son las mismas pero la liena cambia por lo que el contexto  es ahora 

Context: { x: 2, n: 3, at line 5 } call : pow(2, 3)


Para calcular x * pow (x, n - 1), necesitamos hacer una sub-llamada de pow con nuevos argumentos pow(2,2)



2 .  pow (2, 2)

Para hacer una llamda anidad, javaScript guarda o recuerda el contexto de ejecucual actual  en la pila de contexto  de ejecucio,

aui llamdamos a la misma funcion pow, pero igual pasa si llamamos a cualquier otra funcion.

1. el contexto actual se "recuerda" en la parte superior de la pila y el anterior baja.
2. el nuevo contexto se crea para la subllamda.
3. cuando finaliza la subllamda, el contexto  anterior se extrae de la pila y su ejecucion continua .

aqio esta  la pila de cpontexto cuando ingresamos  la subllamada pow(2,2);


Context: { x: 2, n: 2, at line 1 } call pow(2,2)
Context: { x: 2, n: 3, at line 5 } call pow(2,3)

// el nuevo contextpo de ejecucion actual esta en la parte superior y los recordados estan debajo.

cuando termina la ejecucion de la funcion actual, es facil reanudar el contexto anterior ya que mantiene ambas variables y el lugar exacto del codigo donde se detuvo.

//NOTA IMPORTANTE:

Estamos utilizando la palabra "line" por que en nuestro ejemplo hay solo una subllamada en linea, pero generalmente una simple liena de codigfo puede contener multiples subllamadas como pow(..)+ pow(..) + otraCosa(...).

Entonces seria mas preciso decie que la ejeucion re reanuda "inmediatamente despues de la subllamada."

observemos que Context: { x: 2, n: 2, at line 1 } call pow(2,2) pero cuando llega a la liena 5, ahi cambia la liena solamente , debido que son las mismas variables 


Context: { x: 2, n: 2, at line 5 } call pow(2,2)
Context: { x: 2, n: 3, at line 5 } call pow(2,3)


3. pow(2, 1):



//aqui el proceso se repite, se realiza una nueva subllamda en la liena 5 con argumentos x=2 n=1 // aqui coo los argumentos son disttos el contexto de ejecucion se pone line 1

//se crea un nuevo contexto de ejecucion, donde pow(2, 1) se colca en la parte superior de la pila:

Context: { x: 2, n: 1, at line 1 } call  pow(2,1)
Context: { x: 2, n: 2, at line 5 } call pow(2,2)
Context: { x: 2, n: 3, at line 5 } call pow(2,3)

Como se puede ver hay dos contextos antiguis y uno antual que es pow(2,1)


// -------SALIDA DE TODO LO ANTEIOR-----------

A diferencia de los antrior pow(2,1), CUMPLE LA CONDICION n==1 por lo qe funciona la primera rama del if:

function pow(x, n) { line 1
  if (n == 1) {  // AQUI!!! NO HAY LLAMADAS ANIUDADES POR LO QUE DEVUELVE X QUE ES 2
    return x;
  } else {
    return x * pow(x, n - 1);  
  }
}


Cuando finzaliza ese contexto de ejecucion con el return, ya no es necesario recorsar ese conetxto por lo que se elimina de la memoria. El anterior contexto se recurra a la parte superior de la pila 

Context: { x: 2, n: 1, at line 1 } call  pow(2,1)  // eliminado
Context: { x: 2, n: 2, at line 5 } call pow(2,2)  // continua
Context: { x: 2, n: 3, at line 5 } call pow(2,3)


se reanuda la ejeucion de pow(2,2), el cual tiene el resultadio de la subllamada pow(2,1), por lo que tambien puede finalizar la evaluacion x*pow(x,n-1), devolviendo 4

Context: { x: 2, n: 1, at line 1 } call  pow(2,1)  // eliminado
Context: { x: 2, n: 2, at line 5 } call pow(2,2)  // eliminado
Context: { x: 2, n: 3, at line 5 } call pow(2,3) // continua 

Luego se restaura el contexto anterior:

Context: { x: 2, n: 3, at line 5 } call pow(2,3)

cuando termina, tenemos un resultado de pow(2,3)= 8


¡¡¡¡por que??!!!!!


veamoslos asi:

1. En pow(2,1) x =2

2. en pow(2,2) toma el valor devuelto del anterior osea x=2, y en la liena donde se reanuda x* pow(x, n - 1) donde pow(x, n - 1) = 2 y se multiplioca por 2 seria 4

3. En pow(2,3) toma el valor devuelto del anterior osea x=4  y en la liena donde se reanuda x* pow(x, n - 1) donde pow(x, n - 1) = 4y se multiplioca por 2 seria 8


La profundidad de recursión en este caso fue: 3.

Como podemos ver en las ilustraciones anteriores, la profundidad de recursión es igual al número máximo de contexto en la pila.



tenga en cuanta los requitostos de memoria. Loa contextops toman memoria, en nuestro caso elevar a la potencia n realmente requiete memorioa  para n contextos.







*/


/* el algoritmoi basados en bucvles ahorra mas memoria. */


function pow3(x,n){
    let result=1;
    for(let i=0;i<n;i++){
        result*=x;
    }

    return result;
}


console.log(pow3(2,5));



//El pow iterativo utiliza un solo contexto cambiando i y result en el proceso. Sus requitistos de memoria son pequeños, fijos y no dependen de n.


//Cualquioer recursicion puede reescribirse como bucle. La variante de bucle generalmente se puede haver mas efizas




/* Recorridos recursivos */


// otra gran aplicacion en el recorrido recursivo

//imagina que tenemos una empresa. La estructora del personal se puede representar como un objeto:

let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
};



//Vemos que esta empresa tiene departamentos.



//Un departamento puede tener una gran variedad de personal. Por ejemplo, el departamento de ventas sales tiene 2 empleados: John y Alice.


//O un departamento puede dividirse en subdepartamentos, como development que tiene dos ramas: sites e internals: cada uno de ellos tiene su propio personal.


//Ahota digamos que querremos obtener la suma de todos los salarios de los empleados de la empresa.



//Probemos la recursividad.


//Como podemos ver, cuando nuestra función hace que un departamento sume, hay dos casos posibles:


//O bien es un departamento “simple” con una array de personas: entonces podemos sumar los salarios en un bucle simple.

//O es un objeto con N subdepartamentos: entonces podemos hacer N llamadas recursivas para obtener la suma de cada uno de los subdepartamentos y combinar los resultados.




/// el primer caso es la base de la recursividad el caso trivial cuando se recibe un array.

// el segundo caso cunado iobtenemos un objeto, es el paso recursivo.Una tarea cimplea se divede en tareas para departamentos mas pequeños. a su vez,m pueden dividirse nuevamente , pero tarde o tenmprano la division terminara en 1


//veamoslo en codigfo:

let company1 = { // el mismo objeto, comprimido por brevedad
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};

console.log(company1)

// La función para hacer el trabajo

function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev,current)=> prev + current.salary ,0);
    }else{
        let sum=0;
        for(let subdep of Object.values(department)){
            
            sum+= sumSalaries(subdep);
        }
        return sum;
    }

}


console.log(sumSalaries(company1));


/* Estructuras recursivas */


//Una estructura de datos recursiva (definida recursivamente) es una estructura que se replica en partes.

//Lo acabamos de ver en el ejemplo de la estructura de la empresa anterior.

/* 

O un array de personas.
O un objeto con departamentos.

 */


//Para los desarrolladores web hay ejemplos mucho más conocidos: documentos HTML y XML.

//un dcoumento html, una etiqueta html puede contenher una lista de :
/* 
-piezas de texto 
-comentarios html
-otras etiquetas html(que a su vez pueden contener comentarios u otras etiquetas )
*/


//Esa es una vez mas, una definicion recursiva.


//Para mejorar la comprension, cubrioremos una estructura recursiva mas llamada "Lista enlzada" que podria ser una mejor alternativa para las matrices en algunos casos,



/* Lista enlazada */

//Imagina que queremos almacenar una lista ordenada de objetos.

//La eleccion natural seria un array:

//let arr=[obj1, obj2, obj3];

//peroi hay probelemas con los array, que las funciones para elimar un elemento del arrayu son muy costosas, debido que tiene que numerar todos lo elementos y esto gasta mucha memoria. exepcto arr.push/pop que agregar al inicio y eleiomar el final 

// como alternatriva tenemos las liats enlazadas áta insercion/eliminacion rapida 

// El elemeto de listas enlzadas se defiene de forma recursiva como un objeto  con :


/* 

1.value
2. propiedad next que hae referencia al siguiente elemnto de la lista enlazada o null si es el fiinal
 */


//Ejemplo

let list={
    value:1,
    next:{
        value:2,
        next:{
            value:3,
            next:{
                value:4,
                next:null
            }
        }
    }
};



//Un código alternativo para la creación:

let list1 = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

// aqui podemos ver calramnete que hay varios objetos, cada uno con una propiedad value y una propiedad next apuntando al objeto vencio. el pirmer objeto es la variabvle list.

//la lista se puiede dvividir en varias partes y depsues unir:


//let secondList = list1.next.next ; // value 3
//list1.next.next=null;

//Para unir:

//list.next.next = secondList;


//Y seguro, podemos insertar o eliminar elementos en cualquier lugar.

//Por ejemplo, para anteponer un nuevo valor, necesitamos actualizar el encabezado de la lista:


list1={value:"new item", next:list1};
console.log(list1)


/* TAREAS */


/* 
Suma todos los números hasta el elegido
importancia: 5
Escribe una función sumTo(n) que calcule la suma de los números 1 + 2 + ... + n.

Por ejemplo: 


sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050


*/

//solucion con bucle for

function sumTo(n){
  let sum=0;
  for(let i=0;i<=n;i++){
    sum+=i;
  }
  return sum;
}

console.log(sumTo(2));// output 3


//solcuion con recursividad


function sumTo1(n){  // context 2 line1// context 1 line 1
  let sum=0;
  if(n==1) return n;

 
  sum = n + sumTo1(n-1); // context 2 line 4 // 
  
  

  return sum;

}

console.log(sumTo1(100));// output 3


// progresion aritmetica:

function sumTo2(n){
  return n *(n+1)/2;

}

console.log(sumTo2(2));


/* 
Calcula el factorial
importancia: 4
El factorial de un número natural es un número multiplicado por "número menos uno", luego por "número menos dos", y así sucesivamente hasta 1. El factorial de n se denota como n!

Podemos escribir la definición de factorial así:


n! = n * (n - 1) * (n - 2) * ...*1

Valores de factoriales para diferentes n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

La tarea es escribir una función factorial(n) que calcule n! usando llamadas recursivas.

*/



function factorial(n){

  if(n==1) return n;
  return n*factorial(n-1)

}

console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))




/* Sucesión de Fibonacci
importancia: 5
La secuencia de sucesión de Fibonacci tiene la fórmula Fn = Fn-1 + Fn-2. En otras palabras, el siguiente número es una suma de los dos anteriores.

Los dos primeros números son 1, luego 2(1+1), luego 3(1+2), 5(2+3) y así sucesivamente: 1, 1, 2, 3, 5, 8, 13, 21....

La sucesión de Fibonacci está relacionada la proporción áurea y muchos fenómenos naturales alrededor nuestro.

Escribe una función fib(n) que devuelve la secuencia n-th de Fibonacci.

Un ejemplo de trabajo:  */

//function fib(n) { /* your code */ }

//alert(fib(3)); // 2
//alert(fib(7)); // 13

//alert(fib(77)); // 5527939700884757



//pendiente hacer
/* function fib(n){

  


}
 */

/* Generar una lista de un solo enlace
importancia: 5
Digamos que tenemos una lista de un solo enlace (como se describe en el capítulo Recursión y pila):

 */

let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printLIst(list){
  let obj={}
  for(let ob in Object.values(list)){
    console.log(ob);
  }
}

printLIst(list2);