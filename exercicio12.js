// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

import entradaDeDados from 'readline-sync'

let valorUsuario = entradaDeDados.questionInt('Digite um valor: ')

if(valorUsuario < 1 || valorUsuario > 10){
    console.log('Digite um valor entre 1 e 10')
} else{
    for(let i = 0; i <= 10; i++){
        let resultado = valorUsuario * i;
        console.log(`${valorUsuario} x ${i} = ${resultado}`)
    }
}