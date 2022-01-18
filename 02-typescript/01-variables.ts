//01-variables.ts
let nombre: string = 'César'; //primitivo
let nombre2 : String = 'César 2'; // Clase String
//nombre = 1;
nombre = 'Israel';

let edad: number = 23;
let casado: boolean = false;
let fecha : Date = new Date();
let sueld: number;
// Duck Typing
let apellido = 'León' // String->
apellido = 'Cifuentes'; //igual a otros string
apellido.toUpperCase();
//apellido = 1

//TIPO any
let mariahuana : any = 2;
mariahuana ='2';
mariahuana = true;
mariahuana = () =>'2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;