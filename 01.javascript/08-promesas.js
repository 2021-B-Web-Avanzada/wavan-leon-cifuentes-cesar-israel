//08-promesas.js

const fs = require('fs')

function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise(//Definición de la promesa
        (
            resolve, //return
            reject   //throw
         ) =>{
            if(numero % 2 === 0 ){
                resolve(numero);
            } else {
                reject("No es par =C");
            }
        }

    )
    return miPrimeraPromesa
}

function promesaElevarAlCuadrado (numero){
    const miPrimerPromesa = new Promise(
        (resolve, reject) =>{
            const numeroElevadoACuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoACuadrado)

        }
    );
    return miPrimerPromesa
}

promesaEsPar(6)
    .then( //aceptan un return de promesas
        (datosProomesa)=>{
            console.log(datosProomesa);
            return promesaElevarAlCuadrado(datosProomesa)
        }
    ) // try
    .then(
        (datosElevarAlCuadrado)=>{
            console.log(datosElevarAlCuadrado)
        }
    )
    .catch(
        (error) =>{
            console.log(error)
        }
    ) //catch
    .finally() //finally