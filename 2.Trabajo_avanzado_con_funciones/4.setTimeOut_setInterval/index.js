/* TAREAS

Salida cada segundo
importancia: 5
Escriba una función printNumbers(from, to) que genere un número cada segundo, comenzando desde from y terminando con to.

Haz dos variantes de la solución. */

/* function printNumbers(from,to){
    let num=0;
    while(from<=to){
        num=from;
        setTimeout(()=>{
            console.log(num);
            from++;
        },1000);
        
    }
}
 */
/* setTimeout(printNumbers,1000,5,10); */

let timeId= setTimeout(function printNumbers(from,to){
    if(from<=to){
        console.log(from);
        from=from+1;
        timeId =setTimeout(printNumbers,1000,from,to);
    }; 
},1000,5,15);

clearTimeout(timeId);