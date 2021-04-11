class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
}

class Desarrollador extends Persona{
    constructor(nombre, edad, tipo){
        super(nombre, edad);
        this.tipo = tipo;
    }
    saludarDesarollador(){
        this.saludar();
        console.log(`Soy desarrollador ${this.tipo}`);
    }
}

// let persona = new Persona('Taylor',36);
// persona.saludar();

let desarrollador = new Desarrollador('taylor',36,"frontend");
desarrollador.saludarDesarollador();