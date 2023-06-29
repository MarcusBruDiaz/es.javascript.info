//Manejo de errores con promesas

//las promesas encadenadas son excelente manejando los errores.
//cuando la promesa es rechazada, el control salta al manejador de rechazos mas cercano.

//Miremos un ejemplo, donde estamos haciendo fetch a una url que no existe, y vemos como el .cath se encarga del error.


fetch('https://MarcusBruDiaz.com')
 .then(response=>response.json())
 .catch(error=>console.log(error.message))


// La forma mas facil de detectar todos los errores es agregado el .catch al final de la candena de promesas.


fetch('/article/promise-chaining/user.json')
    .then(response=> response.json())
    .then(user=>fetch(`https://api.github.com/users/${user.name}`))
    .then(response=>response.json())
    .then(githubUser=> new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(()=>{
            img.remove();
            resolve(githubUser)
        },3000);
    }))
    .catch(error=> console.log(error.message))


//Try..catch implicito:

//El codigo de un ejecutor de promesas y de manejadores de promesas tiene embebido un "try..catch invisible". Si occfure una exepcion, esta es atrapasa y es tratada cp,p iun rechazo.

//Por ejemplo:

new Promise((resolve,reject)=>{
    throw new Error("Error!");
}).catch(console.log);

// "try..catch invisible" embebido en el ejecutor detecta automaticamentre el error y lo concierte en una promesa rechazada.


//Lo anterior no solo sucede en la funcion ejecutora, si no tambien en los manejadores. Si hacemos throw dentro de .then, esto devolvera una promesa rechazada. Por lo que el control salta al manejador de errores mas cercano.



///por ejemplo:


new Promise((resolve,reject)=>{
    resolve("ok");
}).then(result=>{
    console.log(result);
   throw new Error("Error");// rechaza la promesa
}).catch(console.log); // meneja el error.

//Rethrowing(relanzamiento de errores):

///En un try..cath normal, podemos analizar error y quia volver a lanzarlo si no se puede manejar. Lo mismo podemos hacer con las promesas.

//Si hacemos  throw dentro de .catch, el control pasa a otro manejador de erores mas cercano . Y, si manejamos el erroe y terminador de forma correcta, enronces se continua con el siguiente manejador .then exitoso.


//En el ejemplo de abajo, el .catch maneja el error de forma axitosa.


new Promise((resolve,reject)=>{
    throw new Error("Error otra vez !!");
})
    .catch(console.log)// aqui el catch termina de forma correcta manejando el error. Entonces se ejecuta el sigfuiente manejador exitoso.
    .then(()=>console.log("El siguiente manjeador exitoso se ejecuta."))


//Vemos otro ejemplo, podemos ver otra situacion con .catch. El manejador (*) detecta el error y simplemente no puede manejarlo(en el ejemplo solo sabe que hacer con un URIError), por lo que lo lanza nuevamente.





new Promise((resolve,reject)=>{
    throw new Error("Ayyy otro error");
}).catch(function(error){  // (*)

    if(error instanceof URIError){
        // que hacer 
    }else{
        console.log("No puede manejar el error");
        throw error;// aqui lanza nuevamente el error sedfiendo el control al manejador de erroes mas cerfcano
    }
}).then(function(){
    //esto no se ejecuta
}).catch(error=>{
    console.log(`Ocurrio un error desconocido ${error}`) // este es el mas cercao y maneja el error.
});


// Rechazos no manejados:

//¿Que sucede cuando un error no es manjeado? por ejemplo, si olvidamos agregar el .catch al foinal de la cadena de promesas.

new Promise((resolve,reject)=>{
    anyThind();
}).then(result=>console.log(result));

//Enrtonce el error el error se atasca, ya qyue no hay codigo para manejarlo.

//¿Que sucede cuando ocurre un error regular y no es detectado por try..catch? El script muere con  un mensaje en la consola. Algo similar sucede con los rechazos de promesas no manejadas.

