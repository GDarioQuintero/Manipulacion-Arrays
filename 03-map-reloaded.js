const orders = [
    {customerName: 'German', total: 123, delivered: true},
    {customerName: 'Dayanna', total: 23, delivered: false},
    {customerName: 'Josue', total: 13, delivered: false},
    {customerName: 'Salo', total: 12, delivered: true},
]

//con map() podemos crear un nuevo array los atributos que queramos del original, esto sirve para hacer limpieza 
//y trabajar con los datos que deseemos.
const total = orders.map(item => item.total);

//Agregamos un nuevo elemento al objeto, pero de esta manera lo que hacemos es que copiamos la  referencia en
// //memoria y modificamos tanto el nuevo array como el original
// const newArray = orders.map(item => {
//     item.tax = 0.19;
//     return item;
// })

//Para copiar nuevos objetos y agregarle nuevos elementos sin que modifiquemos el objeto originasl lo hacemos 
//de la siguiente manera
const newArray2 = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    };
});

console.log('con nuevo item pero sin referencia en memoria', newArray2);
//console.log('con nuevo item pero con referencia en memoria ',newArray);
console.log('Array original ', orders);
console.log('nuevo array con los totales ', total);