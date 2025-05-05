// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

import entradaDeDados from 'readline-sync'

let numero = entradaDeDados.questionInt('Digite um numero');
let ValorParaExibirEmTela = 10

for(let i = 0; i < ValorParaExibirEmTela ; i++){
    console.log(numero)
}