//04-FUNCIONES

function soloNumeros(a,b,c){
    return a+b+c;//valor a devolver
}
//JS permite el uso de funciones sin validaciones
function  soloLetras(a,b,c){//undefine
    console.log(a,b,c)
}

//Funciones nombradas - named functions

function funcionNombrada(){}

//Funciones anónimas
const funcionSinNombre1 = function (){};
let funcionSinNombre2 = function (){};
var funcionSinNombre3 = function (){};
[].forEach(function () {})
funcionSinNombre1()
funcionSinNombre2()
funcionSinNombre3()

// Fat Arrow Function - Funciones Anónimas
const funcionFarArrow1 = () =>{};
let funcionFarArrow2 = () =>{};
var funcionFarArrow3 = () =>{};
[].forEach(()=>{})
funcionFarArrow1()
funcionFarArrow2()
funcionFarArrow3()

const funcionFatArrow4 = () =>{};
const funcionFatArrow5 = (x) =>{
    return x + 1;
}
const funcionFatArrow6 = (x) => x+1; //fat arrow - una sola línea - omito llaves

const funcionFatArrow7 = x => x + 1; //Si solo tenemos un parámetros omito los parentesis

const funcionFatArrow8 = (x,y,z) => x+y+z;

//Con parámetros infinitos:
///solo se puede tener uno de estos por función
function sumarNumeros(... otrosNumeros){ //parámetros infinitos que llegan en un arreglo
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) =>{
            total = total + valorActual
        }
    );
    return total;
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)