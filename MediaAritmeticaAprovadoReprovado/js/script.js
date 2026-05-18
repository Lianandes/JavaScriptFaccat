let nota, nota1, nota2, nota3, media;

nota = parseFloat(prompt("Qual foi sua primeira nota? "));
nota1 = parseFloat(prompt("Qual foi sua segunda nota? ")); 
nota2 = parseFloat(prompt("Qual foi a terceira nota? "));
nota3 = parseFloat(prompt("Qual foi a quarta nota? "));

media = (nota + nota1 + nota2 + nota3) / 4;

if (media < 6.0){
    window.alert(`Sua nota foi ${media}, infelizmente você foi reprovado.`)
}else{
    window.alert(`Sua nota foi ${media}, você foi aprovado!`)
}