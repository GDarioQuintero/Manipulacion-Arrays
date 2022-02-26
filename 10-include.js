//Me dice si un elelemnto esta dentor de un array
//Include funciona para array(si buscamos un elemento enun array) y para string(Si buscamos una cadena
//dentro de un string) 
const colores = ['red', 'white', 'black', 'yellow', 'orange', 'blue'];

const rta = colores.includes('pink');
console.log(rta);//retorna false por que el elemento no esta enel array

