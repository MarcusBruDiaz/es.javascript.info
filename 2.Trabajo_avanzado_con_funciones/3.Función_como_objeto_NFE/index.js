/* function makeCounter1() {
    // en vez de:
    // let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
}
  
let counter1 = makeCounter1();
alert( counter1() ); // 0
alert( counter1() ); // 1
 */

/* TAREAS */


/* Establecer y disminuir un contador
importancia: 5
Modifique el código de makeCounter() para que el contador también pueda disminuir y establecer el número:

counter() debe devolver el siguiente número (como antes).
counter.set(value) debe establecer el contador a value.
counter.decrease() debe disminuir el contador en 1. 


Consulte el código en el entorno de pruebas para ver el ejemplo de uso completo.

P.D. Puedes usar un “closure” o la propiedad de función para mantener el recuento actual. O escribe ambas variantes.

*/



function makeCounter() {
    // en vez de:
    // let count = 0

   function counter(){
        return counter.count++;
   }


   
   counter.count=0;
   counter.set=function(value){ return counter.count=value};
   counter.decrease = ()=> counter.count=counter.count-1;

   return counter;
}
  
let counter = makeCounter();
//alert( counter() ); // 0
///alert( counter() ); // 1
//alert( counter.set(10) );
//alert( counter.decrease() );
//alert( counter() );


/* 
Suma con una cantidad arbitraria de paréntesis
importancia: 2
Escriba la función sum que funcionaría así:
 */


/* 

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 */

function sum(a) {
  
    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };

    f.valueOf=()=> currentSum +1;
  
    return f;
}

console.log(+sum(5)(-1));
