//Promise API

//Hay 6 metodos estaticos en la clase  Promise. Veremos sus casos de uso aqui:


//Promise.all


//Digamos que queremos que muchas promesas se ejecuten en paralelo y esperar hasta que todas ellas esten listas.

//Por ejemplo, descargar varias URL en paralelo y procesar su contenido en cuando todas ellas finalicen.


//la sintaxis es :

//let promise= Promise.all(iterable);


//toma un itreable (usualmente un array bde promesas) y devuelve una nueva promesa

//Esta nueva promesa se resuelve en cuanto todas las promesas listadas se resuelven y el array de aquillos resltados se vuelve su resultado.



//EJ:

Promise.all([
    new Promise(resolve=>setTimeout(()=> resolve(1),3000)),
    new Promise(resolve=> setTimeout(()=>resolve(2),2000)),
    new Promise(resolve => setTimeout(()=>resolve(3),1000))
]).then(console.log);


//El orden de los mientros del array es el mismo que en de las promesa de origen. Aunque una promesa tome mas tiermpo que potra en resolverse el orden se respeta.

// Un triuco comun es mapear un array de datps de trabajo dentro de un array de promesas, y entonces envolverlos dento de un Promise.all


let urls=[
    'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];


let requests = urls.map(value=> fetch(value));


Promise.all(requests)
    .then(response=>response.forEach(
        response=> console.log(`${response.url}: ${response.status}`)
    ));


//Hagamops ahora un ejemplo mayor con fetch onde tengamos un array con los nombre de los usuarios de gitHuby¿ y este sea pasado para jhacder la peticion cpon fetch:


let names=['iliakan','remy','jeresig'];


let requests1 = names.map(name=> fetch(`https://api.github.com/users/${name}`));


Promise.all(requests1)
        .then(responses=>{

            for(let response of responses){
                console.log(`${response.url}: ${response.status}`);
            }

            return responses;
        })
        // mapea el array de resultados dentro d un array de responses.json() para leer sus contenidos.
        .then(responses=> Promise.all(responses.map(r=> r.json())))
        //todas las respuesas JSOn son analizadas: "users" es el array de ellas.
        .then(users=>users.forEach(user=>console.log(user.name)));

// Si cualesquiera de las promeas es rechazada, la promesa devuelta por Promise.all inmediatamente rechazada: "reject" con ese error.

//By excanple:

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert); // Error: Whoops!

//  Aqui la segunda promesa se rechazas en dos segundos. Estop lleva a un rechazo inmediao de Promise.all, entones .catch se ejecuta: el error del rechazo se vuelve la salida del Promise.all entero.


//Normalmente Promise.all, recie un array de promesas. pero en algnos casos ese iterable no soloc aunta con promesas si no con valores establecidos, entonces losw devuelve , veamoslo como un ejemplo:


Promise.all([
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(1),1000);
    }),
    2,
    3
]).then(responses=>responses.forEach((response)=>console.log(response)))



//Promise.allSettled

// Esta es una adicion reciente a la especificacion.

//Promise.all, rechaza como un todo si cualesquiera de sus promesas es rechazada.Estop es muy provechozo cuando necesitamos que todos lo casos sean exitosos.

/// en cambio, Promise.allSettled esprea que todas las promesas se resuelvan sin importar sus resultados. y al final devuelve un array de objetos que se puede tener este estilo:

/* 
[
    {status:"fulfilled",value:result} para respuestas exitosas
    {status:"rejected", reason:error} para respuestas con errores
] 
*/

// Por ejemplo queremos gacer fetch de la informaciond eunos usuarios, y si algiuno falla aun querriamos obtener la informacion de los otros.

//usemos Promise.allSettled:

let urls1=[
    'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
]


Promise.allSettled(urls1.map(url=> fetch(url)))
    .then(results=>{
        results.forEach((result,num)=>{
            if(result.status=="fulfilled"){
                console.log(`${urls1[num]}: ${result.value.status}`);
            }
            if(result.status =="rejected"){
                console.log(`${urls1[num]}: ${result.reason}`);
            }
        });
    });



//Promise.race

//Similar a Promise.all, pero espera solamenre por la primera respuestra y obtiene su resultado (o error).

//La sintaxis:

//let promise = Promise.race(iterable);


//Ej:


Promise.race([
    new Promise((resolve, reject)=> setTimeout(()=>resolve(2),1000)),
    new Promise((resolve,reject)=> setTimeout(()=>reject(new Error("Que error tan grande")),2000)),
    new Promise((resolve,reject)=> setTimeout(()=>resolve(3),3000))
]).then(console.log)

// La primera promesa fue la mas rapida, por lo que vuelve resultado, en cuanto la proemra rsponde gana la carrera y todos los resultados o errores posteriores son ignorados.