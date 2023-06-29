import { user } from "./user.js";

console.log(user);// esto aqui daria un error debido que la variable de orden superior user no ha sido exportada del fichero user.js y muhco menos en este fichero se ha importado.


//el error originar se solucionao ewxportando la variable user desde user.js e importando import { user } from "./user.js";

