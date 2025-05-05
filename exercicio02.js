// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.
import entradaDeDados from 'readline-sync'

console.log('--------------------BEM-VINDO (a) AO VERIFICADOR DE IDADE--------------------')
let idade = entradaDeDados.questionInt('Digite a sua idade: ')

if(idade <= 11){
    console.log('Criança')
} else if(idade > 11 && idade <= 18){
    console.log('Adolescente')
} else if(idade > 18 && idade <= 59){
    console.log('Adulto')
} else {
    console.log('idoso')
}
