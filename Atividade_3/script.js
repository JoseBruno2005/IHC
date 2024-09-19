let button = document.getElementById("calcular")

button.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1")
    let numero2 = document.getElementById("numero2")
    let resultado = document.getElementById("p-resultado")

    let opcao = document.getElementById("select").value;

    let resultadoOperacao;

    const numero1Int = parseInt(numero1.value.trim())
    const numero2Int = parseInt(numero2.value.trim())

    if(numero1.value.trim() === "" || numero2.value.trim() === ""){
        alert("Digite um número")
        return
    }
    else if(opcao === "soma"){
        resultadoOperacao =  numero1Int + numero2Int
        resultado.textContent = resultadoOperacao
    }
    else if(opcao === "multiplicacao"){
        resultadoOperacao = numero1Int * numero2Int
        resultado.textContent = resultadoOperacao
    }
    else if(opcao === "divisao"){
        if(numero1Int === 0 || numero2Int === 0){
            resultado.textContent = "Não é possível divisão por 0"
            return
        }
        resultadoOperacao = numero1Int / numero2Int
        resultado.textContent = resultadoOperacao
    }
    else if(opcao === "subtracao"){
        resultadoOperacao = numero1Int - numero2Int
        resultado.textContent = resultadoOperacao
    }    
})
