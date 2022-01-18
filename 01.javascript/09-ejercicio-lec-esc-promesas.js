// 09-ejercicio-lec-esc-promesas.js

const fs = require('fs');

/*
Hacer una función que me acepte como parámetro una variable con el path del archivo
 y el contenido a agregar al contenido del archivo. La función debe tomar estos dos
 parametros y leer el archivo y añadir el texto al final del archivo. Al final vamos
  a leer el archivo nuevamente e imprimirlo en consola. Debe ser realizado con promesas
  */
function promesaLeerArchivo(path){
    const lecturaPromesa = new Promise(//Definición de la promesa
        (
            resolve, //return
            reject   //throw
        ) =>{
            fs.readFile(
                path,
                "utf-8",
                (errorVariablle, contenidoVariable) => {
                    if(errorVariablle){
                        reject("No se pudo leer el archivo")
                    }else{
                        resolve(contenidoVariable)
                    }

                }
            );
        }
    );
    return lecturaPromesa

}
function promesaEscribirArchivo(path, contenidoActual,nuevoContenido){
    const promesaEscritura = new Promise(
        (resolve,
        reject
    )=>{
            fs.writeFile(
                path,
                contenidoActual+"\n"+nuevoContenido,
                {flag: 'w'},
                (error)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve("Escritura exitosa")
                    }
                }
            );
        });
    return promesaEscritura
}
function ejercicio(path,nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            (datosPromesa)=>{
                console.log("Lectura 1",datosPromesa);
                return promesaEscribirArchivo(path,datosPromesa,nuevoContenido);
            }
        )
        .then(
            (datosEscritura)=>{
                console.log(datosEscritura)
                return promesaLeerArchivo(path)
            }
        )
        .then(
            (datosLectura)=>{
                console.log("Lectura2:", datosLectura )
            }
        )
        .catch(
            (error)=>{
                console.log("error: ",error)
            }
        )
        .finally()
}
ejercicio('./06-ejemplo.txt','--Buenas tardes');