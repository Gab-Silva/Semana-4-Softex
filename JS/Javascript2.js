let mes = parseInt(prompt("Informe um número entre 1 ou 12:"))
console.log("Número digitado para mês: " + mes)

switch (mes) {
    case 1:
        alert("Janeiro")
        break;
    case 2:
        alert("Fevereiro")
        break;
    case 3:
        alert("Março")
        break;
    case 4:
        alert("Abril")
        break;
    case 5:
        alert("Maio")
        break;
    case 6:
        alert("Junho")
        break;
    case 7:
        alert("Julho")
        break;
    case 8:
        alert("Agosto")
        break;
    case 9:
        alert("Setembro")
        break;
    case 10:
        alert("Outubro")
        break;
    case 11:
        alert("Novembro")
        break;
    case 12:
        alert("Dezembro")
        break;
    default:
        alert("O número informado não é referente a um mês")
        break;
}

let nome = prompt("Qual o seu nome?")
let profissao = prompt("Em que você trabalha?")
console.log("Nome: " + nome + ". Profissão: " + profissao)

document.write("Olá, " + nome + "! Ótimo ter você conosco.")
document.write("<hr>")
document.write("Seu nome: " + nome)
document.write("<br>")
document.write("Sua profissão: " + profissao)
document.write("<br>")
document.write("Mês escolhido para férias: " + mes)