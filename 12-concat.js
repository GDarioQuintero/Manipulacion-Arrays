//Sirve para concatenar varios array en uno solo
//Es inmutable 

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

const arrayFinal = num1.concat(num2);// Genera unnuevo array conla fucion de dos array
console.log(arrayFinal);

//Modifica el array original sin necesidad de crear otro array
num1.push(...num2);
console.log(num1);

