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

