//Es un metodo que si almenos un elemento cumple con una condicion retorna true y si ningun elemento
//cumple la condicion retorna false

const numeros = [1, 2, 7, 9];


//Sin some()
let res1 = false;
const res = numeros.forEach(item => {
    if (item % 2 === 0) {
        res1 = true;
        return;//Corta la ejecucion de las interacciones cuando cumpla con la condicion
    }
})
console.log('Sin some():', res1);

//Con some()
const res2 = numeros.some(item => item % 2 === 0);
console.log('con some(): ', res2);

//Algo con objetos
const orders = [
    {customerName: 'German', total: 123, delivered: false},
    {customerName: 'Dayanna', total: 23, delivered: false},
    {customerName: 'Josue', total: 13, delivered: true},
    {customerName: 'Salo', total: 12, delivered: false},
]

//no hay necesidad de escribir === true, ya que con la sola condicionretorna unvalor boleano true o false 
const res3 = orders.some(item => item.delivered);
console.log('Son con Objetos:', res3);
