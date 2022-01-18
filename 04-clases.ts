// 04-clases.ts

class Persona{
    public nombre: string
    public apellido:string
    static nombreReferencial;string = 'Humano'
    protected nombreYApellido = '' //Duck Typing -> string
    constructor(
        nombrePArametro: string,
        apellidoParametro: string
    ) {
        this.nombre = nombrePArametro
        this.apellido = apellidoParametro
        this.nombreYApellido = nombrePArametro + apellidoParametro
    }
    private mostrarNombreApellido():string{
        return this.nombreYApellido
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string, //Modificador acceso -> Propiedad de la clase
        public estadoCivil: string // Modficadr de acceso -> Propiedad de la clase
    ) {
        super(nombreParametro,apellidoParametro);
    }
}

const cesar = new Usuario(
    'César',
    'León',
    '1725407553',
    'soltero'
);
cesar.cedula
cesar.estadoCivil
cesar.nombre
cesar.apellido