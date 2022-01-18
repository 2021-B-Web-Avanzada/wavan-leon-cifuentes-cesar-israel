// 01-javascript/
//  /Variables
//MUTABLES
var numerouno = 1;
numerouno = 5;
var numerodos = 2;
numerodos = 8;
//INMUTABLES
const configuracionArchivo = "PDF";
//configuracionArchivo = "XML";
//Se va a preferir CONST > LET pero nunca VAR

//TIPOS DE VARIABLES
const umero = 1; //number
const sueldo = 1.2; //number
const texto = "César"; //string
const apellido = "León"; //string
const booleanos = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined
console.log(typeof  hijos);
console.log(typeof  zapatos);
console.log(typeof  apellido);
console.log(typeof  Number("asd")) //number;
console.log(  Number("asd")); //NaN


//Truty y Falsy

if (""){
    console.log("string vacio es verdadero")
}else{
    console.log("String vacio es Falsy")
}

if (""){
    console.log("string con datos es verdadero")
}else{
    console.log("String con datoses Falsy")
}


if(-1){
    console.log("Negativos es verdadero")
}else{
    console.log("Negativos es verdadero")
}

if(0){
    console.log("Cero es verdadero")
}else{
    console.log("\"Cero es verdadero")
}
if(1){
    console.log("Positivo es verdadero")
}else{
    console.log("Positivo es verdadero")
}

if (null){
    console.log("Null es truty");
}else{
    console.log("Null es falsy");
}

if (undefined){
    console.log("undefined es truty");
}else{
    console.log("undefined es falsy");
}

//OBJETOS JAVASCRIPT
const cesar = {
    nombre: "César", //llave: valor
    apellido: 'León',
    edad: 23,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40'
    },
    mascotas: ['Negro', 'OSO']
};
//Acceso a propiedades
//primera forma
cesar.nombre;
cesar.apellido;
//segunda forrma
cesar["nombre"];
cesar["apellido"];
//ASIGNACIÓN
console.log(cesar);
cesar.nombre = "Israel";
console.log(cesar);
cesar.nombre = "César";
console.log(cesar);

// cesar.sueldos; //undefine
// console.log(cesar.sueldos)

cesar.sueldos = 1000;
console.log(cesar.sueldos);

//variables a undefined

cesar.nombre = undefined;
console.log(cesar);
console.log(Object.keys(cesar));//visualizar llas llaves
console.log(Object.values(cesar));//visualizar los valores

//USO DE DELETE

delete cesar.nombre ;//Se elimina el nombre
console.log(cesar);
// VALORES POR VALOR O REFERENCIA
// Las variables por valor en JS son las primitivas

let edadCesar = 23;
let edadIsrael = edadCesar //Guardamos una primitiva en otra variable

console.log(edadCesar) //23
console.log(edadIsrael) //23
edadCesar = edadCesar + 1
console.log(edadCesar)//24
console.log(edadIsrael)//23

// VARIABLES POR REFERENCIA
// Aquí entran los objetos (arreglos y objetos js):
// let rafael = {
//     nombre : "Rafael"
// };
// let lenin = rafael
// console.log(rafael)
// console.log(lenin)
// lenin.nombre = "Lenin"
// console.log(rafael)
// console.log(lenin)
//
// delete rafael.nombre
// console.log(rafael)
// console.log(lenin)
let rafael = {
    nombre : "Rafael"
};
let lenin = Object.assign({},rafael)
console.log(rafael)
console.log(lenin)
lenin.nombre = "Lenin"
console.log(rafael)
console.log(lenin)

let arregloNumeros = [1,2,3,4,5,5]
let arregloClonado = Object.assign([],arregloNumeros)
console.log(arregloNumeros)
console.log(arregloClonado)
arregloNumeros[0] = 100
arregloClonado[0] = 0
console.log(arregloNumeros)
console.log(arregloClonado)