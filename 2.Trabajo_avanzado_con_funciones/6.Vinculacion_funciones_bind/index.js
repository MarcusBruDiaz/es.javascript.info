// ejemplo de vinculacion de funciones:


let user={
    name:"Marcus",
    saiHy(){
        console.log(`Hello ${this.name}`)
    }
};

function sayHi(phrase){
    console.log(`${phrase} ${this.name}`);
}

let funcThisVinculado= sayHi.bind(user);// Aqui vinculamos el this de saiHy al contexto del objeto user.

funcThisVinculado();  // se llama com cualquier otra funcion, pero la diferencia es que  tiene un conexto fijo y/o vinculado.

funcThisVinculado("Hello!"); // aqui se le pasan los argumentos normalmente como si se le estuvieran pasando a la funcion original.


// vamos a intentarlo con un  metodo de un objeto




let metodoVinculado=  user.saiHy.bind(user);// se vincula al metodo el contexto y se vuelve fijo

user={
    saiHy(){alert("Another user in setTimeOut")} // aqui intentanmos cambiar el metodo.
};

metodoVinculado();// pero la ejesucion recuerda donde fue vinculado y no imporeta la linea anterior.


// felejos ahora parametros


function mul(a,b){
    return a*b;
}


let double= mul.bind(null,2);// aqui estamos finaldo el parametro 2 como base, y se le pasa un contexo null, en estop caso por que no necesitamos el this.


console.log(double(2));//  se llama a la funcion double y se le pasa el argumento 2 queseria b de la funcion mul.


/* 
Arreglar una función que perdió "this"
importancia: 5
La llamada a askPassword() en el código a continuación debe verificar la contraseña y luego llamar a user.loginOk/loginFail dependiendo de la respuesta.

Pero lleva a un error. ¿Por qué?

Arregle la línea resaltada para que todo comience a funcionar correctamente (no se deben cambiar otras líneas).


 */
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user1 = {
    name: 'John',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
};

askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1));



function askPassword1(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user2 = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
askPassword1(user2.login.bind(user2,true), user2.login.bind(user2,false)); // ?


let user3 = { name: "John", years: 30 };

({name:nombre,years:edad}= user3);

console.log(nombre);
console.log(edad);