//Adição
const adicao2 = function(n1, n2){
   return n1 + n2
}
console.log(adicao2(2,3))

console.log("--------------------")


//Subtração
const sub2 = function(n1, n2){
   return n1 - n2
}
console.log(sub2(4,3))

console.log("--------------------")


//Multiplicação
const mult2 = function(n1, n2){
   return n1 * n2
}
console.log(mult2(4,3))

console.log("--------------------")

//Divisão
const divisao2 = function(n1, n2){
    if(n2 == 0){
       return "Erro, divisão por 0 não é valido!"
    }else{
        return n1/n2
    }
}


console.log(divisao2(12,3))
console.log(divisao2(12,0))

console.log("--------------------")

//Número Par
const numPar2 = function(n){
    if(n%2 ===0){
        return "O número é Par"
    }
    else{
        return "O número é ímpar"
    }
}

console.log(numPar2(1))

console.log("--------------------")

//Soma de Intervalos 
const somaIntervalo2 = function(n1,n2){
    let valor = 0
    for(let i = n1; i < n2 + 1; i++){
        valor += i
    }
    return valor
}

console.log(somaIntervalo2(1,5))

console.log("--------------------")

//Fatorial
const fatorial2 = function(n){
    let fatorial = 1
    if(n === 0){
        return "Fatorial de ${n} é igual a 1"
    }else{
        for(let i = n; i > 0; i--){
            fatorial*= i
        }
        return fatorial
    }
}
fatorial2(5)

console.log("--------------------")

//Contar Vogais
const contarVogais = function(palavra){
    let contador = 0
    let vogais = ["a", "e", "i", "o", "u"]
    for(let i = 0; i< palavra.length; i++){
        if(vogais.includes(palavra[i])){
            console.log(palavra[i])
            contador+=1
        }
    }
    console.log(contador)
}
contarVogais("java")