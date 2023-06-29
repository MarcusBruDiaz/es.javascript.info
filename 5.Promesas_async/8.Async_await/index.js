//ASYNC/AWAIT

//Existe una SINTAXIS especial para trabajar con PROMESAS de una forma mas confortable, llamada "Async/Await". Es sumamente facil de entener y usar.


//FUNCIONES ASYNC

//Comenemos con la palabra async. Puede ser ubicada delante de una funcion como aqui:

async function f(){
    return 1;
}

// La palabra async delante de una funcion significa una cosa: Que la funcion siempre devolvera una promesa. Otros valoes como (1) seran enbvueltos y resueltos en una promesa automaticamente ¿

f().then(console.log);// output: 1 aqui el resultado se maneja con el controlador .then

//Aunque podriamos devolver explicitamente una promesa y seria lo mismo que el script antrior

async function m(){
    return new Promise((resolve,reject)=>{
            resolve(2);  // aqui estamos resolviendo devolver un valor 2
    })
}

m().then(console.log);//output: 2

//Entonces, async se asegura de que la funcion devuelva una promesa, o envuelva las no promesas y las transforme en una. 

//Lo anterios es bastante simple, y ahora aparece la palabra await la cual solo trabaja dentro de funciones async.

//AWAIT

//sintaxis:

//let value = await promise;

// await hace que JavaScript espere hasta que la promesa responda y devuelva su resultado.

// Aqui un ejemplo con una promesa que sesuelve en 1 segundo:


async function h(){
    let  promise= new Promise((resolve,reject)=>{  // en esta liena implementamos una promesa que sera resuelta en 1000 milisegundos.
        setTimeout(()=>resolve('¡Hecho!'),2000)

    });

    let result= await promise;  // esta linea espera con awiat a que la promesa sea resuelta.

    //el codigo que este desoyes del await tambien se suspende mientras que se completa la promesa y se obtiene el resultado.
    //console.log("se ejecuta antes de ser resuelta la promesa");

    console.log(result);

}

console.log("se ejecuta antes de ser resuelta la promesa");// esta liena se sube al comienso de escope.


//await suspende la ejecucion de la funcion hasta que se establezc la promesa, y lkuego la reanuda con  el resultado de la promesa.

h();

// No se puede usar await en funciones comunes.

//Temosemos el ejemplo showAvatar() del capitulo Encadenamiento de promesas y rescribasmoslo usando async/await:

//1. Necesitamos reemplazar los llamadaos .then con await.

//2. Tambien debemos hacer que la fucnion sea async para que aquellos await funciones.


async function showAvatar(){


    //leer nuestro JSON
    let response = await fetch("/article/promise-chaining/user.json");
    let user = await response.json();

    //leer usuario github
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser= await githubResponse.json();

    //muestra el valor
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className="promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve,reject)=> setTimeout(resolve,3000));
    
    img.remove();

    return githubUser;

}

showAvatar();

//Metodos de clase Async

//Para declarar un metodo de clase async, simplemente se le antepone async:


class Waiter{

    async wait(){
        return await Promise.resolve(`Desde metodo de clase: ${1}` );
    }
}


new Waiter().wait().then(console.log);



//Manejo de Error:

//Si una promoesa se resuelve normalmente, entonces await promise devuelve el resultado.

//pero en caso de error, dispara un error, tal como si hubiera una instruccion throw en aquella linea.

//COdifo:


async function f(){
    await Promise.reject(new Error("Whooooops!"));
}

// en situacuiojes reales, la promesa tomara un tiempo antes de entrar al rechazo. EN tal caso habra un reytardo antes de que await dispare un error.

//POdemos atrapar tal error usando try...catch, de la misma manera que con un throw naomral:



/* async function m(){
    try {
        let response = fetch('http://no-such-url');
    } catch (error) {
        console.log(error)
    }

}

 */
//m();


//en el caso anterior , como la url no existe (no such) enbtonces el erroe salta al catch. Podemos onvolver multiples lienas:

async function n(){

    try {
        let response = fetch('http://no-user-here'); 
        let user = (await response).json();
    } catch (error) {
        console.log(error)
    }
}

n();

//podemos manejar el catch en el llamado a la funcion :


async function p(){
     let responde;
     return responde = await fetch('http://no-such-url');
}


// aqui se vuelve  una promesa rechazada
//p()

// pero si en cambio capturamos un catch se maneja el error:
p().catch(console.log);

// Si olvidamos añadir .catch, obtendremos un error de promesa no manejado(visible en consola.)


//async/await   and   promise.then/catch

//Cuando usamos async/await, raramente necesitamos .then por que await maneja la espra por nosotros. Y pdemos usar un try....catch normal en lugar de .catch. 

//Pero en el nivel superior del codigo, cuando estamos fuera de cualquier funcion async, no estamos sintacticamente habilitads para usar await, entonces es practuca comun agregar .then/catch, para manejar el resultado o el error.

//async/await funciona bien con Promise.all

//Cuando necesitamos esperar por multiples promesas, podemos envolverlas en un Promise.all y luego await:

/* 
let results = await Promise.all([
    fetch(url1),
    fetch(url2)


]) */


/* TAREAS */



async function loadJson(url){
    return await fetch(url);
}

loadJson('https://javascript.info/no-such-user.json').catch(console.log);




async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}
  

function h() {
    wait().then(console.log)
}

