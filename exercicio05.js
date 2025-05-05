// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// imc = peso / (altura * altura)

import entradaDeDados from 'readline-sync'

let peso = entradaDeDados.questionFloat('Digite seu Peso: ');
let altura = entradaDeDados.questionFloat('Digite sua Altura: ');
let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log('Abaixo do peso')
}else if(imc >= 18.5 && imc <= 24.55){
    console.log('Normal')
}else if(imc >= 25 && imc <= 29.99){
    console.log('Sobrepeso')
} else{
    console.log('Obesidade')
}


