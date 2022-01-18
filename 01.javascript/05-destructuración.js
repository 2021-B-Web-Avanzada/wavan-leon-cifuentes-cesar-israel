//05-Destructuraciión

//Objetos
const adrian = {
    nombre : "Adrian"
};
const carolina = {
    nombre : "Carolina",
    apellido : "Eguez"
};
const adrianCarolina = {
    ...carolina,
    ...adrian
}

console.log("destrucuración1", adrianCarolina)

//Arreglos

const arregloUno = [1,2,3,4,5]
const arregloDos = [2,4,6,8]

const arreglotres = [
    ...arregloUno,
    ...arregloDos,
];

console.log("superArreglo", arreglotres);

console.log(...arreglotres)