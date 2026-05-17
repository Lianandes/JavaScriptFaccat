let anoAtual, anoNascimento, voto;

anoAtual = parseInt(prompt("Qual o ano atual? "));
anoNascimento = parseInt(prompt("Em qual ano você nasceu? "));

voto = anoAtual - anoNascimento;

if (voto < 16){
    window.alert("Você não pode votar.")
}else{
    window.alert("Você pode votar!")
}