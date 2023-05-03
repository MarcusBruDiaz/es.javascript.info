/* La sentencia "switch" */


//Una sentencia Switch, es una forma de remplazar cunado tenemos varios if anidados.

// es una forma de comparar un valor con multiples variantes.

//La sintaxis:

//switch tiene uno o varios bloques CASE y uno opcional DEFAULT.

//LA SINTAXIS SE VE DE ESTA MANERA:



/* 
switch(x){
    case 'value1':
        //codigo
        break;
    case 'value2':
        //codigo
        break;
    case 'value3':
        //codigo
        break;
    //los case que sean necesarios

    default:
        //codigo cuando se quirda dar una logica el caso que no se compluan nungina de las condiciones anteiores;
        break
} */


// el valor de x es comparado contra el primer case(en el ejemplo value1), luego contra el valor segundo case y asi sucesivamente, todas estas comprobaciones son bajo la igualdad estricta.


//si la igualdad es encontrada en switch empieza a ejecutar el codigo todo el codigo hasta que encuentra una sentencia break mas cercana, iniciando por el primer case correcpondiente o si no hay breack hasta el final del switch.

//si ninguno de los case se cumple entonces se ejecuta default (si existe.)

//ejemplo:

let a = 2+2;

switch(a){
    case 3:
        console.log(a);
        break;
    case 4:
        console.log(a);
        break;
    case 5:
        console.log(a);
        break;
    default:
        console.log('Desconozco este valor');
        break;
};



// Aqui como el valor de a es 4 entoces se cumple la condicion case 4, dado el caso que no existoera un break en el case, entonces para derecho al siguiente case sin hacer comprobraciones, esto sigue hasta que encuentre un break.



//cualqioer expresion puede ser un argumento de switch/case:

//ejemplo:


let a1 = "1";
let b= 0;

switch(+a1){
    case b +1:
        console.log('se ejecuta dado que que +a es 1 y es igual a b+1=1');
        break;
    default:
        console.log('esto no se ejecuta');
        break;
    
}



/* Agrupamiento de "case" */

//varias variantes de case, las cuales compartan el mismo codigo pueden ser agrupadas.


//por ejemplo si queremos que se comparta el mismo codigo para case3 y case5, entonces se haria de la siguiente manera:

let a2= 2+2;

switch(a2){
    case 4:
        console.log('Correcto');
        break;
    case 3:
    case 5:
        console.log('Incorrecto');
        break;
    default:
        console.log('en realidad no reconozco el valor');
        break;
}


//El tipo importa

//es muy importante resaltar que el tipo de dato importa, toda vez que la comparacion se hace de manera estricta.

/** TAREAS! */

/* Reescribe el "switch" en un "if"
importancia: 5
Escribe el código utilizando if..else que corresponda al siguiente switch: 

switch (navegador) {
  case 'Edge':
    alert( "¡Tienes Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Esta bien, soportamos estos navegadores también' );
    break;

  default:
    alert( '¡Esperamos que esta página se vea bien!' );
}

*/


let navegador='Safari';

if(navegador==='Edge'){
    console.log('Tienes edge');
    
}else if(navegador === 'Chrome' || 'Firefox' ||  'Safari' || 'Opera' ){
    console.log( 'Esta bien, soportamos estos navegadores también' );
}else{
    console.log('!Esperamos que esta página se vea bien!');
};  // solcion coincide con la documentacion.




/* Reescribe "if" en "switch"
importancia: 4
Reescribe el código debajo utilizando solo un argumento switch: 


let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}


*/



let a3= +prompt('a?','');

switch(a3){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}