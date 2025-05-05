// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

import entradaDeDados from 'readline-sync'

console.log('--------------------BEM-VINDO (a) CALCULADORA SIMPLES--------------------')
let valor1 = entradaDeDados.questionFloat('Digite o valor 1:')
let valor2 = entradaDeDados.questionFloat('Digite o valor 2:')

let numeroEscolhido = entradaDeDados.questionInt('Escolha a operação desejada: \n 1- Adicao \n 2- Subtracao \n 3- Multiplicacao \n 4- Divisao \n');

switch(numeroEscolhido){
    case 1:
        console.log('Resultado: ',valor1 + valor2)
        break
    case 2:
        console.log('Resultado: ', valor1 - valor2)
        break
    case 3:
        if(valor1 === 0 && valor2 === 0){
            console.log('Multiplicação por 0 é igual a zero')
        } else{
            console.log('Resultado: ', valor1 * valor2)
        }
        break
    case 4: 
        if(valor2 === 0){
            console.log('Divisão por zero não é permitida!');
        } else{
            console.log('Resultado: ', valor1 / valor2)
        }
        break
    default:
        console.log('Digite uma Opção válida válido')
}

