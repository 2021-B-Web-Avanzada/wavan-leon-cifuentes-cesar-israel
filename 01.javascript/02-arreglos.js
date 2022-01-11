 //02-arreglos.js
let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 2, 3.5, "César", undefined, null, {}, [1,3]];

arreglo = [6, 7, 8, 9, 10];

//FOR OF
 for (let numero of arreglo){ //valores
     console.log("numero",numero);
 }
 //FOR In
 for (let indice in arreglo){ //indices
     arreglo[indice];
     console.log("indice", indice);
 }

 let objetoPrueeba = {a: "1", b: "2", c: "3" }
 for(let llave in objetoPrueeba){
     console.log("llave", llave )
 }