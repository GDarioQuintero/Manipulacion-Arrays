const num = [1, 3, 5, 4, 3, 5, 5,];

const res = num.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(res);

//Algo mas complejo
const data = [
    {
        name: 'nicolas',
        level: 'bajo',
    },
    {
        name: 'Geraman',
        level: 'medio',
    },
    {
        name: 'Salome',
        level: 'alto',
    },
    {
        name: 'Josue',
        level: 'bajo',
    },
    {
        name: 'Rueben',
        level: 'medio',
    }
];

//podemos concatenar los metodos
const res1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(res1);