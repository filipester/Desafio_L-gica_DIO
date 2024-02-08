// Código do desafio do felipao

let listaHerois = [["Kratos", 9500],["Seya", 7000], ["Duke Nukem", 1500]]
let nivelEpico = ""

if (listaHerois[0][1] <= 1000) {
    nivelEpico = "Ferro"
}
else if ((listaHerois[0][1] > 1000) && (listaHerois[0][1] <= 2000)) {
    nivelEpico = "Bronze"
}
else if ((listaHerois[0][1] > 2000) && (listaHerois[0][1] <= 5000)) {
    nivelEpico = "Prata"
}
else if ((listaHerois[0][1] > 5000) && (listaHerois[0][1] <= 7000)) {
    nivelEpico = "Ouro"
}
else if ((listaHerois[0][1] > 7000) && (listaHerois[0][1] <= 8000)) {
    nivelEpico = "Platina"
}
else if ((listaHerois[0][1] > 8000) && (listaHerois[0][1] <= 9000)) {
    nivelEpico = "Ascendente"
}
else if ((listaHerois[0][1] > 9000) && (listaHerois[0][1] <= 10000)) {
    nivelEpico = "Imortal"
}
else {
    nivelEpico = "Radiante"
}


console.log("O herói de nome " + listaHerois[0][0] + " está no nível de " + nivelEpico)