let dia = parseInt(prompt("Digite um valor: "))
let mensagem = (dia == 1) ? ("Domingo") : (dia == 2) ? ("Segunda") : (dia == 3) ? ("Terça") : (dia == 4) ? ("Quarta"): (dia == 5) ? ("Quinta") : (dia == 6) ? ("Sexta") : (dia == 7) ? ("Sabado") : ("Não existe dia correspondente")
alert(mensagem)