/**Establecer y disminuir un contador
 * 
 * 
importancia: 5


Modifique el código de makeCounter() para que el contador también pueda disminuir y establecer el número:

counter() debe devolver el siguiente número (como antes).
counter.set(value) debe establecer el contador a value.
counter.decrease() debe disminuir el contador en 1.
Consulte el código en el entorno de pruebas para ver el ejemplo de uso completo.

P.D. Puedes usar un “closure” o la propiedad de función para mantener el recuento actual. O escribe ambas variantes. */


function makeCounter(){
    let count =0;

    function counter(){
        return count++;
    }

    counter.set = (value)=>{count=value};
    counter.decrease = ()=>{count--};

    return counter
}

let counter= makeCounter();

counter.set(15);
counter.decrease();

alert(counter());
