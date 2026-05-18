alert("Analisa se o aluno foi aprovado ou reprovado")

let nota1, nota2, nota3, nota4, media;

nota1 = parseFloat(prompt("Digite sua primeira nota: "))
nota2 = parseFloat(prompt("Digite sua segunda nota: "))
nota3 = parseFloat(prompt("Digite sua terceira nota: "))
nota4 = parseFloat(prompt("Digite sua quarta nota: "))

media = ((nota1 + nota2 + nota3 + nota4) / 4)

if (media >= 5) {
    alert("Você foi aprovado!")
} else{
    alert("Você infelizmente foi reprovado.")
}