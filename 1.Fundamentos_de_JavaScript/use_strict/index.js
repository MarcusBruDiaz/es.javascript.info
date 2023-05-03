/**Durante mucho tiempo, JavaScript evolucionó sin problemas de compatibilidad. Se añadían nuevas características al lenguaje sin que la funcionalidad existente cambiase.
 * 
 * Esto tenía el beneficio de nunca romper código existente, pero lo malo era que cualquier error o decisión incorrecta tomada por los creadores de JavaScript se quedaba para siempre en el lenguaje.
 * 
 * 
 * Esto fue así hasta 2009, cuando ECMAScript 5 (ES5) apareció. Esta versión añadió nuevas características al lenguaje y modificó algunas de las ya existentes. Para mantener el código     antiguo funcionando, la mayor parte de las modificaciones están desactivadas por defecto. Tienes que activarlas explícitamente usando una directiva especial: "use strict".
 */

/**En resumen, en la antiguedad, se hacian cmabias en el lenguaje de javaScript sin que las funcionabilidades existentes cambiasen, pero esto seria un grave error por que cualquier error que cometieran los desartroladores de JS, iba a existir de por vida.
 * 
 * entonces fue cuando en 2009 aparecio EMACScript5(ES5), esta version añadio nuevas caracteristicas al lenguaje, y modifico algunas ya existentes. Entonces para mantener el codigfo existents funcionando, la mayor parte de esas modificaciones estan desactivadas por defecto. Para activas esas modificaciones tienes que activarlas explicitamente usando la dirtectiva "use strict"
 * 
 */


/* “use strict” */


// La directiva se asemeja a un string: "use strict". Cuando se sitúa al principio de un script, el script entero funciona de la manera “moderna”.

// Asi se define el use estrircto colomando la directiva al inicio del script.
"use strict";

function name1(n){
    console.log(`Hello, ${n}`);
}

name1('Marcus')

/* Asegúrate de que “use strict” está al inicio
Por favor, asegúrate de que "use strict" está al principio de tus scripts. Si no, el modo estricto podría no estar activado. 

Únicamente pueden aparecer comentarios por encima de "use strict".
*/


/**Consola del navegador */

//Cuando utilices la consola del navegador para ejecutar código, ten en cuenta que no utiliza use strict por defecto.


/* El JavaScript moderno admite “clases” y “módulos”, estructuras de lenguaje avanzadas (que seguramente llegaremos a ver), que automáticamente habilitan use strict. Entonces no necesitamos agregar la directiva "use strict" si las usamos. */