/* Recolección de basura */

//La gestiond memoria en JavaScript se realiza de forma automatica e invisible para nosotros. todos los tipos de datos, primitivos, objetos,funciones.. requieren memoria.

//Pero que sucede cunado algo no se necesita mas ? como hace el motos de javascript para encontratlo y limpiarlo?

// para eso esciste el siguiente concepto:


/* Alcance */

//El concepto pricipal en javascript para el manejo de memoria se llama Alcance.

//Para ver simple este concepto, se puede decir que los valores "Alcanzables", son aquellos que se puedee acceder o utulizar: se garantiza que seran conservados en momoria.


//Hay un conjunto de valores inherentemente accesibles, que no se pueden eliminar por razones obvias. Por ejemplo:

//1.La funcion ejecutandoce actualmente, sus variables locales y parametros.

//2.otras funciones en la cadena actual de llamadas anidadas, sus variables y parametros.

//3. variables globales.

//Cualquier otro valor se considera accesible si se lo puede alcanzar desde una raiz por una referencia o por una cadena de referencias.

//Por ejemplo si tenemos una variable blobal que hace referencia a un objeto, y ese objeto tiene una propiedad que hace referencia a otro objeto, este  ultimo tambien se considera accesible 
// Y aquellos a los que este objeto haga referencia tambien son accesibles.


/* Un ejemplo sencillo */

let user={
    name:"Marcus"
};

// aqui la variable global "user", hace referencia al objeto {name:"Marcus"}.

//Si se sobrescribe el valor de "user", se pierde la referencia al objeto:

user= null;

//ahora el objeto {name:"Marcus"} se vuelve inalcanzable. No hay una forma de acceder a el. El recolector de basura desechara los datos y liberara memoria.



/* Dos referencias */

//Ahora imaginemos que copiamos la referencia de user en admin:

let user1={
    name:'Manuel'
};

let admin = user1;

// ahora se le cambiuamos el valos a user1 .

user1=null;


// aun cambiandole el valor a user1 el objeto {name:'Manuel'}; sigue siendo accesible por la variable global admin, por lo que el objeto debe quedar todavia en memoria, pero si sobrescribimos tambien admin, ahi si se eliminaria el objetpo de la memoria.



/* Objetos entrelazados */


//Ahora un ejemplo más complejo. La familia:

function marry(man,woman){
    woman.husband=man;
    man.wife= woman;

    return {
        father: man,
        mother: woman
    }
}


let family = marry({name:'Marcos'},{name:'Lina'});



//la fucnion marry "casa" dos objetos dandoles referencias entre si  y devuelve un nuevo objeto que los contiene a ambos.

//AQUI TODOS LOS OBJETOS SON ACCESIBLES 

//AHORA BORREMOS DOS REFERENCIAS:

delete family.father;

console.log(family);

delete family.mother.husband;

//No es suficiente eliminar solo una de estas dos referencias, porque todos los objetos aún serían accesibles.

//Pero si eliminamos ambos, entonces podemos ver que John ya no tiene referencias entrantes:

//console.log(family);


// las referencias de salidas no importan, por ejemplo la referencia que hace fatther a mother esta no importa para la accesibildiad, loas que importan son las entrantes.

//entonces como se eliminarron las referencias de father en mother ya father no es accesible y por eso se elimina de memoria.


// despues de la recolecciond e basura, solo queda el objeto global family haciendo referencia a mother.



/* Isla inalcanzable */


// esto se haria por ejemplo cambiandole el valor a la raiz que seria la variable global family.

family=null;

// aqui es obvio que los objetos Marcos y Lina estan vinulados entre si, pero no puede ser accedidos desde la raiz que seria family, por lo que se vuelven inalvcanzables y se eliminan de memoria.


/* Algoritmos internos */

//El algoritmo básico de recolección de basura se llama “marcar y barrer”.

//Los siguientes pasos de “recolección de basura” se realizan regularmente:

//El recolector de basura busca las raíces y las “marca” (recuerda).
//Luego visita y “marca” todos los objetos referenciados por ellas.

//Luego visita los objetos marcados y marca sus referencias. Todos los objetos visitados son recordados, para no visitar el mismo objeto dos veces en el futuro.

//…Y así sucesivamente hasta que cada referencia alcanzable (desde las raíces) sean visitadas.

//Todos los objetos que no fueron marcados se eliminan.

