const promesaLeerArchivo =()=>{
    return new Promise(
        (res, rej) =>{
            res('Contenido leer archivo');
        }
    );
}
const  promesaEscribirArchivo = ()=>{
    return new Promise(
        (res, rej)=>{
            res('contenido escribir archivo');
        }
    );
}


//ASYNC AWAIT
//AL MOMENTO DE UTILIZAR ASYNC, LA FUNCIÓN SE CONVIERTE EN UNA PROMESA
const ejemplo1 = async function (){}
const ejemplo2 = async ()=> {}
async function ejercicio(){
    console.log('1')
    let nuevoContenido ='';
    try {
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual)
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    }catch (error){
        console.error(error);
    }
    console.log('6')
    console.log('7')
    return nuevoContenido
}

ejercicio()
.then(
    (data)=>{
        console.log("Esta es la respuesta del ASYN AWAIT", data);
    }
)
.catch()
.finally();