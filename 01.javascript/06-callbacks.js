// 06-callbacks
const fs = require("fs"); //file system
console.log("PRIMERO")
//Se crea 06-ejemplo.txt con el texto "HOLA"

//Lectura del archivo
fs.readFile(
    "./01-variables.js",
    "utf-8",
    (error, contenido) => {
        if(error){
            console.error({mensaje:"error leyendo contenido", error:error});
        }else{
            console.log(contenido);
        }
        fs.readFile(
            "./06-ejemplo.txt",
            "utf-8",
            (errorVariablle, contenidoVariable) => {
                if(errorVariablle){
                    console.error({mensaje:"error leyendo contenido", error:errorVariablle});
                }else{
                    console.log(contenidoVariable);
                }

            }
        );

    }
);
console.log("TERCERO")
