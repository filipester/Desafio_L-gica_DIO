// Código do desafio do felipao

let listaHerois = [["Kratos", 9500],["Seya", 6500], ["Duke Nukem", -15], ["Homen-aranha", 1500], ["Homem de Ferro", 2500], ["Shiryu", 7500], ["Wolverine", 8500], ["Thor", 10001]]
let nivelEpico = ""

for (let numeroHeroi = 0; numeroHeroi <= listaHerois.length -1 ; numeroHeroi++){
   
    if (listaHerois[numeroHeroi][1] <= 1000) {
        nivelEpico = "Ferro"
    }
    else if ((listaHerois[numeroHeroi][1] > 1000) && (listaHerois[numeroHeroi][1] <= 2000)) {
        nivelEpico = "Bronze"
    }
    else if ((listaHerois[numeroHeroi][1] > 2000) && (listaHerois[numeroHeroi][1] <= 5000)) {
        nivelEpico = "Prata"
    }
    else if ((listaHerois[numeroHeroi][1] > 5000) && (listaHerois[numeroHeroi][1] <= 7000)) {
        nivelEpico = "Ouro"
    }
    else if ((listaHerois[numeroHeroi][1] > 7000) && (listaHerois[numeroHeroi][1] <= 8000)) {
        nivelEpico = "Platina"
    }
    else if ((listaHerois[numeroHeroi][1] > 8000) && (listaHerois[numeroHeroi][1] <= 9000)) {
        nivelEpico = "Ascendente"
    }
    else if ((listaHerois[numeroHeroi][1] > 9000) && (listaHerois[numeroHeroi][1] <= 10000)) {
        nivelEpico = "Imortal"
    }
    else {
        nivelEpico = "Radiante"
    }
    console.log("O herói de nome " + listaHerois[numeroHeroi][0] + " está no nível de " + nivelEpico)
} 

