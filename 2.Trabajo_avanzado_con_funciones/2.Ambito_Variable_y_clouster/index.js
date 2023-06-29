

/* TAREAS */

/* 
Filtrar a través de una función

importancia: 5
Tenemos un método incorporado arr.filter(f) para arrays. Filtra todos los elementos a través de la función f. Si devuelve true, entonces ese elemento se devuelve en el array resultante.

Haga un conjunto de filtros “listos para usar”:

inBetween(a, b) – entre a y b o igual a ellos (inclusive).

inArray([...]) – en el array dado

El uso debe ser así:

arr.filter(inBetween(3,6)) – selecciona solo valores entre 3 y 6.
arr.filter(inArray([1,2,3])) – selecciona solo elementos que coinciden con uno de los miembros de [1,2,3].

Por ejemplo:


Tu código para inBetween y inArray 

//let arr = [1, 2, 3, 4, 5, 6, 7];

//alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

//alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

*/




function inBetween(a,b){
    let from=a;
    let until=b;
    return function(element){
        return element>=from && element<=until;
    }
}


let arr=[5,1,2,3,4,5,6,7];
console.log(arr.filter(inBetween(3,6)));



function inArray(arreglo){
    let array= arreglo;
    
    
        return function(element){
            for(let i=0;i<array.length;i++){
                if(array[i]==element) return element;
            }
            
        } 
}

//console.log(inArray([1,2,3]))
console.log(arr.filter(inArray([1,2,10,5])));


/* return function(element){
    console.log(current);
    return element;
} */



/* Ordenar por campo
importancia: 5
Tenemos una variedad de objetos para ordenar:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];


La forma habitual de hacerlo sería:

// por nombre(Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// por edad (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);


¿Podemos hacerlo aún menos detallado, como este?


users.sort(byField('name'));
users.sort(byField('age'));

*/


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(name){

    return function(a,b){
        return (a[name]< b[name]) ? -1 : 1;
    } 
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
console.log(users.sort(byField('surname')));


/* 
Ejército de funciones
importancia: 5
El siguiente código crea una serie de shooters.

Cada función está destinada a generar su número. Pero algo anda mal … 



*/

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let num=i
      let shooter = function() { // crea la función shooter
        return function(){
            alert(num);
        }
      };
      shooters.push(shooter()); // y agregarlo al array
      i++;
    }
  
    // ...y  devolver el array de tiradores
    return shooters;



}
  
let army = makeArmy();
  

// ... todos los tiradores muestran 10 en lugar de sus 0, 1, 2, 3 ...
army[0](); // 10 del tirador número 0
army[1](); // 10 del tirador número 1
army[2]();