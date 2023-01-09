//Asignacion 8 Bonus
function makeDojo(name, students){
    const dojo ={}; // se inicializa const objeto llave valor
    dojo.name = name;
    dojo.students= students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //algo constante que queremos hacer variable con esto
    }
    return dojo;
}
console.log(makeDojo("Chicago",65));
console.log(makeDojo("Berkeley",0));
/*Original output type error asignando una variacion a un const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}*/

