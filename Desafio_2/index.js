// Código do desafio 2 do felipao


// Lista de Heróis possui o nome do herói, seu número de vitórias e seu número de derrotas
let listaHerois = [["Kratos", 110, 12],["Seya", 95, 11], ["Duke Nukem", 1, 10], ["Homen-aranha", 20 , 9], ["Homem de Ferro", 49, 1], ["Wolverine", 80, 10], ["Thor", 150, 0]]

let listaRankeada = []

let nivelEpico = ""

for (let numeroHeroi = 0; numeroHeroi <= listaHerois.length -1; numeroHeroi++) {
    listaRankeada[numeroHeroi] = ([listaHerois[numeroHeroi][0],calcularSaldoVitorias(listaHerois[numeroHeroi][1],listaHerois[numeroHeroi][2])])
    //console.log(listaRankeada[numeroHeroi][0] + "  , " + listaRankeada[numeroHeroi][1])
}



for (let numeroHeroi = 0; numeroHeroi <= listaHerois.length -1; numeroHeroi++){
   
    if (listaRankeada[numeroHeroi][1] <= 10) {
        nivelEpico = "Ferro"
    }
    else if ((listaRankeada[numeroHeroi][1] > 10) && (listaRankeada[numeroHeroi][1] <= 20)) {
        nivelEpico = "Bronze"
    }
    else if ((listaRankeada[numeroHeroi][1] > 20) && (listaRankeada[numeroHeroi][1] <= 50)) {
        nivelEpico = "Prata"
    }
    else if ((listaRankeada[numeroHeroi][1] > 50) && (listaRankeada[numeroHeroi][1] <= 80)) {
        nivelEpico = "Ouro"
    }
    else if ((listaRankeada[numeroHeroi][1] > 80) && (listaRankeada[numeroHeroi][1] <= 90)) {
        nivelEpico = "Diamante"
    }
    else if ((listaRankeada[numeroHeroi][1] > 90) && (listaRankeada[numeroHeroi][1] <= 100)) {
        nivelEpico = "Lendário"
    }
    else {
        nivelEpico = "Imortal"
    }
    console.log("O herói de nome " + listaRankeada[numeroHeroi][0] + " tem saldo de vitórias de "+ listaRankeada[numeroHeroi][1] +" e está no nível de " + nivelEpico)
} 




function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}
