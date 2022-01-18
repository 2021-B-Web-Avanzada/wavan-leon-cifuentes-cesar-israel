const fs = require("fs")

/*hacer una función que me acepte como parámetro una variable con el
path del archivo yy el contenido a agregar al contenido el archivo.
La función debe tomar estos dos parámetros y leer el archivo y añadir e texto a final del archivo
 */

//función de escritura
// fs.writeFile(
//     path,
//     contenido,
//     'utf-9',
//     (error)=>{
//
//     }
// );

function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        path, // ruta
        "utf-8", //formato de codificación
        (errorVariablle, contenidoVariable) => {
            if(errorVariablle){
                console.log(errorVariablle)
            }else{
                console.log("Lectura", contenidoVariable)
            }

        }
    );
    fs.writeFile(
        path, // ruta del archivo
        contenidoNuevo, // contenido a agregar
        {flag: 'a+'}, // modo de escritura
        (error)=>{
            if(error){
                console.log(error) // se imprime el error en la terminal
            }else{
                console.log("Escritura:",contenidoNuevo) // el valor nuevo
            }
        }
    );
}
escribirArchivo('./06-ejemplo.txt',
    'Buenas tardes')