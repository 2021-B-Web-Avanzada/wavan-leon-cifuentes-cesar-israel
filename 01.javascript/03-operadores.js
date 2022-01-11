//03-operadores.js

const arreglo =[
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'César',
        nota: 6
    },
    {
        id: 3,
        nombre: 'Josue',
        nota: 7
    },
    {
        id: 4,
        nombre: 'Israel',
        nota: 8
    },
    {
        id: 5,
        nombre: 'Erick',
        nota: 9
    },
    {
        id: 6,
        nombre: 'Lesly',
        nota: 10
    },
]

//FUNCIONES CON PARÁMETROS
//FIND
//ENVIAMOS UNA EXPRESION -> TRUTY FALSY
//DEVUELVE EL PRIMERO QUE CUMPLE LA CONDICIÓN

const  respuestaFind = arreglo
.find(
    function (valorActual, indiceActual, arregloCompleto){
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Israel"; ///EXPRESIÓN
    }
);
console.log("respuestaFind", respuestaFind);

//FIND INDEX
//enviamos una expresión -> Truty Falsy
//devuelve el primero que cumple esa condición
const respuestaIndex = arreglo
.findIndex(
    function (valorActual, indiceactual,arregloCompleto){
        return valorActual.nombre === "Israel"
    }
);
console.log("respuestaFindIndex", respuestaIndex)

// FOREACH
const respuestaForeach = arreglo
.forEach(
    function (valorActual, indiceActual, arregloCompleto){
        console.log("valorActual",valorActual);
    }
);
console.log("respuestaForEach",respuestaForeach)

// MAP (Modificar o mutar el arreglo y devuelve un nuevo arreglo)
//enviamos los datos del nuevo arreglo
//devuelve el nuevo arreglo
const respuestaMap = arreglo
.map(
    (valoractual, indiceActual,arregloCompleto)=>{
        const nuevoElemento = {
            id: valoractual.id,
            nombre: valoractual.nombre,
            nota: valoractual.nota * 2,
        };
        return nuevoElemento
    }
);

console.log("Arreglo originarl", arreglo)
console.log("Arreglo con MAP", respuestaMap)

//Filter (Filtrar el arreglo)
// enviamos EXPRESIÓN Truty FALSY
//devuelve los elementos que cumplen esa condición

const respuestaFilter = arreglo
.filter(
    (valorActual, indiceActual, arregloCompleto) =>{
        return valorActual.nota >= 7;
    }
);
console.log("respuestafilter", respuestaFilter);
console.log("arreglo",arreglo)


//SOME -> Expresión
//Devuelve BOOLEANO
//Hay alguna nota menor a nueve? si no
//OR

const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto) =>{
            return valorActual.nota < 9;
        }
    );
console.log("respuestaSome", respuestaSome)

//EVERY -> expresón
//DEVUELVE UN BOOLEAN
//TODAS LAS NOTAS SON MENORES A 9? SI NO
//AND

const respuestaEvery = arreglo.
    every(
    (valorActual, indiceActual, arregloCompleto)=>{
        return valorActual.nota < 9;
    }
);

console.log("respuestaEvery", respuestaEvery)

//[1,2,3,4,5,6,5,4,3,1]
//REDUCE     izq -> der
//REDUCE RICHT der -> IZQ
// 100 <3 Puntos de vida
// 100 -1 -2 -3 -4 -5 -4 -3 -1

const respuestaReduce = arreglo
.reduce(
    function (valorAcumulado, valorActual, indice,arreglo){
        return (valorAcumulado + valorActual.nota);
    },
    100 // Acumulador
)

console.log("respuestaReduce",respuestaReduce);