//Asignacion 7
function learn(){ // elevacion de la funcion
    var dojo; //elevacion de la variable ambito local
    dojo= "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo= "san jose"; // asignar a dojo un valor
console.log(dojo); // imprime san jose
learn(); // llama a la funcion
console.log(dojo);// vuelve a imprimir san jose global
//output esperada san jose seattle burbank san jose
/* Original output san jose seattle burbank san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);*/

