for(let i =0 ; i<5;i++){
    if(i % 2 == 0) continue;
    console.log(i);
}


/**No break/continue a la derecha de ‘?’
Por favor, nota que las construcciones sintácticas que no son expresiones no pueden user usadas con el operador ternario ?. En particular, directivas como break/continue no son permitidas aquí.

Por ejemplo, si tomamos este código:

 */

for(let i =0 ; i<5;i++){
    if (i > 5) {
        alert(i);
    } else {
        continue;
    }
}


let rows = 5; // Número de filas del triángulo
let asterisk = "*"; // Carácter para representar los asteriscos
let space = " "; // Carácter para representar los espacios
let triangle = "";

for (let i = 1; i <= rows; i++) {
  let spacesBefore = rows - i;
  let spacesAfter = rows - i;
  let asterisks = i * 2 - 1;

  for (let j = 1; j <= spacesBefore; j++) {
    triangle += space; // Agrega espacios antes de los asteriscos
  }
  for (let k = 1; k <= asterisks; k++) {
    triangle += asterisk; // Agrega asteriscos
  }
  for (let l = 1; l <= spacesAfter; l++) {
    triangle += space; // Agrega espacios después de los asteriscos
  }
  triangle += "\n"; // Agrega un salto de línea al final de cada fila
}

console.log(triangle); // Imprime el triángulo en la consola