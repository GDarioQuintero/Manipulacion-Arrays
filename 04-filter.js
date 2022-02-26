//Filter es inmutable no cambia el array original si no que crear uno nuevo con los elementos que
//cumplancon la condicion.

const palabras = ['hola', 'carro', 'telefono', 'mundo', 'programacion'];

//sin filter
const newArray = [];
for (let index = 0; index < palabras.length; index++) {
    const element = palabras[index];
    if(element.length > 5){
        newArray.push(element);
    }    
}
console.log('sin filter', newArray);
console.log('original', palabras);

//con filter
const newArrayFilter = palabras.filter(item => item.length > 5);
console.log('Con filter', newArrayFilter);

//Condicionales mas complejas --> podemos crear condiciones mas complejas
const orders = [
    {customerName: 'German', total: 123, delivered: true},
    {customerName: 'Dayanna', total: 23, delivered: false},
    {customerName: 'Josue', total: 13, delivered: true},
    {customerName: 'Salome', total: 12, delivered: true},
]

const ordersFilter = orders.filter(item => item.delivered && item.total <=13);
//console.log('Con filter mas complejos ', ordersFilter);
//console.log('Original Orders', orders);

//agrega los elemntos que cumplencon el query
const buscar = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(buscar('an'));