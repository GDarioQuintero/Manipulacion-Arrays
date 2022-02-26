//coje un array y lo reduce a un solo valor, se utiliaza mucho para hacer calculos

const totales = [1, 2, 3, 4, 5];

//sin reduce()
let suma = 0;
totales.forEach(item => {
    suma = suma + item;
})
console.log('sin reduce', suma);

//con reduce()
const suma2 = totales.reduce((contenedor, item) => contenedor + item, 0);
console.log('con reduce', suma2);


//ALgo mas complejo
const orders = [
    {customerName: 'German', total: 123, delivered: true},
    {customerName: 'Dayanna', total: 23, delivered: false},
    {customerName: 'Josue', total: 13, delivered: true},
    {customerName: 'Salome', total: 12, delivered: true},
]
//ago la sumatoria de los totales de el array orders
const total = orders.reduce((sumatoria, item) => sumatoria + item.total, 0);
console.log(total);

const filter = orders.filter(item => item.delivered);
const totalFilter =  filter.reduce((sum, item) => sum + item.total, 0);
console.log(totalFilter);


//Reto
const arrayNum = [1, 3, 2, 4, 5, 4, 7, 8, 9, 1, 2, 4, 6, 7, 4, ,3, 2, 6, 10];

// let ran1a5 = 0;
// let ran6a8 = 0;
// let ran9a10 = 0;
const res = arrayNum.reduce((obj, item) => {
    if (item > 0 && item < 6){
        obj.uno_cinco++;
    }
    if (item > 5 && item < 9){
        obj.seis_ocho++;
    }
    if (item >= 9 && item <= 10){
        obj.nueve_dies++;
    }
    return obj;
}, {uno_cinco: 0, seis_ocho: 0, nueve_dies: 0,})
console.log(res);