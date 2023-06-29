import {sayHi} from './sayHi.js';


// A medida que nueswtra aplicacion crece, queremos dividirla en multiples archivos, llamados "modulos".  UN modulo puede contener una clase o una biblioteca de funciones para un proposito especifico.

// el sitema de modulos es compatible scon todo9s los principles navegadores y tambien con Node.js.


//Que es un modulo:

//UN modulo es solo un archivo. Un script es un modulo. Tan sencillo como esto.

// Los modulos pueden cargarse entre si y usar directivas especiales export e import para intercambiar funcionabilidad, llamar a funciones de un modulo a otro:

//  * la palabra clave export etiqueta las variavles y fucniones que deberian ser accesibles desde fuera del modulo actual.

//  * import permite importar funcionabilidades desde otrso modulos.


//Por ejemplo, tenemos un archivo sayHi.js que exporta una funcio: esta creadp ve marcos a mirarlo.

// ahora para importarlo en ese archivo se haria de la siguiente manera:



// Es importante que cundo estemos trabajando con miodulos le pongamos en la eiqueta scrip el type="module" para que asi el navegador sepa que se esta trabjando con ellos.


sayHi('marcus');


//Los modulo solo funciona a traves de HTTP(s), no localmente.




//Carasteristicas del modulo central

//¿Que hay de diferencia en los modulos en comparacion con los scripts normales?

//Hay caracteristicas principales, validas tanto para el navegador como para JS del ladpo del servidor.



//Siempre en modo stricto:

//Los moduilos siempre trabajan en modo estricto. Por ejemplo, asignar a una variable sin declara nos dara un error.


//Alcance a nivel de modulo:

// Cada modulo tiene su propio alcanc de nivel superior. En otras palabras, las variables y fucniones de nivel superrior(osea declaradas solo en ese script) de un modulo no se ven en otros scripts.

//En el siguiente ejemplo, se impotan dos scripts y hello.js intenta usar la variavle user declarada en user.js, esto va a fallar debido que es un modulo separado.

// los mmodulos deben hacer export a lo que ellos quieren que sea accesible desde afuera, y hacer import de lo que necesiten.


/// En el navegador habalndo de paginas HTML, tambien existe el alcande independienre de nivel superior para cada script

// aqui hay dos scripts en la misma pagina, ambos type="module". NO ven entre si sus variavles de nivel superior:


/* 
<script type="module">
  // La variable sólo es visible en éste script de módulo
  let user = "John";
</script>

<script type="module">
  alert(user); // Error: user no está definido
</script> 
*/


//Un codigo de modulo se evalua solo la primea vez cuando se importa.

//Si el mismo modulo se importa en diferentes archivos, el codigo de ese modulo solo se ejecuta una sola vez: Esto sucede en el primer import y luego los demas importadores utilizarian la referencia de esa ejecucion en el primor import.

//Por ejemplo, si ejecutar un codigo de modulo trae efectos secundarios,como mostrar un mensaje, importatlo varicas veces lo activara solo una vez, la primesa vez:

/* 
// 📁 alert.js
alert("Módulo es evaluado!");


// Importar el mismo módulo desde archivos distintos

// 📁 1.js
import `./alert.js`; // Módulo es evaluado!

// 📁 2.js
import `./alert.js`; // (no muestra nada) 
*/


//El segundo import no muestra nada debido que el modulo ya fue validado.

//import.meta

//El objeto import.meta contiene la informacion sobre el modulo actual.
// solo da la informacion de los modulos que esten dispuestos con type="module"


// This:

//This en los modulos es undefined, em cambio en los que no estas como type="module" this seroia el objeto windows.


//Los modulos son diferidos:

//Los modulos estan siempre diferidos( le dicen al HTML que caregue mientres ellos van cargando en segundo plano.)

//Los modulo esperan hasta que el documento HTML este completamente listo y luego lo ejecuta.

// Mantiene el orden relativo de los scripts: los scripts que van primero en el documento se ejecutan primnero.

//COmo efecto secundartio los modulos siempre ven la pagina completamente cargada incluso los elementos HTML debajo de ellos.


//Async funciona en scripts en linea


//Para los scripts que no son modulos, el atributo async solo funciona en scripts externos (ejemplo un servidor externo). Los scripts asincronos se ejecutan inmediatamente esten listos, independientemente de otros scripts o del doumento HTML


//Para los scripts de modulo, tambien funciona en scriots en liena.

//Por ejemplo, el siguiente script(esta en index.html) en línea tiene async, por lo que no espera nada.

//

/* 

<!-- todas las dependencias se extraen (analytics.js), y el script se ejecuta -->
<!-- no espera por el documento u otras etiquetas <script> -->
<script async type="module">
  import {counter} from './analytics.js';

  counter.count();
</script> 

*/

//realiza la importacion (extrar ./Analytics.js) y se ejecuta cuando este listo, incluso si el documento HTML aun no esta listo.

//Scripts externos

//Los scripts externos que tengan type="module" son diferentes en dos aspectos.

//los scripts externos con el mismo src solo se ejecutan una vez.

//Los scripts extermos que se buscan desde otro origen requiere excabezado CORS, , en otros palabras, si un scriptn de modulo es estraido desde otro origen , el servidor remoto debe porporcionar un encabezado Acces-Control-Allow-Origin permitiendo la busqueda.


//No se permiten modulos sueltos:

//En el navegador, import debe obtener una URL relativa o absoluta. los modulos sin ninguna ruta se denominan modulos sueltos. estoa modulos no estan permitidos en import.

//Por ejemplo el siguiente import o es valido:

//import {sayHi} from 'sayHi';// esto da un error 



