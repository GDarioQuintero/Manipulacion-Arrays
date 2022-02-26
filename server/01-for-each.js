//----------------------------------- ForEach----------------------------------------------

//Es muy utilizado para recorrer el array elemento por elemento

const letters = ["a", "b", "c"];

//con un simple for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log("for " + element);
}

//Con forEach con una array Function
letters.forEach(item => console.log("forEach " + item));