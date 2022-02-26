//Sirve para unificar un array

const elementos = ['Fire', 'Air', 'Water'];

const rta = elementos.join('--');
console.log(rta); //Retorna todos los elementos concatenados separados por (--)


//Como convertimos una oracion en una url
const title = 'Curso de Manipulacion de Array';
//El split() me separa la cadena en string de acuerdo al patron que le indiquemos en este caso es el espacio
const cadenas = title.split(' ');
const url = cadenas.join('-');
console.log(cadenas);
console.log(url);

//Tambienlo puedo hacer 
const title2 = 'Curso de Manipulacion de Array';
const url2 = title2.split(' ').join('-').toLowerCase();//El ultimo metodo me convierte todo a minuscula
console.log(url2);
