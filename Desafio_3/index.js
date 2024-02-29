class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "guerreiro") {
            console.log(`${this.tipo} atacou usando espada`)
        }
        else if (this.tipo === "mago"){
            console.log(`${this.tipo} atacou usando magia`)
        }
        else if (this.tipo === "monge"){
            console.log(`${this.tipo} atacou usando artes marciais`)
        }
        else if (this.tipo === "ninja"){
            console.log(`${this.tipo} atacou usando shuriken`)
        }
    }
}


const conan = new Heroi("Conan", 28, "guerreiro");
const merlin = new Heroi("Merlin", 89, "mago");
const shaolin = new Heroi("Shaolin", 35, "monge");
const shinobi = new Heroi("Shinobi", 21, "ninja");

conan.atacar()
merlin.atacar()
shaolin.atacar()
shinobi.atacar()