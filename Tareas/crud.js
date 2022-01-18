/*
    CRUD utilizando dos entidades
    Padre: Empresa
    Hijo: aplicación
**/
//NombreArchivo
const file = "Empresas-Aplicaciones.json"
//Librerías
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");

//npm install inquirer
function Empresa (nombre,descripcion,fechafundacion,webSite){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaFundacion = fechafundacion;
    this.webSite = webSite;
    this.aplicaciones = {}
}
function Aplicacion(nombre,descripcion,fechaCreacion,version, costo){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.versionActual  =version;
    this.costo = costo;
}

function promesaLectura(path){
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
                        resolve( JSON.parse(contenidoVariable.toString()));
                    }
                }
            );
        }
    );
    return lecturaPromesa
}
function promesaEscribirArchivo(path,contenido){
    const promesaEscritura = new Promise(
        (resolve,
         reject
        )=>{
            fs.writeFile(
                path,
                contenido,
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

async function menuSeleccionEmpresaAplicación(){
    try{
        while (true) {
            await listarEmpresas()
            const respuesta = await inquirer
                .prompt([
                        {
                            type: 'input',
                            name: 'empresa',
                            message: 'Ingrese 1 para salir\nEmpresa dueña de las aplicaciones: '

                        }
                    ]
                );
            if(respuesta.empresa === '1'){
                break
            }else{
                await promesaLectura(file)
                    .then(
                        (contenido)=>{
                            if(contenido[respuesta.empresa]){
                                return menuAplicacion(contenido[respuesta.empresa])
                            }else{
                                console.log('Ingrese un nombre de empresa válido')
                            }
                        }
                    )
            }
        }

    }catch (e){
        console.error(e)
    }
}
async function menuAplicacion(empresa){
    try{
        while (true) {
            const respuesta = await inquirer
                .prompt([
                        {
                            type: 'input',
                            name: 'respuesta',
                            message: 'Ingresa el número\n' +
                                '1.- Listar Aplicaciones \n' +
                                '2.- Agregar Aplicación \n' +
                                '3.- Eliminar Aplicación \n' +
                                '4.- Actualizar Aplicación \n' +
                                '5.- Salir \n' +
                                'Respuesta: '

                        }
                    ]
                );
            if (respuesta.respuesta === '1') {
                await listarAplicacionens(empresa)
            } else if (respuesta.respuesta === '2') {
                await agregarAplicacion(empresa)
            } else if (respuesta.respuesta === '3') {
                await eliminarAplicacion(empresa)
            } else if (respuesta.respuesta === '4') {
                await actualizarAplicacion(empresa)
            } else if (respuesta.respuesta === '5') {
                break;
            }else{
                console.log("Vuelva a intentarlo")
            }
            await promesaLectura(file)
                .then(
                    (contenido) =>{
                        empresa = contenido[empresa.nombre]
                    }
                )
        }
    }catch (e){
        console.error(e)
    }
}
async function listarAplicacionens(empresa){
    console.table(empresa.aplicaciones)
}
async function agregarAplicacion(empresa){
    try{
        console.log("Ingrese los datos de la Aplicación")
        const respuesta = await inquirer
            .prompt([
                    {
                        type: 'input',
                        name: 'nombre',
                        message: 'Nombre:'
                    },
                    {
                        type: 'input',
                        name: 'descripcion',
                        message: 'Descipción:'
                    },
                    {
                        type: 'input',
                        name: 'anio',
                        message: 'Fecha de Actualización \n' +
                            '\tAño:'
                    },
                    {
                        type: 'input',
                        name: 'mes',
                        message: '\tMes:'
                    } ,
                    {
                        type: 'input',
                        name: 'dia',
                        message: '\tDía:'
                    },
                    {
                        type: 'input',
                        name: 'dia',
                        message: '\tDía:'
                    },
                    {
                        type: 'input',
                        name: 'version',
                        message: 'Versión actual:'
                    },
                    {
                        type: 'input',
                        name: 'costo',
                        message: 'Costo:'
                    }
                ]
            );
        const nuevaAplicacioin = new Aplicacion(
            respuesta.nombre,
            respuesta.descripcion,
            new Date(respuesta.anio, respuesta.mes-1, respuesta.dia,0,0,0,0),
            respuesta.version,
            respuesta.costo
        )
        await promesaLectura(file)
            .then(
                (contenido)=>{
                    contenido[empresa.nombre].aplicaciones[nuevaAplicacioin.nombre] = nuevaAplicacioin
                    return promesaEscribirArchivo(file,JSON.stringify(contenido))
                }
            )
    }catch (e){
        console.error(e)
    }
}
async function eliminarAplicacion(empresa){
    await listarAplicacionens(empresa)
    const respuesta = await inquirer
        .prompt([
                {
                    type: 'input',
                    name: 'nombreAplicacion',
                    message: 'Nombre de la Aplicación a ELIMINAR:'
                }
            ]
        );
    await promesaLectura(file)
        .then(
            (contenido)=>{
                try{
                    delete contenido[empresa.nombre].aplicaciones[respuesta.nombreAplicacion]
                    return promesaEscribirArchivo(file,JSON.stringify(contenido))
                    console.log("Eliminación Exitosa")
                }catch (error){
                    console.log('Error de eliminación', error)
                }
            }
        )
}
async function actualizarAplicacion(empresa){
    await listarAplicacionens(empresa)
    const respuesta = await inquirer
        .prompt([
                {
                    type: 'input',
                    name: 'nombreAplicacion',
                    message: 'Nombre de la Aplicacion a ACTUALIZAR:'
                },
                {
                    type: 'input',
                    name: 'numeroAtributo',
                    message: 'Ingrese el numeral del atributo a actualizar\n' +
                        '1.- Nombre\n' +
                        '2.- Descripción\n'+
                        '3.- Versión Actual\n' +
                        '4.- Costo\n' +
                        'Respuesta: '
                },
                {
                    type: 'input',
                    name: 'valor',
                    message: 'Ingrese el valor nuevo: '
                }
            ]
        );
    await promesaLectura(file)
        .then(
            (contenido)=>{
                try {
                    let datosCorrecto = true
                    switch (respuesta.numeroAtributo){
                        case '1' :
                            const nuevoElemento = contenido[empresa.nombre].aplicaciones[respuesta.nombreAplicacion]
                            nuevoElemento.nombre = respuesta.valor
                            contenido[empresa.nombre].aplicaciones[nuevoElemento.nombre]= nuevoElemento;
                            delete contenido[empresa.nombre].aplicaciones[respuesta.nombreAplicacion]
                            break;
                        case '2':
                            contenido[respuesta.nombreAplicacion].descripcion = respuesta.valor;
                            break;
                        case '3':
                            contenido[respuesta.nombreAplicacion].versionActual = respuesta.valor;
                            break;
                        case '4':
                            contenido[respuesta.nombreAplicacion].costo = respuesta.valor;
                            break;
                        default:
                            datosCorrecto = false
                            console.log("1Vuelva a Intentarlo. Verifique los datos ingresados")
                    }
                    if(datosCorrecto){
                        return promesaEscribirArchivo(file,JSON.stringify(contenido))
                    }

                }catch (error){
                    console.log("2Vuelva a Intentarlo. Verifique los datos ingresados", error)
                }
            }
        )
}

async function listarEmpresas(){
    await promesaLectura(file)
        .then(
            (contenido)=>{
                if(Object.keys(contenido).length != 0){
                    console.table(contenido,['nombre','descripcion','fechaFundacion','webSite'])
                    return true
                }else{
                    console.log("No hay empresas registradas")
                    return false
                }

            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
}
async function agregarEmpresa(){
    try{
        console.log("Ingrese los datos de la empresa")
        const respuesta = await inquirer
            .prompt([
                    {
                        type: 'input',
                        name: 'nombre',
                        message: 'Nombre:'
                    },
                    {
                        type: 'input',
                        name: 'descripcion',
                        message: 'Descipción:'
                    },
                    {
                        type: 'input',
                        name: 'anio',
                        message: 'Fecha de Fundación \n' +
                            '\tAño:'
                    },
                    {
                        type: 'input',
                        name: 'mes',
                        message: '\tMes:'
                    } ,
                    {
                        type: 'input',
                        name: 'dia',
                        message: '\tDía:'
                    },
                    {
                        type: 'input',
                        name: 'dia',
                        message: '\tDía:'
                    },
                    {
                        type: 'input',
                        name: 'webSite',
                        message: 'Sitio Web:'
                    }
                ]
            );

        promesaLectura(file)
            .then(
                (contenido)=>{
                    contenido[respuesta.nombre] = new Empresa(
                                            respuesta.nombre,
                                            respuesta.descripcion,
                                            new Date(respuesta.anio, respuesta.mes-1, respuesta.dia,0,0,0,0),
                                            respuesta.webSite)
                    return promesaEscribirArchivo(file,JSON.stringify(contenido))
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
    }catch (e){
        console.error(e)
    }
}
async function eliminarEmpresa(){
    await listarEmpresas()
    const respuesta = await inquirer
        .prompt([
                {
                    type: 'input',
                    name: 'nombreEmpresa',
                    message: 'Nombre de la empresa a ELIMINAR:'
                }
            ]
        );
    await promesaLectura(file)
        .then(
            (contenido)=>{
                try{
                    delete contenido[respuesta.nombreEmpresa]
                    return promesaEscribirArchivo(file,JSON.stringify(contenido))
                    console.log("Eliminación Exitosa")
                }catch (error){

                }

            }
        )
}
async function actualizarEmpresa(){
    await listarEmpresas()
    const respuesta = await inquirer
        .prompt([
                {
                    type: 'input',
                    name: 'nombreEmpresa',
                    message: 'Nombre de la empresa a ACTUALIZAR:'
                },
                {
                    type: 'input',
                    name: 'numeroAtributo',
                    message: 'Ingrese el numeral del atributo a actualizar\n' +
                        '1.- Nombre\n' +
                        '2.- Descripción\n'+
                        '3.- Web Site\n' +
                        'Respuesta: '
                },
                {
                    type: 'input',
                    name: 'valor',
                    message: 'Ingrese el valor nuevo: '
                }
            ]
        );
    await promesaLectura(file)
        .then(
            (contenido)=>{
                let nombreAtributo = ""
                try {
                    let datosCorrecto = true
                    switch (respuesta.numeroAtributo){
                        case '1' :
                            const nuevoElemento = contenido[respuesta.nombreEmpresa]
                            nuevoElemento.nombre = respuesta.valor
                            contenido[respuesta.valor]= nuevoElemento;
                            delete contenido[respuesta.nombreEmpresa]
                            break;
                        case '2':
                            contenido[respuesta.nombreEmpresa].descripcion = respuesta.valor;
                            break;
                        case '3':
                            contenido[respuesta.nombreEmpresa].webSite = respuesta.valor;
                            break;
                        default:
                            datosCorrecto = false
                            console.log("1Vuelva a Intentarlo. Verifique los datos ingresados")
                    }
                    if(datosCorrecto){
                        return promesaEscribirArchivo(file,JSON.stringify(contenido))
                    }

                }catch (error){
                    console.log("2Vuelva a Intentarlo. Verifique los datos ingresados", error)
                }
            }
        )


}
async function menuEmpresas(){
    try{
        while (true) {
            const respuesta = await inquirer
                .prompt([
                        {
                            type: 'input',
                            name: 'respuesta',
                            message: 'Ingresa el número\n' +
                                '1.- Listar Empresas \n' +
                                '2.- Agregar Empresa \n' +
                                '3.- Eliminar Empresa \n' +
                                '4.- Actualizar Empresa \n' +
                                '5.- Salir \n' +
                                'Respuesta: '

                        }
                    ]
                );
            if (respuesta.respuesta === '1') {
                await listarEmpresas()
            } else if (respuesta.respuesta === '2') {
                await agregarEmpresa();
            } else if (respuesta.respuesta === '3') {
                await eliminarEmpresa()
            } else if (respuesta.respuesta === '4') {
                await actualizarEmpresa()
            } else if (respuesta.respuesta === '5') {
                break;
            }else{
                console.log("Vuelva a intentarlo")
            }
        }
    }catch (e){
        console.error(e)
    }
}

async function main(){
    try{
        while (true) {
            const respuesta = await inquirer
                .prompt([
                        {
                            type: 'input',
                            name: 'respuesta',
                            message: 'Ingresa el número\n1.- Aplicaciones \n2.- Empresas \n3.- Salir \nRespuesta: '

                        }
                    ]
                );
            if (respuesta.respuesta === '1') {
                console.log(respuesta.respuesta)
                await menuSeleccionEmpresaAplicación();
            } else if (respuesta.respuesta === '2') {
                await menuEmpresas();
            } else if (respuesta.respuesta === '3') {
                break;
            }else{
                console.log("Vuelva a intentarlo")
            }
        }
    }catch (e){
        console.error(e)
    }

}

main()