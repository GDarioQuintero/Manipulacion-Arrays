//Manipular array que tienen otros array dentro para voverlo un array unico

const matriz = [
    [1, 3, 6, 5, [4, 5]],
    [2, 8, 0, [1, 6, 8, [4, 7, 0, [1, 5, 8]]]]
];

const rta = matriz.flat(3)//No me quiso funcionar verificar en la plataforma de comentarios de platzi
console.log(rta);



// -----------------------RETO----------------------------
//aplanar un array que contenga varios array adentro y dejarlos en un solo array
function isArray(subject){
    return Array.isArray(subject);
}

function aplanarArray (subject){
    let rta = [];
    recursiva(subject);
    function recursiva(subject) {
        for (key in subject) {
            const keyIsArray = isArray(subject[key]);
            if(keyIsArray) {
                recursiva(subject[key]);
            } else {
                rta.push(subject[key]);
            }
        }
    }
    return rta;
}
console.log(aplanarArray(matriz));
