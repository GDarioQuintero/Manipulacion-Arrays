// Transforma un array como lo hace el metodo Map(), a la medida que lo va aplanando.

const users = [
    { userId: 1, userName: 'Tom', attributes: ['Nice', 'cute']},
    { userId: 2, userName: 'Nike', attributes: ['Lovely']},
    { userId: 3, userName: 'Nico', attributes: ['Nice', 'cool']},
];

//const rta = users.map(item => item.attributes).flat();

const rta = users.flatMap(item => item.attributes);//No me funciono revizar plataforma de platzi
console.log(rta);