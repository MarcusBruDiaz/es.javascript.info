//Encadenamiento de promesas



//Se ve asi:

new Promise((resolve,reject)=>{
    setTimeout(()=> resolve(1),1000);

}).then(function(result){
    console.log(result);  // 1
    return result *2; //(1*2=2) 2 es el que pasa al siguiente manejador then 
}).then(function(result){
    console.log(result);  //2
    return result *2; //( 2* 2=4) 4 es el que pasa el siguiente manejador then
}).then(function(result){
    console.log(result);  // 4
    return result * 2; //(4 * 2=8) 8 es el que pasa al siguiente manejador then
}).then(function(result){
    console.log(result);  // 8
})

// la idea es que el resultado pase a traves de la cadena de manejadores .then
/* 
Aquí el flujo es:

1.La promesa inicial se resuelve en 1 segundo (*),

2.Entonces se llama el manejador .then (**), que a su vez crea una nueva promesa (resuelta con el valor 2).

3.El siguiente .then (***) obtiene el resultado del anterior, lo procesa (duplica) y lo pasa al siguiente manejador.

4.…y así sucesivamente. */

// Cuando un controlador devuelve un valor, se convierte en el resultado de una promesa, por lo que se llama al siguiente .then


//Devolviendo promesas:

//Un controlador ("handler"), utilizado en .then(handler), puede crear y devover una propmesa.

//En ese caso, otros manejadores esperan hasta que se estabilice(resuelva o rechace) y luego obtienen su resuñtado.



//Por ejemplo:



new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),1000);
}).then(function(result){
    console.log("----comieza ejemplo devolviendo propmesas----   :")
    console.log(result)
    return new Promise((resolve,reject)=>{  // (*)
        setTimeout(() => resolve(result * 2), 1000);
    })
}).then(function(result){ //(**)
    console.log(result);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(result * 2),1000)
    })
}).then(function(result){
    console.log(result);
})


// En este codigfo el primer .then muestra 1 y devuelve new Promise(...) en la liena (*); Despues de un segundo, se resuelve y el resultado (el argumento de resolve, aqui es result * 2) se pasa al contriolador del segundo .then. Ese controlador esta en la liena (**),muestra 2  y hace lo mismo.

//Devolver las promesas nos permite construor cadenas de acciones asincronas.


//Ejemplo mas grande : fetch

//En la programacion "frontend" las promesas a menudo se usan para solicitudes de red. Vemos un ejemplo:


//sintaxis fetch:
//let promise= fetch(url);


// Estp fetch(url), hace una solicitud a la red a la url y devuelve una promesa. La promesa se resuelve con un objeto 'response' cuando el servisor remoto responde con encabezados. pero antes de que se descargue la respuesta completa.


// Para leer la respuesta completa,debemos llamr al metodo 
//'response.text()': devuelve una promesa que se resuelve cuando se descarga el texto completo del servisodr remoto, con ese texto como resultado,


//vemos unb ejemplo haciendo una solicitud a user.json y carha su texto desde el servidor:


fetch('/article/promise-chaining/user.json')
    .then(function(response){
        return response.json();
    })
    .then(function(text){
        console.log(text.name)
    });


// el objeto response devuelto por fetch incluye el metodo response.json(), que lee los datos remotos y los analiza como JSON. 

//Hagamos una solicitud a a GitHubm cargar el perfil de iusuario y mostrar el avatar:


fetch('/article/promise-chaining/user.json')
     // en esta linea estamos resulviendo la promesa gerenada por fecth al json local dlonde estamosopteniendo el nombre de usuario
    .then(function(response){
        return response.json(); // el objeto response devuelve una promesa
    })
    .then(function(user){
        // aqui estamos resulviendo la promesa generada anteriormente por response y estamos accediento a los datos con notacion depunto gracias a convertirlo con json() . tambien este then devuelbve una nueva promesa fetch realizado a gitHub
        return fetch(`https://api.github.com/users/${user.name}`)
    })
    .then(function(response){
        // aqui se resuleve la promesa y se traen los datos en json y se devuelve otra pomesa
        return response.json()
    })
    .then(function(gitHubUser){
        //aqui estamos resolviendo a la promesa devuelva en el then anterior. gitHubUser son los datos
        // tambien estamos devolviendo otra promesa 
        return new Promise(function(resolve,reject){
            //esta promesa lo quue hace es crear una imagen u establecerle un src
              let img= document.createElement('img');
                img.src= gitHubUser.avatar_url;
                img.className= "promise-avatar-example";
                document.body.append(img);

                setTimeout(()=>{
                    img.remove();
                    resolve(gitHubUser);// la promesa resulve devolviendo el objeto gitHubUser datos
                },3000);
        })
      
    })
    .then(function(gitHubUser){
        // aqui se accede a los datos devueltos por la promesa devuelta antes , accediendo a los datos.
        console.log(`Terminado de mostrar ${gitHubUser.name}`)
    })

// como buena practica, iuna accion  asinconiza siempre debe devolver una promesa. Eso hae posible planificar acciones posteriores. INcluso si no plantemos extender la cadena ahora, es posible que necesitemos mas andelante.

//Finalmemte podemois dividir el codigfo en funciones reutilizables:


function loadJson(url){
    return fetch(url)
        .then(response=>response.json());
}


function loadGithubUser(name){
    return loadJson(`https://api.github.com/users/${name}`)
}


function showAvatar(gitHubUser){
    return new Promise(function(resolve,reject){
        let img= document.createElement('img');
        img.src = gitHubUser.avatar_url;
        img.className = 'Promise-avatar-example';
        document.body.append(img);

        setTimeout(()=>{
            img.remove();
            resolve(gitHubUser);
        },4000)
    })
}



//usu

loadJson('/article/promise-chaining/user.json')
    .then(user=>loadGithubUser(user.name))
    .then(showAvatar)
    .then(gitHubUser=>console.log(`Finish shwoing ${gitHubUser.name}`));