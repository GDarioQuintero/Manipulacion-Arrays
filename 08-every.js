//Todos los elementos deben de cumplir con la condicion para que retorne un true de lo contrario 
//retornara false

const num = [1, 5, 6, 8, 3, 9];

const rta = num.every(item => item < 9); //retorna false por que hay un elemento que no cumple la condicion.
console.log(rta);

//-------------------RETO-----------------------------------------------------
//Evaluar que todos tengan una edad menor a 15 años

const team = [
    {
        name: "German",
        age: 14,
    },
    {
        name: "Dayanna",
        age: 13,
    },
    {
        name: "Josue",
        age: 10,
    },
    {
        name: "Salome",
        age: 11,
    },
]

const rta2 = team.every(item => item.age < 15); 
console.log(rta2);