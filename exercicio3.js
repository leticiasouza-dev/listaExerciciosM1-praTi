// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

import entradaDeDados from 'readline-sync'

let nota = entradaDeDados.questionFloat('Digite sua Nota: ')


if(nota > 10){
    console.log('Digite uma nota com um valor máximo de 10')
} else{
    verificaNota(nota)
}

function verificaNota(nota){
    if(nota < 5){
        console.log('Reprovado')
    } else if(nota >= 5 && nota < 7){
        console.log('Recuperação')
    } else {
        console.log('Aprovado')
    }
}
