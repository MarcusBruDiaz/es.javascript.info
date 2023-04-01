//let timerId = setTimeout(() => alert("no pasa nada"), 1000);
//alert(timerId); // identificador del temporizador

//clearTimeout(timerId);
//alert(timerId);



/*setInterval*/

//El método setInterval tiene la misma sintaxis que setTimeout:

//let timerId = setInterval(func|código, [retraso], [arg1], [arg2], ...)

// repetir con el intervalo de 2 segundos
//let timerId1 = setInterval(() => alert('tick'), 2000);

// después de 5 segundos parar
//setTimeout(() => { clearInterval(timerId1); alert('stop'); }, 5000);


/*setTimeout anidado*/

/**Retraso cero en setTimeout
Hay un caso de uso especial: setTimeout (func, 0), o simplemente setTimeout (func).

Esto planifica la ejecución de func lo antes posible. Pero el planificador lo invocará solo después de que se complete el script que se está ejecutando actualmente.

Por lo tanto, la función está planificada para ejecutarse “justo después” del script actual.

Por ejemplo, esto genera “Hola”, e inmediatamente después “Mundo”: */

//setTimeout(() => alert("Mundo"));

//alert("Hola");

/**Resumen
Los métodos setTimeout(func, delay, ... args) y setInterval(func, delay, ... args) nos permiten ejecutar func “una vez” y “regularmente” después del retardo delay dado en milisegundos.
Para cancelar la ejecución, debemos llamar a clearTimeout / clearInterval con el valor devuelto por setTimeout / setInterval.
Las llamadas anidadas setTimeout son una alternativa más flexible a setInterval, lo que nos permite establecer el tiempo entre ejecuciones con mayor precisión.
La programación de retardo cero con setTimeout(func, 0)(lo mismo que setTimeout(func)) se usa para programar la llamada “lo antes posible, pero después de que se complete el script actual”.
El navegador limita la demora mínima para cinco o más llamadas anidadas de setTimeout o para setInterval (después de la quinta llamada) a 4 ms. Eso es por razones históricas.
Tenga en cuenta que todos los métodos de planificación no garantizan el retraso exacto.

Por ejemplo, el temporizador en el navegador puede ralentizarse por muchas razones:

La CPU está sobrecargada.
La pestaña del navegador está en modo de “segundo plano”.
El portátil está en modo “ahorro de batería”.
Todo eso puede aumentar la resolución mínima del temporizador (el retraso mínimo) a 300 ms o incluso 1000 ms dependiendo de la configuración de rendimiento del navegador y del nivel del sistema operativo. */


function printNumbers(from, to){
    let current = from;

    setTimeout(function go(){
        alert(current);
        if(current<to){
            setTimeout(go,1000);
        }
        current++;
    },1000);
}

//printNumbers(5,10);