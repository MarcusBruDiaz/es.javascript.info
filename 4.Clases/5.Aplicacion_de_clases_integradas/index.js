//Clas clases integradas como Array, Map y otros tambien son extensibles.

//Veamos un ejemplooi donde creamos una clase PowerArray y extendemos de Array metodos.


class PowerArray extends Array{

    isEmpty(){
        return this.length === 0;
    }

}


let arr= new PowerArray(1,2,5,10,50);

console.log(arr.isEmpty());

let filteredArr = arr.filter(item =>item>=10);

console.log(filteredArr);


