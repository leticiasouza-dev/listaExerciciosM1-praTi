// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

import entradaDeDados from 'readline-sync'

let numeroMacas = entradaDeDados.questionInt('Digite o numero de maçãs:')
let precoMacas = numeroMacas < 12 ? 0.30 : 0.25 
let valorTotalMacas = numeroMacas * precoMacas

console.log(`Você comprou ${numeroMacas} por ${precoMacas} cada, e o valor total da sua compra é: ${valorTotalMacas}`)
