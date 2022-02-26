//------------MAP es Inmutable------------------------------------------

//MAP es inmutable esto quiere decir que no modifica el array original, si no que crea unnuevo array con las 
//trasformaciones que hallamos hecho.

//Com MAP obtenemos un array con la misma cantidad de elementos que tienen el array original.

const letter = ['a', 'b', 'c', 'd'];

//Sin utilizar map()
const newArray = [];
letter.forEach(element => {
    newArray.push(element + '-->'); //push es un metodo mutable
});
console.log('original', letter);//array orginal no sufre ninguna trasformacion
console.log('copia sin map', newArray);//Array copia del array original aplicandole una trasformacion.


//Utilizando map() - nos ahorramos mucho codigo
const newArrayMap = letter.map(element => element + '++');
console.log('copia con map', newArrayMap);


