//Asignacion 5
var mean; // se eleva var
mean(); // anclado
console.log(food);
mean= function(){
    var food;
    food="chicken";
    console.log(food);
    food="fish";
    console.log(food);
}
console.log(food);
//output esperada : que no reconozca mean como funcion
/* original output type error mean is not a function 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);*/

