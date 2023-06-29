

function sayHi(user){
    console.log(`Hello, ${user}`);
}


function sayBye(user){
    console.log(`Bye , ${user}`);
}


export {sayHi, sayBye};

export {sayHi as hi1 , sayBye as bye1};


export default class User1{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`Hello, ${this.name}`)
    }
}

