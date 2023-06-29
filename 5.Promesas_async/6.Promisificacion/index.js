//La promificacion es una conversion que convierte a una funcion que recibe un callback  a una funcion que devuelve una promesa.

//Vamops a promificar la fncionm loadScript vista en capitulos anteriores:


function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error de carga de script ${src}`));
  
    document.head.append(script);
  }
  

let loadScriptPromise= function(src){
    return new Promise((resolve,reject)=>{
        loadScript(src,(err,script)=>{
            if(err) reject(err);
            else resolve(script);
        });
    });
};


loadScriptPromise("/5.Promesas_async/1.Introduccion_Callsback/callback.js")
    .then(console.log)