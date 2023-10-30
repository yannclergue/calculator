function addition(a, b){
    return a + b
}

console.log(`Voici le résultat de l'adition : ${addition(2, 2)}`)

function soustraction(a, b){
    return a - b
}

console.log(`Voici le résultat de la soustraction : ${soustraction(4, 2)}`)

function multiplication(a, b){
    return a * b
}

console.log(`Voici le résultat de la multiplication : ${multiplication(4, 2)}`)

function division(a, b){
    return a / b
}

console.log(`Voici le résultat de la division : ${division(4, 2)}`)

let firstNumber = 5
let operator = "+"
let lastNumber = 10

function operation(firstNumber, lastNumber){
    let resultat = soustraction(firstNumber, lastNumber)
    return resultat
}

console.log(operation(5, 10))

