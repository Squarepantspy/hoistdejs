//Asignacion6
var genre; // se eleva var
function rewind(){ // se eleva la funcion
    var genre; //se eleva localmente
    genre="rock";
    console.log(genre);
    genre="r&b";
    console.log(genre);
}
console.log(genre); // se imprime undefined
genre="disco";
rewind();
console.log(genre);
//output esperada: undefined, rock, r&b, disco
/* original output : undefined, rock, r&b, disco OK
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);*/

