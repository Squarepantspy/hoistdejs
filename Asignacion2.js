//Asignacion 2
var needle; // se eleva var
function test(){    // se eleva la funcion test
    var needle; //se eleva needle local dentro del scope de test
    needle= 'magnet'; // se asigna valor a var
    console.log(needle);
}
needle='haystack'; //se asigna valor a needle global
test();
/*Original salida magnet OK 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}*/

