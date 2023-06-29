//Introducción: callbacks


//Muchas funciones son proporcionadas por el entorno de host de JS que permiten programar acciones asincronas. En otras palabras, acciones que iniciamos ahora pero que terminaran despues.

//Por ejemplo de estas funcions setTimeOut



function loadScript(src){


    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);

}




//loadScript('./index.js');

//Este codigo inserta en el documento una eqtiqueta nueva creada dinamicamente con <script src="./xzxxx.js"> con el codigo src dado. el navegador comienza a cargarlo automaticamente y lo ejecuta cuando la carga se coimpleta.


//El script se ejecuta "asincronicamente", ya que comienza a cargarse ahora, pero la ejecucion se hae mas tarde cuando la funcion haya finalizado.


//El codifgo que se encuente debajo de loadScript('./index.js'), se esperara que finalice la carga del script.

//digamos que necesitams usar el nuevo script tan pronto se cargue. ESe cerip que pasamos cunu argumetno tiene nuevas funciones yu qiueremos ejecutarlas.

//Si hacemos debajo de llamar a loadScript('./index.js'); inmediatamente queremos utilziar las funciones que tiene ./index.js esto nos generaria un error 

//Naturalmente, el navegardor n probablmente no tuvo tiempo de cargar el script. Hasta el momentom la funcion loadScript no porporcina una forma de ¿rastrear la finalizacion de la carga.El script se carega y finalmente se ejecuta. Pero nos gustaria saber cuando sucerde la carga para asu usar las funciones y variables nuevas del nuevo script.


//Agregremos una funcion callback como segundo argumento para loadScript que deberia ejecutarse apenbas cargiue el script 


function loadScript1(src,callback){

    let script= document.createElement('script');
    script.src= src;

    script.onload =()=> callback(script);

    document.head.append(script);

}


loadScript1('./callback.js', function(){
    sayHi();
})



//Callback en una callback

//¿ Cmo podemos cargar dos scripts secuelciamente: el primero y despues el segundo al cargarse el primero ?

//La sulucion natural seria poner la segunda llamada loadScript dento de la callback asi:



/*

loadScript('/my/script.js', function(script) {

    alert(`Genial, el ${script.src} está cargado, carguemos uno más`);
  
    loadScript('/my/script2.js', function(script) {
      alert(`Genial, el segundo script está cargado`);
    });
});

*/



//Manejo de errores:

//En los ejemplos anteriores no consideramos los errores generados si no carga un scripts, nuestra callback deberia poder raccionar ante los errores.



//Hagamos una version mejorada de loadScript que rastrea lo errores:;


function loadScriptUpdate(src,callback){

    let script= document.createElement('script');
    script.src= src

    script.onload = ()=>callback(null,script);
    script.onerror= ()=>callback(new Error(`Error de carga de script con ${src}`));

    document.head.append(script);

}

//uso:

loadScriptUpdate('/my/script.js', function(error,script){

    if(error){
        console.log(error);
    }else{
        console.log("Genial se ha establecido el script");
    }
});


//La recete que hemos utilziado se llama "callback error primero".

//la convencion es :


//1.El primer argumento de la callback esta reservado para el error , entonces se llama a callback(error).

//2.El segundo argumento(y los siguientes si son necesarios) son utilizados para un resultado exitoso. enotnces se llama a  callback(null,result1,result2, ..... resuiltn)

//Asi utilizamos tan solo una funcion callback para transferir informacion como arfa manejar los errores.



