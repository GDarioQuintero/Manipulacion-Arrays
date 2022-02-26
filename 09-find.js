//Es muy similar a filter solo que find solo va a retornar un objeto que cumpla con la condicional
//find devuelve directamente el objeto que cumpla conla condicional, no lo devuelve como un array
//Siempre devuelve un elemento el primero que cumpla con la condicion asi hallan mas elementos que 
//cumplan con la condicion.


const num = [7, 5, 3, 2];

const elemento = num.find(item => item < 5)
console.log(elemento);//retorna 3 ya que es el primer elemento del array que comple con la condicion.

const elementoIndex = num.findIndex(item => item < 5)
console.log(elementoIndex);//me retorna la posicion en que se encuentra el elemento dentro del array 


//ALgo mas complejo


const team = [
    {
        name: 'German',
        id: 1110174423,
    },
    {
        name: 'Dayanna',
        id: 1110556462,
    },
    {
        name: 'Salome',
        id: 1111464262,
    },
];

const rta = team.find(item => item.id === 1110556462);
console.log('Elemento', rta);//Retorna el objeto Dayanna
const rtaIndex = team.findIndex(item => item.id === 1110556462);
console.log('Index', rtaIndex);//Dayanna esta en la posicion 1