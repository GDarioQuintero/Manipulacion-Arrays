const products = [
    { title: "pizza", price: 121, id: 1 },
    { title: "Burger", price: 234, id: 2 },
    { title: "Hot cakes", price: 342, id: 3 },
]

const myProducts = [];
let nuwArray = [];
const productIndex = products.findIndex(item => item.id === 2);//obtengo laa posicion del elemento 
if (productIndex !== -1) {//si el elemento existe 
    myProducts.push(products[productIndex]);//agrego el elemento al nuevo array
    //agrego los elementos que quedaron en un nuevo array sin afectar el original
    nuwArray = products.filter(item => item.id !== 2);
}
console.log("despues de la compra", myProducts);
console.log("products", products);
console.log("Nuevo", nuwArray);
//console.log("nuevo array", nuwArray);
// HAcer un  Update

const productsV2 = [
    { title: "pizza", price: 121, id: 1 },
    { title: "Burger", price: 234, id: 2 },
    { title: "Hot cakes", price: 342, id: 3 },
];

const update = {
    id: 2,
    changes: {
        price: 200,
        descripcion: 'deliciocso'
    },
};

//const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
//al elemento de esa posicion le agregamos los cambios respetando los atributos que ya existen
//productsV2[productIndexV2] = {
//    ...productsV2[productIndexV2],//elemento original
//    ...update.changes,//agregamos los cambios
//};
//console.log(productsV2);

//RETO ----------------> copiar los cambios en unnuevo array sin afectar al array original

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
//al elemento de esa posicion le agregamos los cambios respetando los atributos que ya existen
const nuwArray = {...productsV2};
nuwArray[productIndexV2] = {
    ...nuwArray[productIndexV2],//elemento original
    ...update.changes,//agregamos los cambios
};
console.log(productsV2);
console.log(nuwArray);

