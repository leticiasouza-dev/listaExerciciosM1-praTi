// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

import entradaDeDados from 'readline-sync'

console.log('--------------------BEM-VINDO AO VERIFICADOR DE VALORes PARES E IMPARES--------------------')
let valor = entradaDeDados.questionInt('Digite um valor do tipo inteiro: ')

if(valor % 2 == 0){
    console.log('Esse valor é Par')
} else{ 
    console.log('Esse valor é ímpar')
}
