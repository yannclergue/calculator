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
let operateur = "*"
let lastNumber = 10

function operation(firstNumber, operateur, lastNumber){
    if(operateur === "+"){
        let resultat = addition(firstNumber, lastNumber)
        return resultat
    }
    else if(operateur === "-"){
        let resultat = soustraction(firstNumber, lastNumber)
        return resultat
    }
    else if(operateur === "*"){
        let resultat = multiplication(firstNumber, lastNumber)
        return resultat
    }
    else if(operateur === "/"){
        let resultat = division(firstNumber, lastNumber)
        return resultat
    }
    else {
        console.log("merci de m'être un opérateur valide, sinon je peux pas calculer")
    }
}

console.log(operation(firstNumber, operateur, lastNumber))

