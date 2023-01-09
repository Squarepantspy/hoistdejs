//Asignacion 4
var food; // se eleva var
function eat(){ // se eleva la funcion
    var food; // se eleva la variable en el ambito local
    food = 'half-chicken'; // se asigna valor en caso de ser llamado
    console.log(food); 
    food = 'gone';
}
food= 'chicken'; // se asigna valor a food global
console.log(food); // se imprime food global
eat(); // se imprime food local
//output esperada:
// chicken
// half-chicken

/*original output chicken half-chicken OK
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}*/



